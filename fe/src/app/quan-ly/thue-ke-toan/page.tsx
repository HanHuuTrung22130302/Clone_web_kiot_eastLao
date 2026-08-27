"use client";

import { FileText } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { StatusBadge } from "@/components/admin/status-badge";
import { formatVND } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";

const PERIODS = [
  { id: "T08", period: "Kỳ tháng 8/2026", deadline: "20/09/2026", revenue: 125000000, vat: 12500000, status: "Chưa khai thuế" },
  { id: "T07", period: "Kỳ tháng 7/2026", deadline: "20/08/2026", revenue: 112000000, vat: 11200000, status: "Đã nộp" },
  { id: "T06", period: "Kỳ tháng 6/2026", deadline: "20/07/2026", revenue: 98000000, vat: 9800000, status: "Đã nộp" },
  { id: "T05", period: "Kỳ tháng 5/2026", deadline: "20/06/2026", revenue: 104000000, vat: 10400000, status: "Đã nộp" },
  { id: "T04", period: "Kỳ tháng 4/2026", deadline: "20/05/2026", revenue: 89000000, vat: 8900000, status: "Đã nộp" },
  { id: "T03", period: "Kỳ tháng 3/2026", deadline: "20/04/2026", revenue: 95000000, vat: 9500000, status: "Đã nộp" },
];

export default function ThueKeToanPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Thuế & Kế toán"
        subtitle="Kê khai thuế GTGT theo kỳ"
        actions={
          <button className="kv-btn kv-btn--primary kv-btn--md">
            <FileText className="h-4 w-4" />
            Kê khai thuế mới
          </button>
        }
      />

      <div className="rounded-lg border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <p className="text-[14px] font-semibold text-foreground">Doanh nghiệp: Cửa hàng Hantrung</p>
            <p className="mt-0.5 text-[12px] text-muted-foreground">MST: 0312345678 · Kê khai theo phương pháp khấu trừ</p>
          </div>
          <StatusBadge label="Đang hoạt động" />
        </div>

        <div className="divide-y divide-border">
          {PERIODS.map((p) => (
            <div key={p.id} className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-muted/40">
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium text-foreground">{p.period}</p>
                <p className="mt-0.5 text-[12px] text-muted-foreground">Hạn nộp: {p.deadline}</p>
              </div>
              <div className="hidden text-right sm:block">
                <p className="text-[13px] font-semibold text-foreground">{formatVND(p.vat)}</p>
                <p className="text-[11px] text-muted-foreground">VAT phải nộp</p>
              </div>
              <StatusBadge
                label={p.status}
                className={cn(p.status === "Chưa khai thuế" && "bg-amber-500/10 text-amber-600")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
