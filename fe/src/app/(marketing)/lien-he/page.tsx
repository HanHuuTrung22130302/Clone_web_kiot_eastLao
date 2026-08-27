import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Liên hệ - KiotViet",
  description:
    "Liên hệ với KiotViet: Hotline 024 3929 0088, email contact@kiotviet.vn, trụ sở chính tại 1A Yết Kiêu, Hoàn Kiếm, Hà Nội.",
};

export default function LienHePage() {
  return (
    <>
      <section className="bg-[#0A2133] py-14 text-white sm:py-20">
        <div className="kv-container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-[28px] font-semibold sm:text-[38px]">
              Liên hệ với KiotViet
            </h1>
            <p className="mt-3 text-[15px] text-white/70">
              Đội ngũ tư vấn luôn sẵn sàng hỗ trợ bạn 365 ngày/năm
            </p>
          </div>
        </div>
      </section>

      <section className="kv-section">
        <div className="kv-container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              {[
                {
                  icon: PhoneCall,
                  title: "Điện thoại",
                  lines: [
                    "Tổng đài: 024 3929 0088",
                    "Tư vấn bán hàng: 1800 6162",
                    "Chăm sóc khách hàng: 1900 6522",
                  ],
                },
                {
                  icon: Mail,
                  title: "Email",
                  lines: ["Hỗ trợ khách hàng: contact@kiotviet.vn"],
                },
                {
                  icon: MapPin,
                  title: "Trụ sở chính",
                  lines: [
                    "Công ty Cổ Phần Công Nghệ KiotViet",
                    "Tầng 3-6, số 1A Yết Kiêu, phường Cửa Nam, TP. Hà Nội, Việt Nam",
                  ],
                },
                {
                  icon: Clock,
                  title: "Giờ làm việc",
                  lines: [
                    "Hoạt động 365 ngày/năm từ 7:00 đến 22:00 kể cả ngày nghỉ lễ, tết.",
                  ],
                },
              ].map((item) => (
                <div key={item.title} className="kv-card flex gap-4 p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-[16px] font-semibold text-foreground">
                      {item.title}
                    </h2>
                    {item.lines.map((l) => (
                      <p
                        key={l}
                        className="mt-1 text-[14px] leading-relaxed text-muted-foreground"
                      >
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-2xl border bg-white p-2">
              <iframe
                title="Bản đồ trụ sở KiotViet"
                src="https://maps.google.com/maps?q=1A%20Y%E1%BA%BFt%20Ki%C3%AAu%2C%20H%C3%A0%20N%E1%BB%99i&z=15&output=embed"
                className="h-full min-h-[420px] w-full rounded-xl border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}