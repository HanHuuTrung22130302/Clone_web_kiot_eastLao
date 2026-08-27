"use client";

import { ArrowDownToLine, ArrowUpFromLine, Landmark, Wallet } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { StatCard } from "@/components/admin/stat-card";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { adminApi } from "@/lib/admin-api/services";
import type { CashFlow } from "@/data/admin/cash-flow";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";

const COLUMNS: Column<CashFlow>[] = [
  { key: "code", header: "Mã phiếu", sortable: true, render: (c) => <span className="font-medium text-primary">{c.code}</span> },
  { key: "time", header: "Thời gian", sortable: true, render: (c) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(c.time)}</span> },
  { key: "type", header: "Loại phiếu", render: (c) => (
      <span className={cn("rounded-full px-2.5 py-1 text-[12px] font-medium", c.type === "Thu" ? "bg-[#00B63E]/10 text-[#00942F]" : "bg-destructive/10 text-destructive")}>
        {c.type === "Thu" ? "Phiếu thu" : "Phiếu chi"}
      </span>
    ) },
  { key: "category", header: "Hạng mục", render: (c) => <span className="whitespace-nowrap text-muted-foreground">{c.category}</span> },
  { key: "note", header: "Nội dung", render: (c) => <span className="max-w-[240px] truncate text-foreground/85">{c.note}</span> },
  { key: "creator", header: "Người tạo", render: (c) => <span className="text-muted-foreground">{c.creator}</span> },
  { key: "amount", header: "Số tiền", sortable: true, className: "text-right", render: (c) => (
      <span className={cn("font-semibold", c.type === "Thu" ? "text-[#00942F]" : "text-destructive")}>
        {c.type === "Thu" ? "+" : "-"}{formatVND(c.amount)}
      </span>
    ) },
];

export default function SoQuyPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Sổ quỹ"
        subtitle="Quản lý thu chi tiền mặt của cửa hàng"
        actions={
          <div className="flex gap-2">
            <button className="kv-btn kv-btn--md gap-1.5 border border-border text-[#00942F] hover:bg-[#00B63E]/5">
              <ArrowDownToLine className="h-4 w-4" />
              Phiếu thu
            </button>
            <button className="kv-btn kv-btn--md gap-1.5 border border-border text-destructive hover:bg-destructive/5">
              <ArrowUpFromLine className="h-4 w-4" />
              Phiếu chi
            </button>
          </div>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Số dư đầu kỳ" value={formatVND(52000000)} icon={<Wallet className="h-4 w-4" />} accent="slate" />
        <StatCard label="Tổng thu trong kỳ" value={formatVND(28925000)} icon={<ArrowDownToLine className="h-4 w-4" />} accent="green" footer={<p className="mt-1 text-[12px] text-muted-foreground">Tháng 8/2026</p>} />
        <StatCard label="Tổng chi trong kỳ" value={formatVND(98950000)} icon={<ArrowUpFromLine className="h-4 w-4" />} accent="red" footer={<p className="mt-1 text-[12px] text-muted-foreground">Tháng 8/2026</p>} />
      </div>

      <AdminListPage<CashFlow>
        title=""
        fetcher={(params) => adminApi.cashflow.list(params)}
        columns={COLUMNS}
        rowKey={(c) => c.id}
        chips={[{ label: "Phiếu thu" }, { label: "Phiếu chi" }]}
        chipFilter={(c, chip) => (chip === "Phiếu thu" ? c.type === "Thu" : c.type === "Chi")}
        selectFilters={[{ key: "category", label: "Hạng mục", options: [] }]}
        optionsFetcher={async () => ({ category: await adminApi.cashflow.categories() })}
        searchKeys={["code", "category", "note", "creator"]}
        searchPlaceholder="Tìm theo mã phiếu, hạng mục, nội dung..."
        exportFilename="so-quy"
        minWidth={1000}
      />
    </div>
  );
}
