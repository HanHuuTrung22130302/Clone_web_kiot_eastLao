export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A2133]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 80% 10%, rgb(0 112 244 / 0.35), transparent 60%), radial-gradient(60% 50% at 10% 90%, rgb(0 112 244 / 0.25), transparent 60%)",
        }}
      />
      <div className="kv-container relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="text-[32px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[44px] lg:text-[52px]">
              Phần mềm quản lý bán hàng{" "}
              <span className="text-[#66A9F8]">phổ biến nhất</span>
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/70 sm:text-[17px]">
              300.000+ nhà kinh doanh sử dụng và 10.000+ nhà kinh doanh mới mỗi
              tháng. Dùng thử miễn phí ngay hôm nay.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/dang-ky"
                className="kv-btn kv-btn--primary kv-btn--lg text-white"
              >
                Dùng thử miễn phí
              </a>
              <a
                href="/huong-dan-su-dung-kiotviet"
                className="kv-btn kv-btn--lg border border-white/20 text-white hover:bg-white/10"
              >
                Khám phá
              </a>
            </div>
            <p className="mt-6 text-[13px] text-white/50">
              Phiên bản dành riêng cho Việt Kiều kinh doanh ở nước ngoài
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-[560px]">
              <img
                src="/images/v2/home/hero/fashionable-asian.webp"
                srcSet="/images/v2/home/hero/fashionable-asian-1x.webp 1x, /images/v2/home/hero/fashionable-asian.webp 2x"
                alt=""
                className="w-full"
              />
              <img
                src="/images/v2/home/hero/pos-retail.webp"
                srcSet="/images/v2/home/hero/pos-retail-1x.webp 1x, /images/v2/home/hero/pos-retail.webp 2x"
                alt="Phần mềm bán hàng KiotViet"
                className="absolute inset-0 h-full w-full object-contain"
              />
              <div className="absolute right-0 top-[8%] w-44 rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur">
                <p className="text-[13px] font-medium text-white/70">Orders</p>
                <div className="mt-3 space-y-2">
                  {[
                    { code: "OSP-011", price: "268,000đ" },
                    { code: "OSP-012", price: "1,320,000đ" },
                    { code: "OSP-013", price: "475,000đ" },
                  ].map((item) => (
                    <div
                      key={item.code}
                      className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#006FFF]" />
                      <span className="text-[12px] text-white/85">
                        {item.code}
                      </span>
                      <span className="ml-auto text-[12px] font-semibold text-white">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}