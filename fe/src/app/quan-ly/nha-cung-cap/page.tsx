"use client";

import { Plus, Truck } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { Supplier } from "@/data/admin/suppliers";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";

const COLUMNS: Column<Supplier>[] = [
  { key: "code", header: "Mã NCC", sortable: true, render: (s) => <span className="font-medium text-primary">{s.code}</span> },
  { key: "name", header: "Nhà cung cấp", sortable: true, render: (s) => (
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-muted/60 text-muted-foreground">
          <Truck className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="max-w-[220px] truncate font-medium text-foreground">{s.name}</p>
          <p className="text-[11px] text-muted-foreground">{s.phone}</p>
        </div>
      </div>
    ) },
  { key: "group", header: "Nhóm NCC", render: (s) => <span className="whitespace-nowrap text-muted-foreground">{s.group}</span> },
  { key: "debt", header: "Nợ cần trả", sortable: true, className: "text-right", render: (s) => (
      <span className={cn(s.debt > 0 ? "font-semibold text-destructive" : "text-muted-foreground")}>{formatVND(s.debt)}</span>
    ) },
  { key: "totalPurchased", header: "Tổng mua", sortable: true, className: "text-right", render: (s) => <span className="text-foreground">{formatVND(s.totalPurchased)}</span> },
  { key: "createdAt", header: "Ngày tạo", sortable: true, render: (s) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(s.createdAt)}</span> },
  { key: "status", header: "Trạng thái", render: (s) => <StatusBadge label={s.status} /> },
];

export default function NhaCungCapPage() {
  return (
    <AdminListPage<Supplier>
      title="Nhà cung cấp"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Thêm nhà cung cấp
        </button>
      }
      fetcher={(params) => adminApi.suppliers.list(params)}
      columns={COLUMNS}
      rowKey={(s) => s.id}
      chips={[{ label: "Đang hợp tác" }, { label: "Ngừng hợp tác" }]}
      chipFilter={(s, chip) => s.status === chip}
      selectFilters={[{ key: "group", label: "Nhóm nhà cung cấp", options: [] }]}
      optionsFetcher={async () => ({ group: await adminApi.suppliers.groups() })}
      searchKeys={["code", "name", "phone", "group", "company"]}
      searchPlaceholder="Tìm theo tên, mã, SĐT nhà cung cấp..."
      exportFilename="danh-sach-nha-cung-cap"
      minWidth={1080}
    />
  );
}
