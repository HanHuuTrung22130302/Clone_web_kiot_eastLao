import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_ARTICLES } from "@/data/blog-articles";

const TAGS = [
  { slug: "tin-tuc-ve-ki-ot-viet", title: "Tin tức về KiotViet" },
  { slug: "khuyen-mai", title: "Khuyến mãi" },
  { slug: "kinh-nghiem-kinh-doanh", title: "Kinh nghiệm kinh doanh" },
  { slug: "tai-chinh", title: "Tài chính" },
];

interface PageProps {
  params: { tag: string };
}

export function generateStaticParams() {
  return TAGS.map((t) => ({ tag: t.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const tag = TAGS.find((t) => t.slug === params.tag);
  return {
    title: tag
      ? `${tag.title} - Blog KiotViet`
      : "Chuyên mục - Blog KiotViet",
    description: `Những bài viết trong chuyên mục ${tag?.title || "blog"} của KiotViet.`,
  };
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function TagPage({ params }: PageProps) {
  const tag = TAGS.find((t) => t.slug === params.tag);
  if (!tag) return notFound();
  const items = BLOG_ARTICLES.filter((a) => slugify(a.tag) === tag.slug);

  return (
    <>
      <section className="bg-[#0A2133] py-14 text-white sm:py-20">
        <div className="kv-container">
          <p className="text-[13px] uppercase tracking-wide text-white/60">
            Chuyên mục
          </p>
          <h1 className="mt-2 text-[28px] font-semibold sm:text-[36px]">
            {tag.title}
          </h1>
          <Link
            href="/blog"
            className="mt-4 inline-block text-[14px] font-medium text-white/70 hover:text-white"
          >
            ← Về trang Blog
          </Link>
        </div>
      </section>
      <section className="kv-section">
        <div className="kv-container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((post) => (
              <a
                key={post.slug}
                href={`/${post.slug}`}
                className="kv-card group overflow-hidden transition-transform hover:-translate-y-1"
              >
                <div
                  className="h-52 bg-cover bg-center transition-transform group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.img})` }}
                />
                <div className="p-6">
                  <h2 className="text-[16px] font-semibold leading-snug text-foreground">
                    {post.title}
                  </h2>
                  <span className="mt-4 inline-block text-[13px] font-medium text-primary">
                    Đọc tiếp →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}