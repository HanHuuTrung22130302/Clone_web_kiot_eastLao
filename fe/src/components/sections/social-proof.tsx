import { SectionTitle } from "@/components/sections/solutions";

const REVIEWS = [
  {
    name: "Phương Nguyễn",
    role: "Chủ cửa hàng",
    body: "KiotViet ra tính năng rất đúng thời điểm kê khai, rất tuyệt",
  },
  {
    name: "Linh Phạm",
    role: "Chủ cửa hàng",
    body: "Người bán hàng đánh giá cao các tính năng của nó. Phần mềm thân thiện với người dùng và tự động hóa mọi thứ.",
  },
  {
    name: "Chị Hoa",
    role: "Chủ shop thời trang công sở",
    body: "Phần mềm dễ dùng, mọi quy trình đều được tự động hoá. Quản lý cửa hàng nhàn hơn hẳn trước đây.",
  },
  {
    name: "Anh Tuấn",
    role: "Chủ chuỗi 5 cửa hàng F&B",
    body: "Báo cáo doanh thu nhanh, theo dõi nguyên liệu và ca kíp rất tiện. Tiết kiệm được cả tiếng đồng hồ mỗi tối chốt sổ.",
  },
  {
    name: "Chị Mai",
    role: "Spa, làm đẹp",
    body: "Lịch hẹn, hồ sơ khách và tính lương nhân viên đều trong một app. Rất đáng đồng tiền bát gạo.",
  },
];

export function BusinessSection() {
  return (
    <section className="bg-[#0A2133] py-16 text-white sm:py-24" id="section-nha-kinh-doanh">
      <div className="kv-container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-[28px] font-semibold leading-tight sm:text-[36px]">
            300.000+ <span className="text-white/80">nhà kinh doanh tin dùng</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70">
            KiotViet POS giúp giảm thiểu 30 - 50% chi phí nhân viên, tiết kiệm tối đa
            thời gian, gia tăng doanh thu vượt trội mỗi ngày.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/40 text-[14px] font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold">{r.name}</h3>
                  <p className="text-[12px] text-white/60">{r.role}</p>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-white/80">
                {r.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const APPS = [
  { name: "KiotViet", hint: "10.000+ lượt tải" },
  { name: "KiotViet Hotel", hint: "10.000+ lượt tải" },
  { name: "KiotViet Salon, Spa", hint: "10.000+ lượt tải" },
  { name: "Quản lý nhà hàng", hint: "10.000+ lượt tải" },
  { name: "Nhân viên nhà hàng", hint: "10.000+ lượt tải" },
  { name: "K-note", hint: "10.000+ lượt tải" },
];

export function AppsSection() {
  return (
    <section className="py-16 sm:py-24" id="app">
      <div className="kv-container">
        <div className="mb-12 max-w-2xl">
          <SectionTitle title="Ứng dụng" />
          <p className="kv-section-title__sub">
            Trải nghiệm ứng dụng KiotViet trên Google Play &amp; App Store
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {APPS.map((app) => (
            <button
              key={app.name}
              type="button"
              className="kv-card flex flex-col items-center gap-3 p-6 text-center transition-transform hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7.2L4.2 5.6 12 2.4l7.8 3.2L12 9.2Zm-9 6.2 2-1v5.8l7 3.5 7-3.5v-5.8l2 1v7.8L12 24l-9-4.5v-6.1Z" />
                </svg>
              </span>
              <span className="text-[14px] font-semibold">{app.name}</span>
              <span className="text-[12px] text-muted-foreground">{app.hint}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}