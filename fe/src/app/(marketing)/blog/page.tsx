import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { BLOG_ARTICLES, BLOG_TOTAL_PAGES, getBlogPage } from "@/data/blog-articles";

export const metadata = {
  title: "Blog - Tin tức & Kinh nghiệm quản lý cửa hàng | KiotViet",
  description:
    "Blog chia sẻ kinh nghiệm quản lý cửa hàng, kiến thức bán lẻ và cập nhật tin tức về phần mềm KiotViet.",
};

const CATEGORIES = [
  { label: "Tin tức về KiotViet", href: "/t/tin-tuc-ve-ki-ot-viet/" },
  { label: "Khuyến mãi", href: "/t/khuyen-mai/" },
  { label: "Kinh nghiệm kinh doanh", href: "/t/kinh-nghiem-kinh-doanh/" },
  { label: "Tài chính", href: "/t/tai-chinh/" },
];

interface PageProps {
  searchParams: { page?: string };
}

const TOTAL_PAGES = BLOG_TOTAL_PAGES;

export default function BlogPage({ searchParams }: PageProps) {
  const raw = Number(searchParams?.page);
  const page = Number.isFinite(raw) && raw > 0 ? Math.min(raw, TOTAL_PAGES) : 1;
  const posts = getBlogPage(page).map((p, i) => ({
    ...p,
    id: (page - 1) * 12 + i + 1,
  }));

  function pageLink(p: number) {
    return p === 1 ? "/blog" : `/blog?page=${p}`;
  }

  return (
    <>
      <section className="bg-[#0A2133] py-14 text-white sm:py-20">
        <div className="kv-container">
          <h1 className="text-[28px] font-semibold sm:text-[36px]">
            Tin tức KiotViet
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70">
            {metadata.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[13px] font-medium text-white/85 transition-colors hover:bg-white/15"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="kv-section">
        <div className="kv-container">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-semibold text-foreground">
              Bài viết mới nhất
            </h2>
            <span className="text-[13px] text-muted-foreground">
              Trang {page}/{TOTAL_PAGES}
            </span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <a
                key={post.id}
                href={`/${post.slug}`}
                className="kv-card group overflow-hidden transition-transform hover:-translate-y-1"
              >
                <div
                  className="h-52 bg-cover bg-center transition-transform group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.img})` }}
                />
                <div className="p-6">
                  <span className="text-[12px] font-medium uppercase tracking-wide text-primary">
                    {post.tag}
                  </span>
                  <h3 className="mt-2 text-[16px] font-semibold leading-snug text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex items-center gap-1.5 text-[12px] text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {post.date}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination 1..168 */}
          <nav className="mt-12 flex items-center justify-center gap-1">
            <Link
              href={pageLink(Math.max(1, page - 1))}
              className={cn(
                "kv-btn border px-4 py-2 text-[13px]",
                page === 1 && "pointer-events-none opacity-40"
              )}
            >
              ← Trang trước
            </Link>
            {(() => {
              const pages = new Set<number>();
              for (let i = 1; i <= Math.min(4, TOTAL_PAGES); i++) pages.add(i);
              for (let i = Math.max(1, page - 2); i <= Math.min(TOTAL_PAGES, page + 2); i++)
                pages.add(i);
              pages.add(TOTAL_PAGES);
              const sorted = Array.from(pages).sort((a, b) => a - b);
              const nodes: React.ReactNode[] = [];
              let prev = 0;
              for (const p of sorted) {
                if (p - prev > 1) {
                  nodes.push(
                    <span key={`gap-${p}`} className="px-1 text-[13px] text-muted-foreground">
                      …
                    </span>
                  );
                }
                nodes.push(
                  <Link
                    key={p}
                    href={pageLink(p)}
                    className={cn(
                      "grid h-9 w-9 place-items-center rounded-lg border text-[13px] transition-colors",
                      p === page
                        ? "border-primary bg-primary font-semibold text-primary-foreground"
                        : "text-foreground/75 hover:border-primary hover:text-primary"
                    )}
                  >
                    {p}
                  </Link>
                );
                prev = p;
              }
              return nodes;
            })()}
            <Link
              href={pageLink(Math.min(TOTAL_PAGES, page + 1))}
              className={cn(
                "kv-btn border px-4 py-2 text-[13px]",
                page === TOTAL_PAGES && "pointer-events-none opacity-40"
              )}
            >
              Trang sau →
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}