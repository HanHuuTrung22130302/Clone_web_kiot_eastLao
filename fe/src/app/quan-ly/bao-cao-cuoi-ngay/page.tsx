"use client";

import { FileSpreadsheet } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { EndOfDayRow } from "@/data/admin/reports";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<EndOfDayRow>[] = [
  { key: "code", header: "Mã công nợ", sortable: true, render: (r) => <span className="font-medium text-primary">{r.code}</span> },
  { key: "time", header: "Thời gian", sortable: true, render: (r) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(r.time)}</span> },
  { key: "branch", header: "Chi nhánh", render: (r) => <span className="max-w-[160px] truncate text-muted-foreground">{r.branch}</span> },
  { key: "shift", header: "Ca", render: (r) => <span className="whitespace-nowrap text-muted-foreground">{r.shift}</span> },
  { key: "cashStart", header: "Tiền mặt đầu ca", className: "text-right", render: (r) => <span className="text-muted-foreground">{formatVND(r.cashStart)}</span> },
  { key: "cashIn", header: "Thu trong ca", className: "text-right", render: (r) => <span className="text-[#00942F]">{formatVND(r.cashIn)}</span> },
  { key: "cashOut", header: "Chi trong ca", className: "text-right", render: (r) => <span className="text-destructive">{formatVND(r.cashOut)}</span> },
  { key: "cashEnd", header: "Tồn cuối ca", sortable: true, className: "text-right", render: (r) => <span className="font-semibold text-foreground">{formatVND(r.cashEnd)}</span> },
  { key: "cashier", header: "Thu ngân", render: (r) => <span className="text-muted-foreground">{r.cashier}</span> },
  { key: "status", header: "Trạng thái", render: (r) => <StatusBadge label={r.status} /> },
];

export default function BaoCaoCuoiNgayPage() {
  return (
    <AdminListPage<EndOfDayRow>
      title="Báo cáo cuối ngày"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <FileSpreadsheet className="h-4 w-4" />
          Xuất file
        </button>
      }
      fetcher={(params) => adminApi.reports.endOfDay(params)}
      columns={COLUMNS}
      rowKey={(r) => r.id}
      chips={[{ label: "Tất cả" }, { label: "Đã khóa" }, { label: "Đang mở" }]}
      chipFilter={(r, chip) => chip === "Tất cả" || r.status === chip}
      searchKeys={["code", "branch", "cashier"]}
      searchPlaceholder="Tìm theo mã, chi nhánh, thu ngân..."
      exportFilename="bao-cao-cuoi-ngay"
      minWidth={1300}
    />
  );
}
