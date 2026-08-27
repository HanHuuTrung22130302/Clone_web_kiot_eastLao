import Link from "next/link";
import {
  ChevronRight,
  PhoneCall,
  BookOpen,
  MessageCircle,
  FileQuestion,
  Video,
} from "lucide-react";
import { SupportCards } from "@/components/shared/support-cards";

export const metadata = {
  title: "Hỗ trợ - Trung tâm trợ giúp KiotViet",
  description:
    "Trung tâm hỗ trợ KiotViet: hướng dẫn sử dụng, câu hỏi thường gặp, hotline 1800 6162 / 1900 6522, fanpage, kênh Youtube và chat trực tuyến 365 ngày/năm.",
};

const HELP_CATEGORIES = [
  {
    icon: BookOpen,
    title: "Hướng dẫn sử dụng",
    desc: "Tài liệu chi tiết từ A - Z cho mọi tính năng KiotViet",
    href: "/huong-dan-su-dung-kiotviet",
  },
  {
    icon: FileQuestion,
    title: "Câu hỏi thường gặp",
    desc: "Giải đáp nhanh các thắc mắc phổ biến khi sử dụng",
    href: "/ho-tro/#faqs",
  },
  {
    icon: Video,
    title: "Video hướng dẫn",
    desc: "Video trực quan giúp bạn làm quen nhanh với phần mềm",
    href: "https://www.youtube.com/c/HDSDPhanmemKiotViet",
  },
  {
    icon: MessageCircle,
    title: "Chat trực tuyến",
    desc: "Hỗ trợ qua chat trên web & mobile mọi lúc mọi nơi",
    href: "#",
  },
];

const FAQS = [
  {
    q: "Dùng thử KiotViet miễn phí trong bao lâu?",
    a: "KiotViet miễn phí trải nghiệm đầy đủ tính năng trong 7 ngày. Bạn không cần nhập thẻ tín dụng, có thể bắt đầu ngay sau khi đăng ký.",
  },
  {
    q: "Bạn có cần cài đặt phần mềm không?",
    a: "Không. KiotViet là phần mềm quản lý bán hàng trực tuyến (SaaS), bạn chỉ cần thiết bị có kết nối Internet và đăng nhập tài khoản là có thể sử dụng.",
  },
  {
    q: "Tôi có thể chuyển dữ liệu từ phần mềm khác sang KiotViet không?",
    a: "Được. KiotViet hỗ trợ nhập dữ liệu hàng hóa, khách hàng, tồn kho từ file Excel/CSV. Liên hệ tổng đài để được hướng dẫn chi tiết.",
  },
  {
    q: "Phí dịch vụ KiotViet là bao nhiêu?",
    a: "Chi phí dùng KiotViet chỉ từ 270.000đ/tháng (tương đương 8.000đ/ngày). Xem chi tiết bảng giá tại trang Phí dịch vụ.",
  },
];

export default function HoTroPage() {
  return (
    <>
      <section className="bg-[#0A2133] py-14 text-white sm:py-20">
        <div className="kv-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#6FB4FF]">
              Trung tâm hỗ trợ
            </p>
            <h1 className="mt-3 text-[28px] font-semibold sm:text-[38px]">
              KiotViet luôn đồng hành cùng bạn
            </h1>
            <p className="mt-3 text-[15px] text-white/70">
              Hotline tư vấn 1800 6162 · Chăm sóc khách hàng 1900 6522 · Hoạt
              động 365 ngày/năm từ 7:00 đến 22:00
            </p>
            <a
              href="tel:18006162"
              className="kv-btn kv-btn--lg mt-8 bg-[#0070F4] text-white hover:bg-[#0061d6]"
            >
              <PhoneCall className="h-5 w-5" />
              Gọi hotline 1800 6162
            </a>
          </div>
        </div>
      </section>

      <section className="kv-section">
        <div className="kv-container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HELP_CATEGORIES.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="kv-card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-[16px] font-semibold text-foreground">
                  {c.title}
                </h2>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-primary">
                  Tìm hiểu thêm
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="kv-section bg-muted/40">
        <div className="kv-container max-w-4xl">
          <div className="text-center">
            <h2 className="kv-section-title__h">Câu hỏi thường gặp</h2>
            <p className="kv-section-title__sub">
              Những thắc mắc phổ biến nhất về KiotViet
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-xl border bg-white p-5 open:ring-1 open:ring-primary/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-foreground">
                  <span>
                    <span className="mr-2 text-primary">0{i + 1}.</span>
                    {f.q}
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SupportCards />
    </>
  );
}