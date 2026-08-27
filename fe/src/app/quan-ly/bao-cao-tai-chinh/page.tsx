"use client";

import { FileSpreadsheet } from "lucide-react";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { StatCard } from "@/components/admin/stat-card";
import { adminApi } from "@/lib/admin-api/services";
import { formatVND } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";
import type { FinancialReportRow } from "@/data/admin/reports";

const TYPE: Record<FinancialReportRow["id"], "revenue" | "cost" | "profit"> = {
  FR02: "cost",
  FR04: "cost",
  FR06: "cost",
  FR01: "revenue",
  FR03: "profit",
  FR05: "profit",
  FR07: "profit",
};

export default function BaoCaoTaiChinhPage() {
  const [rows, setRows] = useState<FinancialReportRow[]>([]);

  useEffect(() => {
    adminApi.reports.financial().then(setRows);
  }, []);

  const total = rows.find((r) => r.id === "FR01")?.value ?? 0;
  const gross = rows.find((r) => r.id === "FR03")?.value ?? 0;
  const net = rows.find((r) => r.id === "FR07")?.value ?? 0;

  return (
    <div className="space-y-4">
      <PageHeader
        title="Báo cáo tài chính"
        subtitle="Kết quả kinh doanh và lợi nhuận trong kỳ"
        actions={
          <button className="kv-btn kv-btn--primary kv-btn--md">
            <FileSpreadsheet className="h-4 w-4" />
            Xuất file
          </button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Doanh thu thuần" value={formatVND(total)} accent="blue" />
        <StatCard label="Lợi nhuận gộp" value={formatVND(gross)} accent="green" />
        <StatCard label="Lợi nhuận sau thuế" value={formatVND(net)} accent="orange" />
      </div>

      <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
        {rows.map((r) => {
          const t = TYPE[r.id];
          return (
            <div key={r.id} className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-muted/40">
              <div className="min-w-0">
                <p className="text-[14px] font-medium text-foreground">{r.label}</p>
                <p className="mt-0.5 truncate text-[12px] text-muted-foreground">{r.note}</p>
              </div>
              <span
                className={cn(
                  "whitespace-nowrap text-[14px] font-semibold",
                  t === "revenue" && "text-primary",
                  t === "cost" && "text-destructive",
                  t === "profit" && "text-[#00942F]"
                )}
              >
                {formatVND(r.value)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
