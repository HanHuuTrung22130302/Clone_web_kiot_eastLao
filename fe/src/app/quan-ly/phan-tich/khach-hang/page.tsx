"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { adminApi } from "@/lib/admin-api/services";
import { formatNumber, formatVND } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";
import type { TopCustomer } from "@/data/admin/reports";

export default function PhanTichKhachHangPage() {
  const [rows, setRows] = useState<TopCustomer[]>([]);
  useEffect(() => {
    adminApi.reports.topCustomers().then(setRows);
  }, []);
  const maxRevenue = Math.max(...rows.map((r) => r.revenue), 1);

  return (
    <div className="space-y-4">
      <PageHeader
        title="Phân tích khách hàng"
        subtitle="Khách hàng mua nhiều nhất trong kỳ"
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
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium text-foreground">{r.name}</p>
                  <p className="truncate text-[11px] text-muted-foreground">{r.code}</p>
                </div>
                <p className="whitespace-nowrap text-[13px] font-semibold text-foreground">{formatVND(r.revenue)}</p>
              </div>
              <div className="mt-1.5 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className={cn("h-full rounded-full", r.revenue >= maxRevenue ? "bg-[#00942F]" : "bg-[#7ac943]")} style={{ width: `${(r.revenue / maxRevenue) * 100}%` }} />
                </div>
                <span className="whitespace-nowrap text-[11px] text-muted-foreground">{formatNumber(r.orders)} đơn · {r.ratio}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
