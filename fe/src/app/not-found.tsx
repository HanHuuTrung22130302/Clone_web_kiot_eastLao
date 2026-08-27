import Link from "next/link";
import { Store } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="grid h-20 w-20 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Store className="h-10 w-10" />
      </span>
      <p className="mt-6 text-[64px] font-bold leading-none text-primary">
        404
      </p>
      <h1 className="mt-2 text-[22px] font-semibold text-foreground">
        Trang bạn tìm không tồn tại
      </h1>
      <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted-foreground">
        Trang này có thể đã bị di chuyển hoặc không còn tồn tại. Hãy quay lại
        trang chủ để tiếp tục sử dụng KiotViet.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="kv-btn kv-btn--primary kv-btn--md">
          Về trang chủ
        </Link>
        <Link
          href="/huong-dan-su-dung-kiotviet"
          className="kv-btn kv-btn--md border border-primary text-primary hover:bg-primary/5"
        >
          Xem hướng dẫn sử dụng
        </Link>
      </div>
    </div>
  );
}