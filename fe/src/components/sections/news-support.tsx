import { BLOG_ARTICLES } from "@/data/blog-articles";

const NEWS = BLOG_ARTICLES.slice(0, 3);

const PRESS = ["VnExpress", "Dân trí", "Báo Đầu tư", "Tuổi Trẻ", "VnEconomy", "CafeF"];

export function NewsSection() {
  return (
    <section className="bg-[#F7FAFA] py-16 sm:py-24">
      <div className="kv-container">
        <h2 className="kv-section-title__h">Tin tức nổi bật</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n) => (
            <a
              key={n.title}
              href={`/${n.slug}`}
              className="kv-card group overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div
                className="h-56 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{ backgroundImage: `url(${n.img})` }}
              />
              <div className="p-6">
                <span className="text-[12px] font-medium uppercase tracking-wide text-primary">
                  {n.tag}
                </span>
                <h3 className="mt-2 text-[16px] font-semibold leading-snug">{n.title}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-[13px] uppercase tracking-wide text-muted-foreground">
            Báo chí viết về KiotViet
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
            {PRESS.map((p) => (
              <span
                key={p}
                className="text-[15px] font-semibold text-muted-foreground/70"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SUPPORTS = [
  {
    title: "Hotline",
    body: (
      <p className="text-[14px] leading-relaxed text-muted-foreground">
        Tư vấn bán hàng:{" "}
        <a href="tel:18006162" className="font-semibold text-primary">
          1800 6162
        </a>
        <br />
        Chăm sóc khách hàng:{" "}
        <a href="tel:19006522" className="font-semibold text-primary">
          1900 6522
        </a>
        <br />
        Hoạt động 365 ngày/năm từ 7:00 đến 22:00 kể cả ngày nghỉ lễ, tết.
      </p>
    ),
  },
  {
    title: "KiotViet Fanpage",
    body: "Luôn trả lời các thông tin nhanh nhất thông qua các phản hồi trên Facebook.",
    href: "https://www.facebook.com/PhanmembanhangKiotViet/",
  },
  {
    title: "Kênh hỗ trợ Youtube",
    body: "Luôn cập nhật các kiến thức sử dụng phần mềm tức thời, trực quan giúp người dùng sử dụng được KiotViet dễ dàng và hiệu quả nhất.",
    href: "https://www.youtube.com/channel/UC7rnmP-i3aWPSLEgcT338vA",
  },
  {
    title: "Chat trên web & mobile",
    body: "Luôn có người trực chat để trả lời câu hỏi của các bạn nhanh và hiệu quả nhất suốt 365 ngày/năm.",
  },
];

export function SupportSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="kv-container">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="max-w-lg text-[24px] font-semibold leading-snug sm:text-[30px]">
            Hãy để KiotViet đồng hành kinh doanh cùng bạn
          </h2>
          <a href="/dang-ky" className="kv-btn kv-btn--primary kv-btn--md">
            Dùng thử miễn phí
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORTS.map((s) => (
            <div key={s.title} className="kv-card flex flex-col p-6">
              <h3 className="text-[16px] font-semibold">{s.title}</h3>
              <div className="mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}