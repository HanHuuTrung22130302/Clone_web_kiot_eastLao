/**
 * Generates typed data for the UI from crawl evidence:
 *  - output/markdown/ai-rebuild-handoff/implementation_manifest.json
 *  - output/markdown/ai-rebuild-handoff/pages/*.md
 * Writes:
 *  - src/data/routes.json           (all routes metadata)
 *  - src/data/navigation.json       (shared nav/footer extracted from home & blog)
 *  - src/data/docs-tree.json        (docs sidebar for /huong-dan-su-dung-kiotviet)
 *  - src/data/blog-posts.json       (blog listing from /blog)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const EVIDENCE = path.resolve(ROOT, "..", "output", "markdown", "ai-rebuild-handoff");
const PAGES_DIR = path.join(EVIDENCE, "pages");
const OUT_DIR = path.join(ROOT, "src", "data");

fs.mkdirSync(OUT_DIR, { recursive: true });

// ---------- 1. Manifest ----------
const manifest = JSON.parse(
  fs.readFileSync(path.join(EVIDENCE, "implementation_manifest.json"), "utf8")
);

const routes = manifest.routes_and_states.map((r) => ({
  url: r.url,
  type: r.profile?.page_type ?? "unknown",
  title: r.title ?? "",
  topic: r.profile?.topic ?? "",
  heading: r.profile?.primary_heading ?? "",
  description: r.profile?.description ?? "",
  fingerprint: r.profile?.template_fingerprint ?? "",
  duplicateOf: r.duplicate_of ?? "",
  spec: r.spec ?? "",
  uiState: r.ui_state ?? "",
}));

// Distinct marketing URLs (kiotviet.vn only, skip app/hash urls)
const distinctRoutes = [];
const seen = new Set();
for (const r of routes) {
  const u = r.url.replace(/\/$/, "");
  if (seen.has(u)) continue;
  seen.add(u);
  if (u.includes("kiotviet.vn") && !u.includes("hant.") && !u.includes("#")) {
    distinctRoutes.push(r);
  }
}
distinctRoutes.sort((a, b) => a.url.localeCompare(b.url));

// ---------- 2. Page MD parsing ----------
function parsePageMd(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split("\n");
  const out = {
    slug: path.basename(filePath, ".md"),
    title: "",
    url: "",
    sourceHtml: "",
    type: "",
    topic: "",
    heading: "",
    description: "",
    duplicateOf: "",
    components: [],
    forms: [],
    links: [],
    textColors: [],
    bgColors: [],
    fontFamilies: [],
    fontSizes: [],
  };
  let section = null;
  for (const line of lines) {
    if (line.startsWith("# ")) {
      out.title = line.slice(2).trim();
      continue;
    }
    if (line.startsWith("## ")) {
      section = line.slice(3).trim().toLowerCase();
      continue;
    }
    if (line.startsWith("- Snapshot ID: `")) {
      out.url = line.match(/`([^`]*)`/)?.[1] ?? "";
      continue;
    }
    if (line.startsWith("- Source HTML: `")) {
      out.sourceHtml = line.match(/`([^`]*)`/)?.[1] ?? "";
      continue;
    }
    if (section === "page classification") {
      const m = line.match(/-\s*([A-Za-z\s]+):\s*(.+)/);
      if (!m) continue;
      const key = m[1].trim().toLowerCase();
      const val = m[2].trim();
      if (key === "type") out.type = val.replace(/`/g, "");
      else if (key === "topic") out.topic = val;
      else if (key === "main heading") out.heading = val;
      else if (key === "description") out.description = val;
      continue;
    }
    if (section === "duplicate template") {
      const m = line.match(/same detected product-detail template as\s+`([^`]*)`/);
      if (m) out.duplicateOf = m[1];
      continue;
    }
    if (section === "components") {
      const m = line.match(/^\*\*\s*(.+?)\s*\*\*\s+`([^`]*)`\s*-\s*(.*)/);
      if (m) out.components.push({ name: m[1], selector: m[2], text: m[3] });
      continue;
    }
    if (section && section.startsWith("forms")) {
      const m = line.match(/-?\s*([A-Za-z_\u00C0-\u024F ]+):\s*(.+?);?$/);
      if (m && !line.startsWith("###")) {
        out.forms.push({ name: m[1].trim(), detail: m[2] });
      }
      continue;
    }
    if (section && (section.startsWith("navigation and assets") || section === "navigation")) {
      const m = line.match(/^- Link:\s*`([^`]*)`\s*->\s*`([^`]*)`/);
      if (m) out.links.push({ label: m[1], href: m[2] });
      continue;
    }
    if (section === "visual token sample") {
      continue;
    }
    if (section === "text colors") {
      const m = line.match(/^- `([^`]*)`\s*\((\d+)\s*observations?\)/);
      if (m) out.textColors.push({ value: m[1], count: Number(m[2]) });
      continue;
    }
    if (section === "background colors") {
      const m = line.match(/^- `([^`]*)`\s*\((\d+)\s*observations?\)/);
      if (m) out.bgColors.push({ value: m[1], count: Number(m[2]) });
      continue;
    }
    if (section === "font families") {
      const m = line.match(/^- `([^`]*)`\s*\((\d+)\s*observations?\)/);
      if (m) out.fontFamilies.push({ value: m[1], count: Number(m[2]) });
      continue;
    }
    if (section === "font sizes") {
      const m = line.match(/^- `([^`]*)`\s*\((\d+)\s*observations?\)/);
      if (m) out.fontSizes.push({ value: m[1], count: Number(m[2]) });
      continue;
    }
  }
  return out;
}

const pages = fs
  .readdirSync(PAGES_DIR)
  .filter((f) => f.endsWith(".md"))
  .map((f) => parsePageMd(path.join(PAGES_DIR, f)));

const homeLike = pages.find((p) => p.url.includes("kiotviet.vn/") && p.type === "product-listing") || pages[0];

// ---------- 3. Navigation ----------
// Prefer links from the home / blog evidence; de-duplicate, keep site-internal + cheap external.
const NAV_PRIORITY = ["blog", "khach-hang", "phi-dich-vu", "giai-phap", "ho-tro", "dang-ky"];
const navCandidates = [...(homeLike?.links ?? []), ...(pages.find((p) => p.url.includes("/blog"))?.links ?? [])];
const navLinks = [];

for (const l of navCandidates) {
  if (l.href === "javascript:void(0)") continue;
  let url = l.href;
  if (url.startsWith("https://www.kiotviet.vn")) url = url.replace("https://www.kiotviet.vn", "");
  if (url.startsWith("http") || url.startsWith("mailto") || url.startsWith("tel")) continue;
  if (navLinks.some((x) => x.href === url)) continue;
  navLinks.push({ label: l.label, href: url || "/" });
}

const navigation = {
  primary: navLinks.slice(0, 40),
  footer: navLinks.slice(40, 140),
};

// ---------- 4. Docs tree ----------
const docsBySection = new Map();
for (const p of pages) {
  if (p.type !== "product-detail") continue;
  if (!p.url.startsWith("https://www.kiotviet.vn/huong-dan-su-dung-kiotviet")) continue;
  const rest = p.url.replace("https://www.kiotviet.vn/huong-dan-su-dung-kiotviet/", "").replace(/\/$/, "");
  const parts = rest.split("/"); // e.g. ["retail-hang-hoa","danh-sach-hang-hoa"]
  if (parts.length < 2) continue;
  const section = parts[0];
  const slug = parts.slice(1).join("/");
  if (!docsBySection.has(section)) docsBySection.set(section, []);
  docsBySection.get(section).push({
    slug,
    title: p.heading || p.topic || slug,
    topic: p.topic,
    url: "/huong-dan-su-dung-kiotviet/" + parts.join("/") + "/",
    duplicateOf: p.duplicateOf,
    description: p.description.slice(0, 300),
  });
}
const docsTree = [];
for (const [section, items] of docsBySection) {
  docsTree.push({ section, items });
}
docsTree.sort((a, b) => a.section.localeCompare(b.section));

// ---------- 5. Blog posts ----------
const blogPage = pages.find((p) => p.url.includes("/blog"));
const blogPosts = (blogPage?.links ?? [])
  .filter(
    (l) =>
      l.label &&
      l.label !== "unlabeled" &&
      !l.href.includes("/t/") &&
      l.href.startsWith("https://www.kiotviet.vn") &&
      !l.href.endsWith("/blog") &&
      !l.href.endsWith("/blog/")
  )
  .filter((l, i, arr) => arr.findIndex((x) => x.href === l.href) === i)
  .map((l) => ({
    title: l.label,
    slug: l.href.replace(/\/$/, "").split("/").pop(),
    href: l.href.replace("https://www.kiotviet.vn", ""),
  }));

// ---------- Write ----------
const write = (name, data) => {
  fs.writeFileSync(path.join(OUT_DIR, name), JSON.stringify(data, null, 2), "utf8");
};

write("routes.json", {
  total: manifest.route_and_state_count,
  distinctCount: distinctRoutes.length,
  routes: distinctRoutes.map((r) => ({
    url: r.url,
    type: r.type,
    topic: r.topic,
    title: r.title,
    heading: r.heading,
    description: r.description.slice(0, 400),
    fingerprint: r.fingerprint,
    duplicateOf: r.duplicateOf,
    spec: r.spec,
  })),
});
write("navigation.json", navigation);
write("docs-tree.json", docsTree);
write("blog-posts.json", blogPosts.slice(0, 24));

// Console summary
const byType = {};
for (const r of routes) byType[r.type] = (byType[r.type] ?? 0) + 1;
console.log("Routes:", routes.length, JSON.stringify(byType));
console.log("Distinct marketing URLs:", distinctRoutes.length);
console.log("Docs sections:", docsTree.length, "| docs pages:", docsTree.reduce((a, s) => a + s.items.length, 0));
console.log("Blog posts extracted:", blogPosts.length);
console.log("Nav primary links:", navigation.primary.length);
console.log("Written to src/data/");