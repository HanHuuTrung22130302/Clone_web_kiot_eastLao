"use client";

import { useState } from "react";
import { Facebook, Globe, MessageCircle, Music2, Plug, ShoppingBag, Store, X } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { cn } from "@/lib/utils";

interface Channel {
  id: string;
  name: string;
  desc: string;
  icon: "zalo" | "facebook" | "tiktok" | "website" | "shopee" | "insta";
  connected: boolean;
}

const INITIAL: Channel[] = [
  { id: "zalo", name: "Zalo Mini App", desc: "Bán hàng trên Zalo OA", icon: "zalo", connected: true },
  { id: "facebook", name: "Facebook Fanpage", desc: "Bán hàng qua Messenger & Shop", icon: "facebook", connected: true },
  { id: "tiktok", name: "TikTok Shop", desc: "Bán hàng trên TikTok", icon: "tiktok", connected: false },
  { id: "website", name: "Website KiotViet", desc: "Tạo website bán hàng riêng", icon: "website", connected: true },
  { id: "shopee", name: "Shopee", desc: "Đồng bộ đơn hàng Shopee", icon: "shopee", connected: false },
  { id: "insta", name: "Instagram", desc: "Bán hàng trên Instagram", icon: "insta", connected: false },
];

const ICONS: Record<Channel["icon"], { node: React.ReactNode; color: string }> = {
  zalo: { node: <MessageCircle className="h-5 w-5" />, color: "bg-sky-500/10 text-sky-500" },
  facebook: { node: <Facebook className="h-5 w-5" />, color: "bg-blue-600/10 text-blue-600" },
  tiktok: { node: <Music2 className="h-5 w-5" />, color: "bg-foreground/10 text-foreground" },
  website: { node: <Globe className="h-5 w-5" />, color: "bg-primary/10 text-primary" },
  shopee: { node: <ShoppingBag className="h-5 w-5" />, color: "bg-orange-500/10 text-orange-500" },
  insta: { node: <Store className="h-5 w-5" />, color: "bg-pink-500/10 text-pink-500" },
};

export default function CuaHangOnlinePage() {
  const [channels, setChannels] = useState(INITIAL);

  const toggle = (id: string) => setChannels((cs) => cs.map((c) => (c.id === id ? { ...c, connected: !c.connected } : c)));

  return (
    <div className="space-y-4">
      <PageHeader
        title="Cửa hàng online trên Zalo"
        subtitle="Bán hàng và quản lý đơn qua Zalo Mini App"
        actions={
          <button className="kv-btn kv-btn--primary kv-btn--md">
            <Plug className="h-4 w-4" />
            Kết nối kênh mới
          </button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {channels.map((c) => {
          const ic = ICONS[c.icon];
          return (
            <div key={c.id} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className={cn("grid h-11 w-11 place-items-center rounded-xl", ic.color)}>{ic.node}</span>
                  <div>
                    <p className="font-semibold text-foreground">{c.name}</p>
                    <p className="text-[12px] text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
                <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-medium", c.connected ? "bg-[#00B63E]/10 text-[#00942F]" : "bg-muted text-muted-foreground")}>
                  {c.connected ? "Đã kết nối" : "Chưa kết nối"}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button className="kv-btn kv-btn--md gap-1.5 text-[13px] text-primary hover:bg-primary/5">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  {c.connected ? "Xem đơn hàng" : "Xem hướng dẫn"}
                </button>
                <button
                  onClick={() => toggle(c.id)}
                  className={cn("kv-btn kv-btn--sm kv-btn--md", c.connected ? "border border-border text-foreground hover:bg-muted" : "kv-btn--primary")}
                >
                  {c.connected ? (
                    <>
                      <X className="h-3.5 w-3.5" />
                      Ngắt kết nối
                    </>
                  ) : (
                    <>
                      <Plug className="h-3.5 w-3.5" />
                      Kết nối
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}

        <button className="flex min-h-[150px] flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-muted">
            <Facebook className="h-5 w-5" />
          </span>
          <span className="text-[13px] font-medium">Facebook Group</span>
          <span className="text-[11px]">Sắp ra mắt</span>
        </button>
      </div>
    </div>
  );
}
