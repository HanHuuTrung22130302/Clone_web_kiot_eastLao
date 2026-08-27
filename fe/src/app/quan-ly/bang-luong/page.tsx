"use client";

import { FileSpreadsheet } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { adminApi } from "@/lib/admin-api/services";
import type { PaysheetRow } from "@/data/admin/employees";
import type { Column } from "@/components/admin/data-table";
import { formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<PaysheetRow>[] = [
  { key: "code", header: "Mã NV", sortable: true, render: (p) => <span className="font-medium text-primary">{p.code}</span> },
  { key: "name", header: "Nhân viên", sortable: true, render: (p) => <span className="font-medium text-foreground">{p.name}</span> },
  { key: "daysWorked", header: "Ngày công", className: "text-right", render: (p) => <span>{p.daysWorked}</span> },
  { key: "allowance", header: "Phụ cấp", className: "text-right", render: (p) => <span className="text-muted-foreground">{formatVND(p.allowance)}</span> },
  { key: "bonus", header: "Thưởng", className: "text-right", render: (p) => <span className="text-[#00942F]">{formatVND(p.bonus)}</span> },
  { key: "deduction", header: "Khấu trừ", className: "text-right", render: (p) => <span className={p.deduction > 0 ? "text-destructive" : "text-muted-foreground"}>{formatVND(p.deduction)}</span> },
  { key: "total", header: "Tổng lương", sortable: true, className: "text-right", render: (p) => <span className="font-semibold text-foreground">{formatVND(p.total)}</span> },
];

export default function BangLuongPage() {
  return (
    <AdminListPage<PaysheetRow>
      title="Bảng lương"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <FileSpreadsheet className="h-4 w-4" />
          Xuất bảng lương
        </button>
      }
      fetcher={(params) => adminApi.employees.paysheet(params)}
      columns={COLUMNS}
      rowKey={(p) => p.id}
      searchKeys={["code", "name"]}
      searchPlaceholder="Tìm theo mã NV, tên nhân viên..."
      exportFilename="bang-luong"
      minWidth={900}
    />
  );
}
