"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Store, LogIn } from "lucide-react";
import { fakeLogin } from "@/lib/auth";

export default function DangNhapPage() {
  return (
    <Suspense>
      <DangNhapForm />
    </Suspense>
  );
}

function DangNhapForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/quan-ly";
  const [domain, setDomain] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!domain.trim()) {
      setError("Vui lòng nhập địa chỉ truy cập cửa hàng.");
      return;
    }
    if (!password.trim()) {
      setError("Vui lòng nhập mật khẩu.");
      return;
    }
    setLoading(true);
    // Fake auth: lưu localStorage rồi vào trang quản lý
    setTimeout(() => {
      fakeLogin({
        fullname: domain.trim() || "Chủ cửa hàng",
        shopName: domain.trim().split(".")[0] || "Cửa hàng",
      });
      router.push(next);
    }, 400);
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-muted/40 px-4 py-16">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border bg-white p-8 shadow-kv">
          <div className="text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Store className="h-7 w-7" />
            </span>
            <h1 className="mt-4 text-[22px] font-bold text-foreground">
              Đăng nhập tài khoản KiotViet
            </h1>
            <p className="mt-1 text-[13px] text-muted-foreground">
              Nhập địa chỉ truy cập cửa hàng của bạn
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="domain"
                className="mb-1.5 block text-[13px] font-medium text-foreground"
              >
                Địa chỉ truy cập cửa hàng
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-input bg-background px-3.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                <input
                  id="domain"
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Địa chỉ truy cập cửa hàng"
                  className="h-11 flex-1 bg-transparent text-[14px] text-foreground outline-none placeholder:text-muted-foreground/60"
                />
                <span className="text-[13px] font-medium text-muted-foreground">
                  .kiotviet.vn
                </span>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-[13px] font-medium text-foreground"
              >
                Mật khẩu
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="kv-input w-full"
                placeholder="••••••••"
              />
            </div>
            {error && (
              <p className="rounded-lg bg-destructive/10 px-3 py-2 text-[13px] text-destructive">
                {error}
              </p>
            )}
            <label className="flex items-center gap-2 text-[13px] text-muted-foreground">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              Ghi nhớ đăng nhập
            </label>
            <button
              type="submit"
              disabled={loading}
              className="kv-btn kv-btn--primary kv-btn--lg w-full disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Đang vào cửa hàng…
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Vào cửa hàng
                </span>
              )}
            </button>
            <p className="text-center text-[13px] text-muted-foreground">
              Bạn chưa có gian hàng trên KiotViet?{" "}
              <a
                href="/dang-ky"
                className="font-medium text-primary hover:underline"
              >
                Dùng thử miễn phí
              </a>
            </p>
          </form>
        </div>
        <p className="mt-4 text-center text-[12px] text-muted-foreground">
          Demo: nhập bất kỳ tên cửa hàng + mật khẩu để vào trang quản lý
        </p>
      </div>
    </section>
  );
}
