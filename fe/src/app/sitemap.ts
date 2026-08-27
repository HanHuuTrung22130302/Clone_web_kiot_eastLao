import { MetadataRoute } from "next";
import { docSections } from "@/lib/docs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.kiotviet.vn";
  const staticUrls = ["", "/phi-dich-vu", "/khach-hang", "/ho-tro", "/blog", "/dang-ky", "/lien-he"];
  const routes = staticUrls.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date("2026-02-01"),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const docs = docSections().flatMap((sec) =>
    sec.items.map((item) => ({
      url: `${base}${item.url.replace(/\/+$/, "")}`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  return [...routes, ...docs];
}