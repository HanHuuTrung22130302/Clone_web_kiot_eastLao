"use client";

import { FileSpreadsheet } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { adminApi } from "@/lib/admin-api/services";
import { paginate } from "@/lib/admin-api/http";
import { formatVND, formatNumber } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";
import type { SupplierReportRow } from "@/data/admin/reports";
import type { Column } from "@/components/admin/data-table";

const COLUMNS: Column<SupplierReportRow>[] = [
  { key: "code", header: "Mã NCC", render: (r) => <span className="font-medium text-primary">{r.code}</span> },
  { key: "name", header: "Nhà cung cấp", render: (r) => <span className="max-w-[240px] truncate font-medium text-foreground">{r.name}</span> },
  { key: "purchases", header: "Số phiếu nhập", sortable: true, className: "text-right", render: (r) => <span>{formatNumber(r.purchases)}</span> },
  { key: "qty", header: "Số lượng nhập", className: "text-right", render: (r) => <span className="text-muted-foreground">{formatNumber(r.qty)}</span> },
  { key: "totalValue", header: "Tổng giá trị mua", sortable: true, className: "text-right", render: (r) => <span className="font-semibold text-foreground">{formatVND(r.totalValue)}</span> },
  { key: "returns", header: "Số lần trả", className: "text-right", render: (r) => <span className={cn(r.returns > 0 ? "font-medium text-destructive" : "text-muted-foreground")}>{formatNumber(r.returns)}</span> },
  { key: "returnValue", header: "Giá trị trả hàng", className: "text-right", render: (r) => <span className={cn(r.returnValue > 0 ? "text-destructive" : "text-muted-foreground")}>{formatVND(r.returnValue)}</span> },
];

export default function BaoCaoNhaCungCapPage() {
  return (
    <AdminListPage<SupplierReportRow>
      title="Báo cáo nhà cung cấp"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <FileSpreadsheet className="h-4 w-4" />
          Xuất file
        </button>
      }
      fetcher={(params) => adminApi.reports.suppliers().then((d) => paginate(d, params))}
      columns={COLUMNS}
      rowKey={(r) => r.id}
      searchKeys={["code", "name"]}
      searchPlaceholder="Tìm theo mã, tên nhà cung cấp..."
      exportFilename="bao-cao-nha-cung-cap"
      minWidth={1000}
    />
  );
}
