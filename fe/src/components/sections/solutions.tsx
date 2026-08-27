import Link from "next/link";

export interface SolutionCardItem {
  title: string;
  desc: string;
  href: string;
  img: string;
}

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="flex flex-col gap-3" data-reveal="">
      <h2 className="kv-section-title__h">{title}</h2>
      {subtitle && <p className="kv-section-title__sub">{subtitle}</p>}
    </header>
  );
}

const SOLUTIONS: SolutionCardItem[] = [
  {
    title: "Bán buôn, bán lẻ",
    desc: "Tối ưu quy trình bán hàng cả online và offline, tiết kiệm chi phí và thời gian quản lý vận hành",
    href: "/cua-hang-ban-buon-ban-le",
    img: "/images/v2/home/giai-phap-ban-buon-ban-le.webp",
  },
  {
    title: "Ăn uống, giải trí",
    desc: "Order chính xác, vận hành tối ưu. Phần mềm duy nhất tích hợp tất cả Foodapp liền mạch",
    href: "/bar-cafe-nha-hang",
    img: "/images/v2/home/giai-phap-an-uong-giai-tri.webp",
  },
  {
    title: "Sức khỏe, làm đẹp",
    desc: "Quản lý lịch hẹn, hồ sơ khách hàng và liệu trình một cách chuyên nghiệp và hiệu quả",
    href: "/spa-salon-massage-nails",
    img: "/images/v2/home/giai-phap-suc-khoe-lam-dep.webp",
  },
  {
    title: "Khách sạn, nhà nghỉ",
    desc: "Đặt lịch dễ dàng, tiết kiệm 200% thời gian lễ tân, tích hợp Agoda, Booking,..",
    href: "/quan-ly-khach-san-nha-nghi",
    img: "/images/v2/home/giai-phap-khach-san-nha-nghi.webp",
  },
];

const SOLUTIONS_BG = [
  "linear-gradient(135deg, #66A9F8 0%, #0070F4 100%)",
  "linear-gradient(135deg, #48C6A4 0%, #0099B9 100%)",
  "linear-gradient(135deg, #F4A7B9 0%, #E36A85 100%)",
  "linear-gradient(135deg, #8E9BFF 0%, #5B6BD8 100%)",
];

const FINANCE_SOLUTIONS: SolutionCardItem[] = [
  {
    title: "Giải pháp thanh toán QR",
    desc: "Tích hợp QR thanh toán, tiền về tức thì, theo dõi giao dịch ngay trên phần mềm, hỗ trợ thiết bị QR loa",
    href: "/giai-phap-thanh-toan-qr",
    img: "/images/v2/home/taichinh-qr-pos-v2.webp",
  },
  {
    title: "Giải pháp vay vốn kinh doanh",
    desc: "Vay tín chấp nhanh chóng với đa dạng gói phù hợp, kết nối trực tiếp các đối tác uy tín như MB, VPBank",
    href: "/giai-phap-vay-von",
    img: "/images/v2/home/taichinh-vay-von-v2.webp",
  },
];

export function SolutionsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="kv-container">
        <div className="mb-12 max-w-2xl">
          <SectionTitle
            title="Giải pháp bán hàng"
            subtitle="Giải pháp giúp vận hành các mô hình kinh doanh một cách dễ dàng và hiệu quả"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              className="kv-card group flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div
                className="h-44 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{
                  backgroundImage: `url(${s.img}), ${SOLUTIONS_BG[i % SOLUTIONS_BG.length]}`,
                }}
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[18px] font-semibold">{s.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <span className="mt-5 text-[14px] font-medium text-primary">
                  Tìm hiểu thêm &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinanceSection() {
  return (
    <section className="bg-[#E5F0FF]/60 py-16 sm:py-24">
      <div className="kv-container">
        <div className="mb-12 max-w-2xl">
          <SectionTitle
            title="Giải pháp tài chính"
            subtitle="Giải pháp thanh toán - vay vốn uy tín dành cho chủ hộ kinh doanh"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {FINANCE_SOLUTIONS.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="kv-card group flex items-center gap-6 overflow-hidden p-6 transition-transform hover:-translate-y-1"
            >
              <div
                className="h-28 w-28 shrink-0 rounded-xl bg-cover bg-center"
                style={{
                  backgroundImage: `url(${s.img})`,
                }}
              />
              <div>
                <h3 className="text-[18px] font-semibold">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <span className="mt-3 inline-block text-[14px] font-medium text-primary">
                  Tìm hiểu thêm &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}