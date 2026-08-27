import Link from "next/link";
import { Check, ArrowRight, Phone, Headset } from "lucide-react";
import {
  marketingPages,
  getMarketingPage,
  relatedLinks,
  prettifySlug,
} from "@/lib/marketing-pages";

interface PageProps {
  params: { slug: string[] };
}

const FEATURES = [
  "Quản lý bán hàng, kho hàng, công nợ",
  "Báo cáo doanh thu, lợi nhuận chi tiết",
  "Quản lý nhân viên, chấm công, lương",
  "Đồng bộ bán hàng online và offline",
];

export function generateStaticParams() {
  return marketingPages.map((p) => ({
    slug: p.slug.slice(1).split("/").filter(Boolean),
  }));
}

export function generateMetadata({ params }: PageProps) {
  const path = "/" + (params.slug || []).join("/");
  const page = getMarketingPage(path);
  const title = page
    ? `${page.title} - KiotViet`
    : `${prettifySlug(path)} - KiotViet`;
  return {
    title,
    description: page?.subtitle || `Phần mềm quản lý bán hàng KiotViet - ${title}`,
  };
}

export default function MarketingGenericPage({ params }: PageProps) {
  const path = "/" + (params.slug || []).join("/");
  const page = getMarketingPage(path) || {
    slug: path,
    title: prettifySlug(path),
    subtitle:
      "Nội dung chi tiết của trang này đang được cập nhật. Liên hệ KiotViet để được tư vấn giải pháp phù hợp với mô hình kinh doanh của bạn.",
    category: "product",
    image: "/images/v2/giai-phap/biz/home-biz-01.webp",
  };

  const related = relatedLinks(page.category).filter((r) => r.slug !== page.slug);

  return (
    <>
      <section className="bg-[#0A2133] text-white">
        <div className="kv-container grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
              {page.category === "product" ? "Sản phẩm KiotViet" : "Giải pháp KiotViet"}
            </p>
            <h1 className="mt-3 text-[30px] font-semibold leading-[1.15] sm:text-[38px]">
              {page.title}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
              {page.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dang-ky" className="kv-btn kv-btn--lg bg-[#0070F4] text-white hover:bg-[#0061d6]">
                Dùng thử miễn phí ngay
              </Link>
              <a
                href="tel:19006522"
                className="kv-btn kv-btn--lg border border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                Gọi tư vấn: 1900 6522
              </a>
            </div>
            <p className="mt-6 text-[13px] text-white/50">
              Miễn phí trải nghiệm 7 ngày · Không cần thẻ tín dụng
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={page.image || "/images/v2/giai-phap/biz/home-biz-01.webp"}
                alt={page.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="kv-section">
        <div className="kv-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="kv-section-title__h">
                Vì sao chọn KiotViet cho {page.title}?
              </h2>
              <ul className="mt-6 space-y-4">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl bg-accent/50 p-6">
                <h3 className="text-[16px] font-semibold text-foreground">
                  Bắt đầu miễn phí ngay hôm nay
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  Đăng ký tài khoản KiotViet và trải nghiệm phần mềm quản lý bán
                  hàng phổ biến nhất với hơn 300.000 nhà kinh doanh đang sử dụng.
                </p>
                <Link href="/dang-ky" className="kv-btn kv-btn--primary kv-btn--md mt-5">
                  Đăng ký dùng thử
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <aside className="space-y-4">
              {related.length > 0 && (
                <div className="rounded-xl border bg-white p-5">
                  <h3 className="text-[14px] font-semibold text-foreground">
                    Có thể bạn quan tâm
                  </h3>
                  <ul className="mt-3 space-y-1">
                    {related.slice(0, 8).map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={r.slug}
                          className="flex items-center gap-2 rounded-lg px-2 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-muted/60 hover:text-primary"
                        >
                          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="rounded-xl border bg-white p-5">
                <h3 className="text-[14px] font-semibold text-foreground">
                  Cần hỗ trợ?
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  Đội ngũ KiotViet sẵn sàng tư vấn giải pháp phù hợp với mô hình
                  kinh doanh của bạn.
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href="tel:19006522"
                    className="flex items-center gap-2 text-[14px] font-semibold text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    1900 6522
                  </a>
                  <a
                    href="/lien-he"
                    className="flex items-center gap-2 text-[14px] font-semibold text-primary"
                  >
                    <Headset className="h-4 w-4" />
                    Liên hệ tư vấn
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
