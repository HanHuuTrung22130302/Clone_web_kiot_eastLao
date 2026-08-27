import docsTree from "@/data/docs-tree.json";
import docsContent from "@/data/docs-content.json";

export interface DocsItem {
  slug: string;
  title: string;
  url: string;
  topic?: string;
  description?: string;
}

export interface DocsSection {
  section: string;
  items: DocsItem[];
}

export const docsTreeData = docsTree as unknown as DocsSection[];

export function normalizeUrl(url: string): string {
  let u = url.replace(/^https?:\/\/www\.kiotviet\.vn/, "");
  const q = u.indexOf("?");
  if (q > 0) u = u.slice(0, q);
  return u.replace(/\/+$/, "") || "/";
}

export function slugToPath(section: string, slug: string): string {
  return `/huong-dan-su-dung-kiotviet/${section}/${slug}`;
}

const contentByUrl = new Map(
  docsContent.map((c) => [normalizeUrl(c.url), c])
);

export interface DocContent {
  title: string;
  topic: string;
  pageType: string;
  source: "html" | "fallback";
  blocks: LooseBlock[];
}

type LooseBlock = {
  type: string;
  text?: string;
  level?: number;
  src?: string;
  alt?: string;
  ordered?: boolean;
};

export function getDocContent(path: string): DocContent | null {
  const u = normalizeUrl(path);
  const hit =
    contentByUrl.get(u) ||
    contentByUrl.get(`/huong-dan-su-dung-kiotviet`) &&
      contentByUrl.get(`/huong-dan-su-dung-kiotviet/`);
  return (hit as DocContent) || null;
}

export function findSectionAndSlug(path: string): {
  section: string;
  slug: string;
  item?: DocsItem;
} | null {
  const u = normalizeUrl(path);
  const prefix = "/huong-dan-su-dung-kiotviet/";
  if (!u.startsWith(prefix)) return null;
  const rest = u.slice(prefix.length).replace(/\/+$/, "");
  if (!rest) return { section: "", slug: "" };
  const parts = rest.split("/");
  if (parts.length < 2) return { section: parts[0] ?? "", slug: "" };
  const section = parts[0];
  const slug = parts[1];
  const sec = docsTreeData.find((s) => s.section === section);
  const item =
    sec?.items.find((i) => i.slug === slug) ||
    sec?.items.find((i) => normalizeUrl(i.url) === u);
  return { section, slug, item };
}

export function docCrumb(path: string): { label: string; href?: string }[] {
  const found = findSectionAndSlug(path);
  if (!found) return [];
  const crumbs: { label: string; href?: string }[] = [
    { label: "Trang chủ", href: "/" },
  ];
  if (found.section) {
    const sec = docsTreeData.find((s) => s.section === found.section);
    const title = sec
      ? prettifySection(found.section)
      : prettifySection(found.section);
    crumbs.push({
      label: title,
      href: `/huong-dan-su-dung-kiotviet/${found.section}`,
    });
  }
  if (found.item) crumbs.push({ label: found.item.title });
  return crumbs;
}

export function prettifySection(section: string): string {
  const map: Record<string, string> = {
    "hotel-lam-quen-voi-kiotviet": "Làm quen với KiotViet (Khách sạn)",
    "retail-lam-quen-voi-kiotviet": "Làm quen với KiotViet (Bán lẻ)",
    "hotel-khoi-tao-gian-hang": "Khởi tạo gian hàng",
    "retail-khoi-tao-gian-hang": "Khởi tạo gian hàng",
  };
  if (map[section]) return map[section];
  const clean = section
    .replace(/^(hotel|retail|retail-|rm-)/, "")
    .replace(/-/g, " ");
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

export function docSections(): DocsSection[] {
  return docsTreeData;
}

export function docsIndexUrl(section: string): string {
  const sec = docsTreeData.find((s) => s.section === section);
  if (sec && sec.items.length) return normalizeUrl(sec.items[0].url);
  return `/huong-dan-su-dung-kiotviet/${section}`;
}

export function getStandaloneSections(): string[] {
  const prefix = "/huong-dan-su-dung-kiotviet/";
  const out: string[] = [];
  for (const c of docsContent as unknown as { url: string }[]) {
    const u = normalizeUrl(c.url);
    if (!u.startsWith(prefix)) continue;
    const rest = u.slice(prefix.length).replace(/\/+$/, "");
    if (rest && !rest.includes("/")) out.push(rest);
  }
  return [...new Set(out)];
}