"use client";

import { CalendarDays, TrendingUp, ReceiptText, UsersRound, Percent, CircleDollarSign } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { StatCard } from "@/components/admin/stat-card";
import { formatNumber, formatVND } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";

const METRICS = [
  { label: "Đơn trung bình/ngày", value: "138", icon: <ReceiptText className="h-4 w-4" />, accent: "blue" as const },
  { label: "Khách hàng hoạt động", value: "862", icon: <UsersRound className="h-4 w-4" />, accent: "green" as const },
  { label: "Giá trị đơn trung bình", value: "285,000đ", icon: <CircleDollarSign className="h-4 w-4" />, accent: "orange" as const },
  { label: "Tỷ lệ chuyển đổi", value: "12.4%", icon: <Percent className="h-4 w-4" />, accent: "slate" as const },
];

const TRENDS = [
  { label: "Doanh thu / nhân viên", value: 14500000, delta: 6.8 },
  { label: "Số đơn / nhân viên", value: 186, delta: 3.2 },
  { label: "Tỷ lệ trả hàng", value: 125000, delta: -2.1 },
];

export default function PhanTichHieuQuaPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Phân tích hiệu quả"
        subtitle="Chỉ số hiệu quả kinh doanh tổng thể"
        actions={
          <button className="kv-btn kv-btn--md gap-1.5 border border-border text-foreground hover:bg-accent">
            <CalendarDays className="h-4 w-4" />
            Tháng 8/2026
          </button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {METRICS.map((m) => (
          <StatCard key={m.label} label={m.label} value={m.value} icon={m.icon} accent={m.accent} />
        ))}
      </div>

      <div className="rounded-lg border border-border bg-card p-5">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <h2 className="text-[15px] font-semibold text-foreground">Chỉ số theo nhân viên</h2>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {TRENDS.map((t) => (
            <div key={t.label} className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-[12px] text-muted-foreground">{t.label}</p>
              <p className="mt-1.5 flex items-baseline gap-2 text-[18px] font-bold text-foreground">
                {formatVND(t.value)}
              </p>
              <p className={cn("mt-1 text-[12px] font-medium", t.delta >= 0 ? "text-[#00942F]" : "text-destructive")}>
                {formatNumber(Math.abs(t.delta))}% {t.delta >= 0 ? "↑" : "↓"} so với kỳ trước
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
