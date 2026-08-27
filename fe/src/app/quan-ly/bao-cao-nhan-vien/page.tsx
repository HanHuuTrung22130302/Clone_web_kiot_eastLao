"use client";

import { FileSpreadsheet } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { adminApi } from "@/lib/admin-api/services";
import { formatVND, formatNumber } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";
import type { UserReportRow } from "@/data/admin/reports";
import type { Column } from "@/components/admin/data-table";

const COLUMNS: Column<UserReportRow>[] = [
  { key: "username", header: "Tên đăng nhập", render: (r) => <span className="font-medium text-primary">{r.username}</span> },
  { key: "name", header: "Nhân viên", render: (r) => <span className="font-medium text-foreground">{r.name}</span> },
  { key: "invoices", header: "Số hóa đơn", sortable: true, className: "text-right", render: (r) => <span>{formatNumber(r.invoices)}</span> },
  { key: "orders", header: "Số phiếu đặt", sortable: true, className: "text-right", render: (r) => <span>{formatNumber(r.orders)}</span> },
  { key: "revenue", header: "Doanh thu", sortable: true, className: "text-right", render: (r) => <span className="font-semibold text-foreground">{formatVND(r.revenue)}</span> },
  { key: "returns", header: "Đơn trả", className: "text-right", render: (r) => <span className={cn(r.returns > 0 ? "font-medium text-destructive" : "text-muted-foreground")}>{formatNumber(r.returns)}</span> },
];

export default function BaoCaoNhanVienPage() {
  return (
    <AdminListPage<UserReportRow>
      title="Báo cáo nhân viên"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <FileSpreadsheet className="h-4 w-4" />
          Xuất file
        </button>
      }
      fetcher={(params) => adminApi.reports.users(params)}
      columns={COLUMNS}
      rowKey={(r) => r.id}
      searchKeys={["username", "name"]}
      searchPlaceholder="Tìm theo tên đăng nhập, tên nhân viên..."
      exportFilename="bao-cao-nhan-vien"
      minWidth={900}
    />
  );
}
