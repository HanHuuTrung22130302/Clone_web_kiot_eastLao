"use client";

import { Eye, Globe, Pencil, ShoppingBag, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { cn } from "@/lib/utils";

export default function WebsiteBanHangPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Website bán hàng"
        subtitle="Quản lý website bán hàng trực tuyến của bạn"
        actions={
          <div className="flex gap-2">
            <button className="kv-btn kv-btn--md gap-1.5 border border-border text-foreground hover:bg-accent">
              <Eye className="h-4 w-4" />
              Xem website
            </button>
            <button className="kv-btn kv-btn--primary kv-btn--md">
              <Pencil className="h-4 w-4" />
              Chỉnh sửa
            </button>
          </div>
        }
      />

      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="relative h-44 bg-gradient-to-br from-[#0070F4] via-[#4d9dff] to-[#8cb9ff]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Globe className="mx-auto h-10 w-10" />
              <p className="mt-2 text-[18px] font-bold">cua-hang-demo.kiotviet.online</p>
              <a
                href="https://cua-hang-demo.kiotviet.online"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-[13px] text-white/80 underline underline-offset-2 hover:text-white"
              >
                Mở website <Eye className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-3">
          {[
            { label: "Lượt truy cập", value: "1,842", delta: "+12%", up: true },
            { label: "Đơn hàng", value: "22", delta: "+8%", up: true },
            { label: "Doanh thu", value: "19,500,000đ", delta: "-0.5%", up: false },
          ].map((s) => (
            <div key={s.label} className="bg-card px-5 py-4">
              <p className="text-[12px] text-muted-foreground">{s.label}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-[20px] font-bold text-foreground">{s.value}</span>
                <span className={cn("text-[12px] font-medium", s.up ? "text-[#00942F]" : "text-destructive")}>{s.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="divide-y divide-border border-t border-border">
          {[
            { icon: <ShoppingBag className="h-4 w-4" />, title: "Sản phẩm", desc: "Đang hiển thị 24/34 sản phẩm trên website" },
            { icon: <Sparkles className="h-4 w-4" />, title: "Giao diện", desc: "Đang dùng giao diện Mặc định. Có 3 mẫu giao diện khác." },
            { icon: <Globe className="h-4 w-4" />, title: "SEO", desc: "Mô tả ngắn chưa được tối ưu cho công cụ tìm kiếm" },
          ].map((s) => (
            <div key={s.title} className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-muted/40">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">{s.icon}</span>
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-foreground">{s.title}</p>
                <p className="mt-0.5 text-[12px] text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
