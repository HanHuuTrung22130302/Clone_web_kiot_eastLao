"use client";

import { Plus } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { Employee } from "@/data/admin/employees";
import type { Column } from "@/components/admin/data-table";
import { formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<Employee>[] = [
  { key: "username", header: "Tên đăng nhập", sortable: true, render: (e) => <span className="font-medium text-primary">{e.username}</span> },
  { key: "name", header: "Nhân viên", sortable: true, render: (e) => (
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-[13px] font-bold text-primary">
          {e.name.charAt(0).toUpperCase()}
        </span>
        <div className="min-w-0">
          <p className="max-w-[200px] truncate font-medium text-foreground">{e.name}</p>
          <p className="text-[11px] text-muted-foreground">{e.phone} · {e.email}</p>
        </div>
      </div>
    ) },
  { key: "role", header: "Chức vụ", render: (e) => <span className="whitespace-nowrap text-muted-foreground">{e.role}</span> },
  { key: "branch", header: "Chi nhánh", render: (e) => <span className="whitespace-nowrap text-muted-foreground">{e.branch}</span> },
  { key: "salary", header: "Lương", sortable: true, className: "text-right", render: (e) => <span>{e.salary > 0 ? formatVND(e.salary) : "—"}</span> },
  { key: "startDate", header: "Ngày bắt đầu", render: (e) => <span className="whitespace-nowrap text-muted-foreground">{e.startDate}</span> },
  { key: "status", header: "Trạng thái", render: (e) => <StatusBadge label={e.status} /> },
];

export default function NhanVienPage() {
  return (
    <AdminListPage<Employee>
      title="Nhân viên"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Thêm nhân viên
        </button>
      }
      fetcher={(params) => adminApi.employees.list(params)}
      columns={COLUMNS}
      rowKey={(e) => e.id}
      chips={[{ label: "Đang làm việc" }, { label: "Nghỉ việc" }]}
      chipFilter={(e, chip) => e.status === chip}
      searchKeys={["username", "name", "phone", "email", "role"]}
      searchPlaceholder="Tìm theo tên, SĐT, email, chức vụ..."
      exportFilename="danh-sach-nhan-vien"
      minWidth={1080}
    />
  );
}
