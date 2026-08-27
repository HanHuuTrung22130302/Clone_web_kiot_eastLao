"use client";

import { DollarSign } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { adminApi } from "@/lib/admin-api/services";
import type { CommissionRow } from "@/data/admin/employees";
import type { Column } from "@/components/admin/data-table";
import { formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<CommissionRow>[] = [
  { key: "code", header: "Mã NV", sortable: true, render: (c) => <span className="font-medium text-primary">{c.code}</span> },
  { key: "name", header: "Nhân viên", sortable: true, render: (c) => <span className="font-medium text-foreground">{c.name}</span> },
  { key: "sales", header: "Doanh số", sortable: true, className: "text-right", render: (c) => <span>{formatVND(c.sales)}</span> },
  { key: "orders", header: "Số đơn", className: "text-right", render: (c) => <span className="text-muted-foreground">{c.orders}</span> },
  { key: "returnCount", header: "Đơn trả", className: "text-right", render: (c) => <span className="text-muted-foreground">{c.returnCount}</span> },
  { key: "commissionRate", header: "Tỷ lệ", className: "text-right", render: (c) => <span>{c.commissionRate}%</span> },
  { key: "commissionAmount", header: "Hoa hồng", sortable: true, className: "text-right", render: (c) => <span className="font-semibold text-[#00942F]">{formatVND(c.commissionAmount)}</span> },
];

export default function BangHoaHongPage() {
  return (
    <AdminListPage<CommissionRow>
      title="Bảng hoa hồng"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <DollarSign className="h-4 w-4" />
          Xuất bảng hoa hồng
        </button>
      }
      fetcher={(params) => adminApi.employees.commissions(params)}
      columns={COLUMNS}
      rowKey={(c) => c.id}
      searchKeys={["code", "name"]}
      searchPlaceholder="Tìm theo mã NV, tên nhân viên..."
      exportFilename="bang-hoa-hong"
      minWidth={900}
    />
  );
}
