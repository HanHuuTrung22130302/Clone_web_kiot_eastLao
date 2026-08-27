"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, X, Package, DollarSign, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const NOTIFICATIONS = [
  { id: 1, icon: <Package className="h-4 w-4" />, title: "Đơn hàng mới DH000014", desc: "Khách hàng Nguyễn Văn An", time: "2 phút trước", unread: true },
  { id: 2, icon: <DollarSign className="h-4 w-4" />, title: "Công nợ đến hạn", desc: "Công ty TNHH Minh Anh - 5,200,000đ", time: "30 phút trước", unread: true },
  { id: 3, icon: <MessageCircle className="h-4 w-4" />, title: "Bình luận mới", desc: "Khách hàng phản hồi về sản phẩm CF-001", time: "2 giờ trước", unread: false },
];

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [items] = useState(NOTIFICATIONS);
  const unreadCount = items.filter((n) => n.unread).length;

  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label="Thông báo"
      >
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && (
          <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[9px] font-bold text-white ring-2 ring-white">
            {unreadCount}
          </span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-80 overflow-hidden rounded-xl border border-border bg-white shadow-lg kv-fade-in">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="text-[14px] font-semibold text-foreground">Thông báo</p>
            <button className="text-[12px] font-medium text-primary hover:underline">Đánh dấu đã đọc</button>
          </div>
          <div className="max-h-72 overflow-y-auto">
            {items.map((n) => (
              <button key={n.id} className={cn("flex w-full gap-3 border-b border-border/50 px-4 py-3 text-left transition-colors hover:bg-accent/50", n.unread && "bg-primary/[0.02]")}>
                <span className={cn("mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg", n.unread ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")}>{n.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className={cn("truncate text-[13px]", n.unread ? "font-semibold text-foreground" : "font-medium text-foreground/80")}>{n.title}</p>
                  <p className="mt-0.5 truncate text-[12px] text-muted-foreground">{n.desc}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground/60">{n.time}</p>
                </div>
                {n.unread && <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />}
              </button>
            ))}
          </div>
          <div className="border-t border-border p-2">
            <button className="w-full rounded-lg py-2 text-center text-[13px] font-medium text-primary transition-colors hover:bg-primary/5">
              Xem tất cả thông báo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
