"use client";

import { Plus } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { adminApi } from "@/lib/admin-api/services";
import type { Customer } from "@/data/admin/customers";
import type { Column } from "@/components/admin/data-table";
import { formatVND } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";

const COLUMNS: Column<Customer>[] = [
  { key: "code", header: "Mã KH", sortable: true, render: (c) => <span className="font-medium text-primary">{c.code}</span> },
  { key: "name", header: "Khách hàng", sortable: true, render: (c) => (
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-[13px] font-bold text-primary">
          {c.name.charAt(0).toUpperCase()}
        </span>
        <div className="min-w-0">
          <p className="max-w-[200px] truncate font-medium text-foreground">{c.name}</p>
          <p className="text-[11px] text-muted-foreground">{c.group} · {c.type}</p>
        </div>
      </div>
    ) },
  { key: "phone", header: "Số điện thoại", render: (c) => <span className="whitespace-nowrap text-muted-foreground">{c.phone}</span> },
  { key: "totalSpent", header: "Tổng chi tiêu", sortable: true, className: "text-right", render: (c) => <span className="font-semibold text-foreground">{formatVND(c.totalSpent)}</span> },
  { key: "debt", header: "Công nợ", sortable: true, className: "text-right", render: (c) => (
      <span className={cn(c.debt > 0 ? "font-semibold text-destructive" : "text-muted-foreground")}>{formatVND(c.debt)}</span>
    ) },
  { key: "orders", header: "Số đơn", sortable: true, className: "text-right", render: (c) => <span>{c.orders}</span> },
  { key: "lastTransaction", header: "Giao dịch cuối", render: (c) => <span className="whitespace-nowrap text-muted-foreground">{c.lastTransaction.slice(0, 10)}</span> },
];

export default function KhachHangPage() {
  return (
    <AdminListPage<Customer>
      title="Khách hàng"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Thêm khách hàng
        </button>
      }
      fetcher={(params) => adminApi.customers.list(params)}
      columns={COLUMNS}
      rowKey={(c) => c.id}
      selectFilters={[{ key: "group", label: "Nhóm khách hàng", options: [] }]}
      optionsFetcher={async () => ({ group: await adminApi.customers.groups() })}
      searchKeys={["code", "name", "phone", "group", "email"]}
      searchPlaceholder="Tìm theo tên, SĐT, mã khách hàng..."
      exportFilename="danh-sach-khach-hang"
      minWidth={1080}
    />
  );
}
