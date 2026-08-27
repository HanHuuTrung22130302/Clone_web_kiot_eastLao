"use client";

import { Plus } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { StockTake } from "@/data/admin/warehouse";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime, formatNumber, formatVND } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";

const COLUMNS: Column<StockTake>[] = [
  { key: "code", header: "Mã kiểm kho", sortable: true, render: (s) => <span className="font-medium text-primary">{s.code}</span> },
  { key: "createdAt", header: "Thời gian", sortable: true, render: (s) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(s.createdAt)}</span> },
  { key: "creator", header: "Người tạo", render: (s) => <span className="text-muted-foreground">{s.creator}</span> },
  { key: "balancer", header: "Người cân bằng", render: (s) => <span className="text-muted-foreground">{s.balancer}</span> },
  { key: "actualQty", header: "SL thực tế", sortable: true, className: "text-right", render: (s) => <span>{formatNumber(s.actualQty)}</span> },
  { key: "totalActual", header: "Tổng thực tế", className: "text-right", render: (s) => <span className="text-muted-foreground">{formatVND(s.totalActual)}</span> },
  { key: "totalDiff", header: "Lệch SL", className: "text-right", render: (s) => (
      <span className={cn(s.totalDiff !== 0 && (s.totalDiff > 0 ? "text-[#00942F]" : "text-destructive"))}>
        {s.totalDiff > 0 ? "+" : ""}{formatNumber(s.totalDiff)}
      </span>
    ) },
  { key: "totalValueDiff", header: "Lệch giá trị", className: "text-right", render: (s) => (
      <span className={cn(s.totalValueDiff !== 0 && (s.totalValueDiff > 0 ? "text-[#00942F]" : "text-destructive"))}>
        {s.totalValueDiff > 0 ? "+" : ""}{formatVND(s.totalValueDiff)}
      </span>
    ) },
  { key: "status", header: "Trạng thái", render: (s) => <StatusBadge label={s.status} /> },
];

export default function KiemKhoPage() {
  return (
    <AdminListPage<StockTake>
      title="Kiểm kho"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Tạo phiếu kiểm kho
        </button>
      }
      fetcher={(params) => adminApi.warehouse.stockTakes(params)}
      columns={COLUMNS}
      rowKey={(s) => s.id}
      chips={[{ label: "Chờ cân bằng" }, { label: "Đã cân bằng" }, { label: "Đã hủy" }]}
      chipFilter={(s, chip) => s.status === chip}
      searchKeys={["code", "creator", "note"]}
      searchPlaceholder="Tìm theo mã kiểm kho, người tạo..."
      exportFilename="danh-sach-kiem-kho"
      minWidth={1100}
    />
  );
}
