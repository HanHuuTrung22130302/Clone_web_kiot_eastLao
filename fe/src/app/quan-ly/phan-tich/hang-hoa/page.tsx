"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { adminApi } from "@/lib/admin-api/services";
import { formatNumber, formatVND } from "@/lib/admin-api/format";
import type { TopProduct } from "@/data/admin/reports";

export default function PhanTichHangHoaPage() {
  const [rows, setRows] = useState<TopProduct[]>([]);
  useEffect(() => {
    adminApi.reports.topProducts().then(setRows);
  }, []);
  const maxQty = Math.max(...rows.map((r) => r.qty), 1);

  return (
    <div className="space-y-4">
      <PageHeader
        title="Phân tích hàng hóa"
        subtitle="Top sản phẩm bán chạy nhất trong kỳ"
        actions={
          <button className="kv-btn kv-btn--md gap-1.5 border border-border text-foreground hover:bg-accent">
            <CalendarDays className="h-4 w-4" />
            Tháng 8/2026
          </button>
        }
      />

      <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
        {rows.map((r) => (
          <div key={r.code} className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-muted/40">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-[12px] font-bold text-primary">
              {r.rank}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <p className="truncate text-[13px] font-medium text-foreground">{r.name}</p>
                <p className="whitespace-nowrap text-[13px] font-semibold text-foreground">{formatVND(r.revenue)}</p>
              </div>
              <div className="mt-1.5 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#0070F4] to-[#4d9dff]" style={{ width: `${(r.qty / maxQty) * 100}%` }} />
                </div>
                <span className="whitespace-nowrap text-[11px] text-muted-foreground">{formatNumber(r.qty)} SP · {r.ratio}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
