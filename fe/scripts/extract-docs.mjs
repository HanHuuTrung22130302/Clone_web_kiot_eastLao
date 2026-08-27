import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MANIFEST = path.join(
  ROOT,
  "..",
  "output",
  "markdown",
  "ai-rebuild-handoff",
  "implementation_manifest.json"
);
const OUT = path.join(ROOT, "src", "data", "docs-content.json");

const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));

function cleanHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<img[^>]*>/g, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&rarr;/g, "→")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function extractArticle(html) {
  let start = html.indexOf('class="supportMain-content_article-wrapper"');
  if (start < 0) start = html.indexOf('supportMain-content_article-wrapper');
  if (start < 0) return null;
  const divStart = html.lastIndexOf("<div", start);
  if (divStart >= 0) start = divStart;

  const endCandidates = [
    html.indexOf("supportMain-content_helpful", start),
    html.indexOf("supportMain-content_next", start),
    html.indexOf("supportMain-content_bottom", start),
  ];
  let end = html.length;
  for (const c of endCandidates) {
    if (c > start && c - start < 400000) {
      end = c;
      break;
    }
  }

  const region = html.slice(start, end);
  const blocks = [];
  const blockRe =
    /<(h[1-6]|p|li|ul|ol|blockquote)\b[^>]*>([\s\S]*?)<\/(h[1-6]|p|li|ul|ol|blockquote)>|<img[^>]*>/g;
  let m;
  while ((m = blockRe.exec(region))) {
    if (m[0].startsWith("<img")) {
      const src = m[0].match(/src="([^"]*)"/)?.[1] ?? "";
      const alt = m[0].match(/alt="([^"]*)"/)?.[1] ?? "";
      blocks.push({ type: "image", src, alt });
      continue;
    }
    const openTag = m[1];
    const inner = m[2] ?? "";
    if (/^h[1-6]$/.test(openTag)) {
      const text = cleanHtml(inner);
      if (text) blocks.push({ type: "heading", level: Number(openTag[1]), text });
    } else if (openTag === "p") {
      const text = cleanHtml(inner);
      if (text) blocks.push({ type: "paragraph", text });
    } else if (openTag === "li") {
      const text = cleanHtml(inner);
      if (text) blocks.push({ type: "list_item", text });
    } else if (openTag === "ul" || openTag === "ol") {
      blocks.push({ type: "list_start", ordered: openTag === "ol" });
    } else if (openTag === "blockquote") {
      const text = cleanHtml(inner);
      if (text) blocks.push({ type: "quote", text });
    }
  }
  return blocks.length ? blocks : null;
}

// Build fallback blocks from a full-text description source (markdown handoff if available)
function fallbackBlocks(url, profile) {
  const blocks = [];
  const topic = profile?.topic || "";
  const heading = profile?.primary_heading || topic;
  if (heading) blocks.push({ type: "heading", level: 1, text: heading });
  const parts = (profile?.description || "")
    .split(/\s{2,}|(?=I\. |II\. |III\. )/)
    .map((s) => s.trim())
    .filter(Boolean);
  let firstPara = true;
  for (const p of parts) {
    if (!p) continue;
    const isHeading = /^(I|II|III|IV|V|VI|1|2|3|4|5|6|7|8|9)\./.test(p);
    if (isHeading && p.length < 120) {
      blocks.push({ type: "heading", level: 2, text: p });
    } else {
      if (firstPara) {
        blocks.push({ type: "paragraph", text: p + "..." });
        firstPara = false;
      } else {
        blocks.push({ type: "paragraph", text: p });
      }
    }
  }
  return blocks.length ? blocks : null;
}

// Prefer existing descriptions to improve fallback for marketplace pages.
const byUrl = new Map();
for (const r of manifest.routes_and_states) {
  const u = (r.url || "").replace(/\/$/, "");
  if (!u) continue;
  const prev = byUrl.get(u) || {};
  byUrl.set(u, { ...prev, ...r });
}

const out = [];
for (const [url, r] of byUrl) {
  if (!url.includes("kiotviet.vn")) continue;
  if (!/huong-dan-su-dung-kiotviet|phi-dich-vu/.test(url)) continue;
  const profile = r.profile || {};
  let blocks = null;
  if (r.html_path && fs.existsSync(r.html_path)) {
    blocks = extractArticle(fs.readFileSync(r.html_path, "utf8"));
  }
  const source = blocks ? "html" : "fallback";
  if (!blocks) blocks = fallbackBlocks(url, profile);
  if (!blocks) blocks = [{ type: "paragraph", text: "Nội dung đang được cập nhật." }];
  out.push({
    url,
    title: profile.primary_heading || profile.topic || url.split("/").filter(Boolean).pop() || "",
    topic: profile.topic || "",
    pageType: profile.page_type || "",
    source,
    blocks,
  });
}

out.sort((a, b) => a.url.localeCompare(b.url));
fs.writeFileSync(OUT, JSON.stringify(out, null, 2), "utf8");
console.log("Wrote docs content for", out.length, "unique URLs.");
console.log("real(html):", out.filter((o) => o.source === "html").length, "| fallback:", out.filter((o) => o.source === "fallback").length);
const real = out.filter((o) => o.source === "html");
for (const o of real.slice(0, 3)) {
  console.log("---", o.title, "|", o.url.slice(0, 60), "| blocks:", o.blocks.length);
}