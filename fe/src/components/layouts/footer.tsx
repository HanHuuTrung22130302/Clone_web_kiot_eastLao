import { footerColumns } from "@/lib/site";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-[#0A2133] text-white/80">
      <div className="kv-container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Logo light />
            <p className="mt-5 text-[13px] leading-relaxed text-white/70">
              Công Ty Cổ Phần Công Nghệ KiotViet
            </p>
            <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-white/70">
              <li>
                <span className="font-medium text-white/90">Trụ sở chính:</span> Tầng
                3-6, số 1A Yết Kiêu, phường Cửa Nam, thành phố Hà Nội, Việt Nam
              </li>
              <li>
                <span className="font-medium text-white/90">Hotline:</span> 024 3929
                0088
              </li>
              <li>
                <span className="font-medium text-white/90">Email:</span>{" "}
                hotro@kiotviet.com
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[14px] font-semibold text-white">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[13px] font-semibold text-white">Tư vấn bán hàng</p>
              <a
                href="tel:18006162"
                className="mt-0.5 block text-[20px] font-bold text-white"
              >
                1800 6162
              </a>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white">
                Chăm sóc khách hàng
              </p>
              <a
                href="tel:19006522"
                className="mt-0.5 block text-[20px] font-bold text-white"
              >
                1900 6522
              </a>
            </div>
            <p className="text-[12px] text-white/50">
              © Copyright 2010-{new Date().getFullYear()} KiotViet Corporation. All
              Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}