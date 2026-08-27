"use client";

import { FileSpreadsheet } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { adminApi } from "@/lib/admin-api/services";
import { paginate } from "@/lib/admin-api/http";
import { formatVND, formatNumber } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";
import type { CustomerReportRow } from "@/data/admin/reports";
import type { Column } from "@/components/admin/data-table";

const COLUMNS: Column<CustomerReportRow>[] = [
  { key: "code", header: "Mã khách hàng", render: (r) => <span className="font-medium text-primary">{r.code}</span> },
  { key: "name", header: "Tên khách hàng", render: (r) => <span className="max-w-[220px] truncate font-medium text-foreground">{r.name}</span> },
  { key: "invoices", header: "Số hóa đơn", sortable: true, className: "text-right", render: (r) => <span>{formatNumber(r.invoices)}</span> },
  { key: "qty", header: "Số lượng", className: "text-right", render: (r) => <span className="text-muted-foreground">{formatNumber(r.qty)}</span> },
  { key: "revenue", header: "Doanh thu", sortable: true, className: "text-right", render: (r) => <span className="font-semibold text-foreground">{formatVND(r.revenue)}</span> },
  { key: "debt", header: "Công nợ", sortable: true, className: "text-right", render: (r) => <span className={cn("font-medium", r.debt > 0 ? "text-destructive" : "text-muted-foreground")}>{formatVND(r.debt)}</span> },
];

export default function BaoCaoKhachHangPage() {
  return (
    <AdminListPage<CustomerReportRow>
      title="Báo cáo khách hàng"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <FileSpreadsheet className="h-4 w-4" />
          Xuất file
        </button>
      }
      fetcher={(params) => adminApi.reports.customers().then((d) => paginate(d, params))}
      columns={COLUMNS}
      rowKey={(r) => r.id}
      searchKeys={["code", "name"]}
      searchPlaceholder="Tìm theo mã, tên khách hàng..."
      exportFilename="bao-cao-khach-hang"
      minWidth={900}
    />
  );
}
