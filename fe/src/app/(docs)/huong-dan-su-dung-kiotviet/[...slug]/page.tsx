import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Clock3, CalendarDays, ThumbsUp } from "lucide-react";
import {
  docSections,
  prettifySection,
  slugToPath,
  docCrumb,
  getDocContent,
  normalizeUrl,
  getStandaloneSections,
} from "@/lib/docs";
import { ContentBlocks } from "@/components/docs/content-blocks";
import { Breadcrumb } from "@/components/docs/breadcrumb";
import { DocsSidebarMobile } from "@/components/docs/sidebar-mobile";

interface PageProps {
  params: { slug: string[] };
}

export function generateStaticParams() {
  const params: { slug: string[] }[] = [];
  for (const sec of docSections()) {
    for (const item of sec.items) {
      params.push({ slug: [sec.section, item.slug] });
    }
  }
  // index pages per section
  for (const sec of docSections()) {
    params.push({ slug: [sec.section] });
  }
  // standalone single-segment articles not in the tree (e.g. retail-ket-ca)
  const seen = new Set<string>();
  for (const sec of docSections()) seen.add(sec.section);
  for (const sec of docSections()) {
    for (const item of sec.items) seen.add(item.slug);
  }
  const standalone = new Set<string>();
  for (const item of getStandaloneSections()) {
    if (!seen.has(item) && !standalone.has(item)) {
      standalone.add(item);
      params.push({ slug: [item] });
    }
  }
  return params;
}

function findSummary(path: string): {
  title: string;
  description?: string;
} | null {
  const u = normalizeUrl(path);
  const prefix = "/huong-dan-su-dung-kiotviet/";
  if (!u.startsWith(prefix)) return null;
  const rest = u.slice(prefix.length).replace(/\/+$/, "");
  if (!rest) return null;
  const parts = rest.split("/");
  const section = parts[0];
  const slug = parts[1];
  const sec = docSections().find((s) => s.section === section);
  const item = sec?.items.find((i) => i.slug === slug);
  if (item)
    return {
      title: item.title,
      description:
        (item.description || "").slice(0, 180) || `${item.title} - KiotViet`,
    };
  if (sec)
    return {
      title: prettifySection(section),
      description: `Hướng dẫn sử dụng KiotViet: ${prettifySection(section)}`,
    };
  return null;
}

export function generateMetadata({ params }: PageProps) {
  const path = `/huong-dan-su-dung-kiotviet/${(params.slug || []).join("/")}`;
  const sum = findSummary(path);
  return {
    title: sum ? `${sum.title} - Hướng dẫn sử dụng KiotViet` : "Hướng dẫn sử dụng KiotViet",
    description: sum?.description || "",
  };
}

export default function DocsDetailPage({ params }: PageProps) {
  const parts = params.slug || [];
  const path = `/huong-dan-su-dung-kiotviet/${parts.join("/")}`;
  const crumb = docCrumb(path);
  const section = parts[0] || "";
  const slug = parts[1] || "";
  const content = getDocContent(path);

  if (parts.length === 1) {
    // section index, or standalone article under a single segment
    const sec = docSections().find((s) => s.section === parts[0]);
    if (!sec) {
      const standalone = getDocContent(path);
      if (!standalone) return notFound();
      return (
        <div className="min-w-0">
          <article className="rounded-xl border bg-white p-6 sm:p-10">
            <Breadcrumb
              items={[
                { label: "Trang chủ", href: "/" },
                { label: "Hướng dẫn sử dụng KiotViet", href: "/huong-dan-su-dung-kiotviet" },
                { label: standalone.title },
              ]}
            />
            <h1 className="text-[28px] font-bold leading-tight text-foreground">
              {standalone.title}
            </h1>
            <div className="mt-8 border-t pt-2">
              <ContentBlocks blocks={standalone.blocks} />
            </div>
          </article>
        </div>
      );
    }
    const firstItem = slugToPath(sec.section, sec.items[0]?.slug || "");
    return (
      <div className="min-w-0">
        <DocsSidebarMobile currentSection={parts[0]} />
        <div className="rounded-xl border bg-white p-6 sm:p-8">
          <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: prettifySection(parts[0]) }]} />
          <h1 className="text-[26px] font-bold text-foreground">
            {prettifySection(parts[0])}
          </h1>
          <p className="mt-2 text-[15px] text-muted-foreground">
            {sec.items.length} bài viết hướng dẫn trong chuyên mục này.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {sec.items.map((item) => (
              <li key={item.slug + item.title}>
                <Link
                  href={slugToPath(sec.section, item.slug)}
                  className="flex items-center gap-2 rounded-lg border p-3 text-[14px] font-medium text-foreground/85 transition-colors hover:border-primary hover:text-primary"
                >
                  <ChevronLeft className="hidden" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          {firstItem && (
            <Link
              href={firstItem}
              className="kv-btn kv-btn--primary kv-btn--md mt-8"
            >
              Xem bài viết đầu tiên
            </Link>
          )}
        </div>
      </div>
    );
  }

  const contentBody = content?.blocks || [];
  const title =
    content?.title ||
    findSummary(path)?.title ||
    prettifySection(slug) ||
    "Hướng dẫn sử dụng";

  const prevNext =
    (() => {
      const sec = docSections().find((s) => s.section === section);
      if (!sec) return null;
      const idx = sec.items.findIndex((i) => i.slug === slug);
      if (idx < 0) return null;
      return {
        prev: idx > 0 ? sec.items[idx - 1] : null,
        next: idx < sec.items.length - 1 ? sec.items[idx + 1] : null,
      };
    })() || null;

  return (
    <div className="min-w-0">
      <DocsSidebarMobile currentSection={section} currentSlug={slug} />
      <article className="rounded-xl border bg-white p-6 sm:p-10">
        <Breadcrumb items={crumb} />
        <h1 className="text-[28px] font-bold leading-tight text-foreground">
          {title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-[13px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            <span>3 phút đọc</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>Cập nhật gần nhất: 02/2026</span>
          </span>
        </div>

        <div className="mt-8 border-t pt-2">
          <ContentBlocks blocks={contentBody} />
        </div>

        {content?.pageType === "product-detail" && (
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-accent/40 p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                <ThumbsUp className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[14px] font-semibold text-foreground">
                  Bài viết hữu ích?
                </p>
                <p className="text-[13px] text-muted-foreground">
                  Cảm ơn bạn đã góp ý để chúng tôi cải thiện tài liệu.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="kv-btn border bg-white px-4 py-2 text-[13px]">
                Có
              </button>
              <button className="kv-btn border bg-white px-4 py-2 text-[13px]">
                Không
              </button>
            </div>
          </div>
        )}

        {prevNext && (
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {prevNext.prev ? (
              <Link
                href={slugToPath(section, prevNext.prev.slug)}
                className="group flex flex-col rounded-xl border p-4 transition-colors hover:border-primary"
              >
                <span className="text-[12px] uppercase tracking-wide text-muted-foreground">
                  ← Bài trước
                </span>
                <span className="mt-1 text-[14px] font-semibold text-foreground group-hover:text-primary">
                  {prevNext.prev.title}
                </span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {prevNext.next && (
              <Link
                href={slugToPath(section, prevNext.next.slug)}
                className="group flex flex-col rounded-xl border p-4 text-right transition-colors hover:border-primary"
              >
                <span className="text-[12px] uppercase tracking-wide text-muted-foreground">
                  Bài sau →
                </span>
                <span className="mt-1 text-[14px] font-semibold text-foreground group-hover:text-primary">
                  {prevNext.next.title}
                </span>
              </Link>
            )}
          </div>
        )}
      </article>
    </div>
  );
}