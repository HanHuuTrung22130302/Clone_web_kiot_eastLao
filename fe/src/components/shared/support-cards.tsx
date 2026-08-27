import { PhoneCall, Facebook, Youtube, MessageCircle } from "lucide-react";

const supportChannels = [
  {
    icon: PhoneCall,
    title: "Hotline",
    lines: [
      "Tư vấn bán hàng: 1800 6162",
      "Chăm sóc khách hàng: 1900 6522",
      "Hoạt động 365 ngày/năm từ 7:00 đến 22:00 kể cả ngày nghỉ lễ, tết.",
    ],
    href: "tel:18006162",
    cta: "Gọi ngay",
  },
  {
    icon: Facebook,
    title: "KiotViet Fanpage",
    lines: [
      "Luôn trả lời các thông tin nhanh nhất thông qua các phản hồi trên Facebook.",
    ],
    href: "https://www.facebook.com/PhanmembanhangKiotViet/",
    cta: "Truy cập Fanpage",
  },
  {
    icon: Youtube,
    title: "Kênh hỗ trợ Youtube",
    lines: [
      "Luôn cập nhật các kiến thức sử dụng phần mềm tức thời, trực quan giúp người dùng sử dụng được KiotViet dễ dàng và hiệu quả nhất.",
    ],
    href: "https://www.youtube.com/channel/UC7rnmP-i3aWPSLEgcT338vA",
    cta: "Xem video hướng dẫn",
  },
  {
    icon: MessageCircle,
    title: "Chat trên web & mobile",
    lines: [
      "Luôn có người trực chat để trả lời câu hỏi của các bạn nhanh và hiệu quả nhất suốt 365 ngày/năm.",
    ],
    href: "#",
    cta: "Chat với KiotViet",
  },
];

export function SupportCards() {
  return (
    <section className="kv-section">
      <div className="kv-container">
        <div className="text-center">
          <h2 className="kv-section-title__h">Bạn cần hỗ trợ?</h2>
          <p className="kv-section-title__sub">
            Đội ngũ KiotViet luôn sẵn sàng đồng hành cùng bạn
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supportChannels.map((ch) => (
            <div
              key={ch.title}
              className="kv-card flex flex-col p-6 transition-shadow hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <ch.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold text-foreground">
                {ch.title}
              </h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                {ch.lines.join(" ")}
              </p>
              <a
                href={ch.href}
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-primary hover:underline"
              >
                {ch.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}