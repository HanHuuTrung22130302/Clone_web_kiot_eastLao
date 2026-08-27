import { Check, Minus, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  pricingPlans,
  packageComparison,
  deviceGroups,
} from "@/lib/pricing";
import { SupportCards } from "@/components/shared/support-cards";

export const metadata = {
  title: "Phí dịch vụ - Bảng giá phần mềm quản lý bán hàng KiotViet",
  description:
    "Phần mềm quản lý bán hàng KiotViet với chi phí chỉ từ 8.000đ/ngày. Hơn 300.000 cửa hàng đang sử dụng để quản lý hàng ngày. Giao diện đơn giản, dễ dùng, tiết kiệm chi phí. Dùng thử miễn phí ngay.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A2133] text-white">
        <div className="kv-container grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
              Thành thật bán hàng
            </p>
            <h1 className="mt-3 text-[32px] font-semibold leading-[1.15] sm:text-[42px]">
              Chi phí từ <span className="text-[#6FB4FF]">8.000đ/ngày</span>
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
              Phần mềm quản lý bán hàng KiotViet - Hơn 300.000 cửa hàng đang sử
              dụng để quản lý hàng ngày. Giao diện đơn giản, dễ dàng, tiết kiệm
              chi phí.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/dang-ky" className="kv-btn kv-btn--lg bg-[#0070F4] text-white hover:bg-[#0061d6]">
                Dùng thử miễn phí ngay
              </a>
              <a
                href="#bang-gia"
                className="kv-btn kv-btn--lg border border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                Xem bảng giá
              </a>
            </div>
            <p className="mt-6 text-[13px] text-white/50">
              Miễn phí trải nghiệm 7 ngày · Không cần thẻ tín dụng
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/v2/phi-dich-vu/collage/01-hansmedia.webp" alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/v2/phi-dich-vu/collage/04-cafe.webp" alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="mt-10 space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/v2/phi-dich-vu/collage/03-gemini.webp" alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/v2/phi-dich-vu/collage/05-image1.webp" alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/v2/phi-dich-vu/collage/02-dsc08753.webp" alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/v2/phi-dich-vu/collage/06-chatgpt.webp" alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section id="bang-gia" className="kv-section">
        <div className="kv-container">
          <div className="text-center">
            <h2 className="kv-section-title__h">Bảng giá phí dịch vụ</h2>
            <p className="kv-section-title__sub">
              Thanh toán linh hoạt · Chi phí thấp chỉ từ 8.000đ/ngày
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-white p-7 transition-shadow",
                  plan.featured
                    ? "border-primary shadow-kv ring-1 ring-primary/40"
                    : "border-border hover:shadow-kv"
                )}
              >
                {plan.tag && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-primary-foreground">
                    {plan.tag}
                  </span>
                )}
                <h3 className="text-[18px] font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-[34px] font-bold leading-none text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-[14px] text-muted-foreground">
                    /{plan.unit}
                  </span>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                  {plan.featured && (
                    <span className="mb-1.5 block rounded-md bg-primary/5 px-3 py-2 text-[12px] font-medium text-primary">
                      Quản lý nhiều chi nhánh: 270k/ +1 chi nhánh · nhiều kho:
                      150k/ +1 kho
                    </span>
                  )}
                  {plan.desc}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5 border-t pt-5">
                  {plan.rows.map((row) => (
                    <li
                      key={row}
                      className="flex gap-2 text-[13px] leading-snug text-foreground/80"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{row}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/dang-ky"
                  className={cn(
                    "kv-btn kv-btn--md mt-7 w-full",
                    plan.featured
                      ? "kv-btn--primary"
                      : "border border-primary text-primary hover:bg-primary/5"
                  )}
                >
                  {plan.cta || "Đăng ký"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="kv-section bg-muted/50">
        <div className="kv-container">
          <div className="text-center">
            <h2 className="kv-section-title__h">So sánh các gói dịch vụ</h2>
            <p className="kv-section-title__sub">
              Chi tiết tính năng theo từng gói
            </p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full min-w-[640px] text-left text-[14px]">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="p-4 font-semibold text-foreground">
                    Tính năng
                  </th>
                  {["Gói hỗ trợ", "Gói chuyên nghiệp", "Gói cao cấp"].map(
                    (h) => (
                      <th
                        key={h}
                        className="p-4 text-center font-semibold text-foreground"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {packageComparison.map((row, i) => (
                  <tr
                    key={row.title}
                    className={cn("border-b", i % 2 === 1 && "bg-muted/25")}
                  >
                    <td className="p-4 text-foreground/85">{row.title}</td>
                    {row.features.map((f, j) => (
                      <td key={j} className="p-4 text-center">
                        {f === "-" ? (
                          <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" />
                        ) : f === "Chuyên nghiệp" || f === "Cao cấp" ? (
                          <Check className="mx-auto h-4 w-4 text-primary" />
                        ) : (
                          <span className="text-[13px] text-foreground/80">
                            {f}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-[14px] text-muted-foreground">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Cam kết hoàn tiền trong 7 ngày nếu không hài lòng
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="kv-section">
        <div className="kv-container">
          <div className="text-center">
            <h2 className="kv-section-title__h">Thiết bị bán hàng KiotViet</h2>
            <p className="kv-section-title__sub">
              Máy bán hàng, máy in hóa đơn, máy quét mã vạch chính hãng
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/v2/phi-dich-vu/illus/pdv-pos-devices.webp"
            alt="Thiết bị bán hàng KiotViet"
            className="mx-auto mt-8 max-h-64 rounded-xl object-contain"
            loading="lazy"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {deviceGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-[18px] font-semibold text-foreground">
                  {group.title}
                </h3>
                <div className="space-y-3">
                  {group.items.map((d) => (
                    <div
                      key={d.name}
                      className="flex items-center gap-4 rounded-xl border bg-white p-4"
                    >
                      <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-lg bg-muted/50">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={d.img}
                          alt={d.name}
                          className="h-full w-full object-contain p-1.5"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[14px] font-medium text-foreground">
                          {d.name}
                        </p>
                        {d.note && (
                          <p className="text-[12px] text-muted-foreground">
                            {d.note}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-[15px] font-bold text-foreground">
                          {d.price}
                        </p>
                        <p className="text-[12px] text-muted-foreground">
                          Bảo hành 12 tháng
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SupportCards />
    </>
  );
}