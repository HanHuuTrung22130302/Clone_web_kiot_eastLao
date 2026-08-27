"use client";

import { useEffect, useState } from "react";
import { CalendarDays, FileSpreadsheet } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { StatCard } from "@/components/admin/stat-card";
import { adminApi } from "@/lib/admin-api/services";
import { formatNumber, formatVND } from "@/lib/admin-api/format";
import type { StatItem } from "@/data/admin/reports";

const DAY_LABELS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];

export default function PhanTichKinhDoanhPage() {
  const [stats, setStats] = useState<StatItem[]>();
  const [revenue, setRevenue] = useState<number[]>([]);

  useEffect(() => {
    adminApi.reports.dashboard().then(setStats);
    adminApi.reports.revenueByDay().then(setRevenue);
  }, []);

  const max = Math.max(...revenue, 1);

  return (
    <div className="space-y-4">
      <PageHeader
        title="Phân tích kinh doanh"
        subtitle="Biến động doanh thu và kết quả bán hàng trong 30 ngày"
        actions={
          <button className="kv-btn kv-btn--md gap-1.5 border border-border text-foreground hover:bg-accent">
            <CalendarDays className="h-4 w-4" />
            Tháng 8/2026
          </button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {stats?.map((s) => (
          <StatCard
            key={s.label}
            label={s.label}
            value={formatVND(s.value)}
            delta={`${s.delta > 0 ? "+" : ""}${s.delta}%`}
            sub={s.deltaLabel}
            accent={s.delta >= 0 ? "green" : "red"}
          />
        ))}
      </div>

      <div className="rounded-lg border border-border bg-card p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-foreground">Doanh thu theo ngày</h2>
          <span className="text-[12px] text-muted-foreground">Tổng: {formatVND(revenue.reduce((a, b) => a + b, 0))}</span>
        </div>
        <div className="mt-6 flex h-52 items-end gap-1">
          {revenue.map((v, i) => (
            <div key={i} className="group relative flex flex-1 flex-col items-center justify-end self-stretch">
              <div
                className="w-full rounded-t-sm bg-gradient-to-t from-[#0070F4] to-[#4d9dff] transition-colors group-hover:from-[#0063db] group-hover:to-[#3d8df7]"
                style={{ height: `${Math.max(3, (v / max) * 100)}%` }}
              />
              <span className="mt-1 hidden text-[9px] text-muted-foreground group-hover:block">{formatNumber(v / 1000)}k</span>
              <span className="absolute -bottom-4 hidden text-[9px] text-muted-foreground group-hover:block">{DAY_LABELS[i]}</span>
            </div>
          ))}
        </div>
        <div className="mt-7 flex justify-between text-[10px] text-muted-foreground">
          <span>{DAY_LABELS[0]}</span>
          <span>{DAY_LABELS[14]}</span>
          <span>{DAY_LABELS[28]}</span>
        </div>
      </div>
    </div>
  );
}
