"use client";

import { CalendarCheck } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { adminApi } from "@/lib/admin-api/services";
import type { TimeSheetRow } from "@/data/admin/employees";
import type { Column } from "@/components/admin/data-table";
import { formatNumber } from "@/lib/admin-api/format";

const COLUMNS: Column<TimeSheetRow>[] = [
  { key: "code", header: "Mã NV", sortable: true, render: (t) => <span className="font-medium text-primary">{t.code}</span> },
  { key: "name", header: "Nhân viên", sortable: true, render: (t) => <span className="font-medium text-foreground">{t.name}</span> },
  { key: "daysWorked", header: "Ngày công", sortable: true, className: "text-right", render: (t) => <span>{t.daysWorked}</span> },
  { key: "hoursWorked", header: "Giờ công", sortable: true, className: "text-right", render: (t) => <span>{t.hoursWorked}</span> },
  { key: "otHours", header: "Tăng ca", className: "text-right", render: (t) => <span className="text-muted-foreground">{t.otHours}h</span> },
  { key: "late", header: "Đi muộn", sortable: true, className: "text-right", render: (t) => <span className={t.late > 0 ? "font-medium text-destructive" : "text-muted-foreground"}>{t.late}</span> },
  { key: "earlyLeave", header: "Về sớm", className: "text-right", render: (t) => <span className="text-muted-foreground">{t.earlyLeave}</span> },
  { key: "absence", header: "Vắng", className: "text-right", render: (t) => <span className={t.absence > 0 ? "font-medium text-destructive" : "text-muted-foreground"}>{t.absence}</span> },
];

export default function BangChamCongPage() {
  return (
    <AdminListPage<TimeSheetRow>
      title="Bảng chấm công"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <CalendarCheck className="h-4 w-4" />
          Xuất bảng chấm công
        </button>
      }
      fetcher={(params) => adminApi.employees.timesheets(params)}
      columns={COLUMNS}
      rowKey={(t) => t.id}
      searchKeys={["code", "name"]}
      searchPlaceholder="Tìm theo mã NV, tên nhân viên..."
      exportFilename="bang-cham-cong"
      minWidth={900}
    />
  );
}
