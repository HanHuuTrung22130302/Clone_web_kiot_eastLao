"use client";

import { useState } from "react";
import { Check, Sparkles, Store } from "lucide-react";

export default function DangKyPage() {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [shopName, setShopName] = useState("");
  const [authenticationCode, setAuthenticationCode] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-[#0A2133] py-14 text-white sm:py-20">
        <div className="kv-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium">
              <Sparkles className="h-4 w-4 text-[#6FB4FF]" />
              Dùng thử miễn phí 7 ngày
            </span>
            <h1 className="mt-4 text-[28px] font-semibold leading-tight sm:text-[38px]">
              Đăng ký sử dụng phần mềm quản lý bán hàng{" "}
              <span className="text-[#6FB4FF]">KiotViet</span>
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">
              Hơn 300.000 cửa hàng đang quản lý kinh doanh hiệu quả với KiotViet
              mỗi ngày
            </p>
          </div>
        </div>
      </section>

      <section className="kv-section">
        <div className="kv-container grid gap-10 lg:grid-cols-2">
          <div className="hidden lg:block">
            <h2 className="text-[22px] font-semibold text-foreground">
              Vì sao nên chọn KiotViet?
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Quản lý bán hàng, tồn kho, công nợ trên một hệ thống duy nhất",
                "Bán hàng đa kênh: tại quầy, online, sàn TMĐT, Facebook, Zalo",
                "Báo cáo doanh thu, lợi nhuận tức thời, chính xác đến từng sản phẩm",
                "Miễn phí hóa đơn điện tử, chữ ký số, phần mềm kế toán hộ kinh doanh",
                "Hỗ trợ tận tình qua tổng đài 1800 6162 / 1900 6522",
              ].map((text) => (
                <li
                  key={text}
                  className="flex gap-3 rounded-xl border bg-white p-4 text-[14px] leading-relaxed text-foreground/80"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="kv-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <Store className="h-8 w-8" />
                </span>
                <h2 className="mt-5 text-[20px] font-bold text-foreground">
                  Đăng ký thành công!
                </h2>
                <p className="mt-2 max-w-sm text-[14px] text-muted-foreground">
                  Cảm ơn {fullname || "bạn"}. KiotViet sẽ liên hệ với số điện
                  thoại {phone || "của bạn"} để xác nhận đăng ký trong thời gian
                  sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center">
                  <h2 className="text-[20px] font-bold text-foreground">
                    Đăng ký ngay
                  </h2>
                  <p className="mt-1 text-[13px] text-muted-foreground">
                    Điền thông tin để tạo tài khoản KiotViet
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="fullname"
                    className="mb-1.5 block text-[13px] font-medium text-foreground"
                  >
                    Họ và tên <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    required
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="kv-input w-full"
                    placeholder="Tên của bạn"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-[13px] font-medium text-foreground"
                  >
                    Số điện thoại <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9]{9,11}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="kv-input w-full"
                    placeholder="091 234 56 78"
                  />
                </div>
                <div>
                  <label
                    htmlFor="shopName"
                    className="mb-1.5 block text-[13px] font-medium text-foreground"
                  >
                    Tên cửa hàng
                  </label>
                  <input
                    id="shopName"
                    name="shopName"
                    type="text"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    className="kv-input w-full"
                    placeholder="Tên cửa hàng của bạn"
                  />
                </div>
                <div>
                  <label
                    htmlFor="authenticationCode"
                    className="mb-1.5 block text-[13px] font-medium text-foreground"
                  >
                    Mã xác thực
                  </label>
                  <input
                    id="authenticationCode"
                    name="authentication_code"
                    type="text"
                    maxLength={4}
                    value={authenticationCode}
                    onChange={(e) =>
                      setAuthenticationCode(
                        e.target.value.replace(/[^0-9]/g, "")
                      )
                    }
                    className="kv-input w-full"
                    placeholder="Nhập 4 chữ số"
                  />
                </div>
                <label className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted-foreground">
                  <input
                    type="checkbox"
                    name="agree"
                    required
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span>
                    Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật của
                    KiotViet
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!agree}
                  className="kv-btn kv-btn--primary kv-btn--lg w-full disabled:opacity-50"
                >
                  Đăng ký dùng thử miễn phí
                </button>
                <p className="text-center text-[12px] text-muted-foreground">
                  Miễn phí 7 ngày · Không cần thẻ tín dụng · Hủy bất cứ lúc nào
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}