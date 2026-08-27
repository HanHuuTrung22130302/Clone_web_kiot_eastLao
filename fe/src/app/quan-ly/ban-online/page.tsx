"use client";

import { Globe, Rocket, ShoppingCart, Store, Zap } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";

const ACTIONS = [
  { icon: <ShoppingCart className="h-5 w-5" />, title: "Quản lý đơn hàng", desc: "Tổng hợp đơn từ các kênh bán online: Shopee, Facebook, Tiktok, Zalo..." },
  { icon: <Store className="h-5 w-5" />, title: "Tạo gian hàng online", desc: "Mở bán online chỉ trong vài phút, không cần thiết kế" },
  { icon: <Zap className="h-5 w-5" />, title: "Bán hàng live", desc: "Tạo link bán hàng chia sẻ qua Zalo, Facebook, Messenger" },
  { icon: <Globe className="h-5 w-5" />, title: "Bán hàng đa kênh", desc: "Đồng bộ sản phẩm và tồn kho giữa cửa hàng và các sàn" },
];

const CHANNELS = [
  { name: "Tại cửa hàng", orders: 46, revenue: 28600000 },
  { name: "Website", orders: 22, revenue: 19500000 },
  { name: "Shopee / Lazada / Tiki", orders: 15, revenue: 9800000 },
  { name: "Facebook Fanpage", orders: 8, revenue: 5200000 },
  { name: "Tiktok Shop", orders: 6, revenue: 3800000 },
];

export default function BanOnlinePage() {
  const maxRevenue = Math.max(...CHANNELS.map((c) => c.revenue));

  return (
    <div className="space-y-4">
      <PageHeader
        title="Bán online"
        subtitle="Phát triển kênh bán online và quản lý đơn hàng từ các kênh"
        actions={
          <button className="kv-btn kv-btn--primary kv-btn--md">
            <Rocket className="h-4 w-4" />
            Bắt đầu bán online
          </button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {ACTIONS.map((a) => (
          <div key={a.title} className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{a.icon}</span>
            <p className="mt-3 font-semibold text-foreground">{a.title}</p>
            <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-card">
        <div className="border-b border-border px-5 py-4">
          <h2 className="text-[15px] font-semibold text-foreground">Doanh thu theo kênh (tháng 8/2026)</h2>
        </div>
        <div className="divide-y divide-border">
          {CHANNELS.map((c) => (
            <div key={c.name} className="flex items-center gap-4 px-5 py-3.5">
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="truncate text-[13px] font-medium text-foreground">{c.name}</p>
                  <p className="whitespace-nowrap text-[13px] font-semibold text-foreground">{c.revenue.toLocaleString("vi-VN")}đ</p>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#0070F4] to-[#4d9dff]" style={{ width: `${(c.revenue / maxRevenue) * 100}%` }} />
                  </div>
                  <span className="whitespace-nowrap text-[11px] text-muted-foreground">{c.orders} đơn</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
