"use client";

import { useMemo, useState } from "react";
import { Truck, Plus, Search } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { StatusBadge } from "@/components/admin/status-badge";
import { cn } from "@/lib/utils";
import { partnerDeliveries } from "@/data/admin/deliveries";

export default function DoiTacGiaoHangPage() {
  const [tab, setTab] = useState<"Tích hợp" | "Khác">("Tích hợp");
  const [query, setQuery] = useState("");
  const [partners, setPartners] = useState(() => partnerDeliveries);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return partners.filter(
      (p) =>
        (tab === "Tích hợp" ? p.code !== "SELF" : p.code === "SELF") &&
        (!q || p.name.toLowerCase().includes(q))
    );
  }, [partners, query, tab]);

  function togglePartner(id: string) {
    setPartners((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p))
    );
  }

  return (
    <div className="space-y-4">
      <PageHeader
        title="Đối tác giao hàng"
        subtitle="Kết nối và quản lý các đơn vị vận chuyển"
        actions={
          <button className="kv-btn kv-btn--primary kv-btn--md">
            <Plus className="h-4 w-4" />
            Tạo nhóm ĐTGH
          </button>
        }
      />

      <div className="flex flex-wrap items-center gap-2">
        {["Tích hợp", "Khác"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t as "Tích hợp" | "Khác")}
            className={cn(
              "relative rounded-lg px-3 py-2 text-[13px] font-medium transition-colors",
              tab === t ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {t}
            {tab === t && (
              <span className="absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-primary" />
            )}
          </button>
        ))}
        <div className="ml-auto flex h-9 min-w-[220px] items-center gap-2 rounded-lg border border-border bg-white px-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm đối tác giao hàng..."
            className="h-full w-full bg-transparent text-[13px] outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <div key={p.id} className="rounded-lg border border-border bg-white p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-white"
                  style={{ backgroundColor: p.color }}
                >
                  <Truck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-foreground">{p.name}</p>
                  <p className="text-[12px] text-muted-foreground">{p.code}</p>
                </div>
              </div>
              <StatusBadge label={p.active ? "Đang hợp tác" : "Ngừng hợp tác"} />
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2.5 border-t border-border/70 pt-3 text-[12px]">
              <div>
                <dt className="text-muted-foreground">Hotline</dt>
                <dd className="mt-0.5 font-medium text-foreground">{p.hotline}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Phí giao hàng</dt>
                <dd className="mt-0.5 font-medium text-foreground">
                  {p.cost} <span className="text-muted-foreground">/ {p.unit}</span>
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-muted-foreground">Lấy hàng</dt>
                <dd className="mt-0.5 font-medium text-foreground">{p.pickupNote}</dd>
              </div>
            </dl>

            <button
              onClick={() => togglePartner(p.id)}
              className={cn(
                "mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border py-2 text-[13px] font-medium transition-colors",
                p.active
                  ? "border-[#E11D48]/30 bg-[#E11D48]/5 text-[#E11D48] hover:bg-[#E11D48]/10"
                  : "border-primary bg-primary/5 text-primary hover:bg-primary/10"
              )}
            >
              {p.active ? "Ngừng hợp tác" : "Bắt đầu hợp tác"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
