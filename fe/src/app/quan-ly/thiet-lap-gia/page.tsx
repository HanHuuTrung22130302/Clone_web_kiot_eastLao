"use client";

import { Plus, Tags } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { adminApi } from "@/lib/admin-api/services";
import type { PriceBook } from "@/data/admin/warranty";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";

const COLUMNS: Column<PriceBook>[] = [
  { key: "name", header: "Bảng giá", sortable: true, render: (p) => (
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Tags className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="font-medium text-foreground">{p.name}</p>
          <p className="text-[11px] text-muted-foreground">{p.productCount} sản phẩm</p>
        </div>
      </div>
    ) },
  { key: "description", header: "Mô tả", render: (p) => <span className="max-w-[280px] truncate text-muted-foreground">{p.description}</span> },
  { key: "priority", header: "Thứ tự ưu tiên", sortable: true, className: "text-right", render: (p) => <span>{p.priority}</span> },
  { key: "updatedAt", header: "Cập nhật", sortable: true, render: (p) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(p.updatedAt)}</span> },
  { key: "applyAll", header: "Áp dụng", render: (p) => (
      <span className={cn("rounded-full px-2.5 py-1 text-[12px] font-medium", p.applyAll ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")}>
        {p.applyAll ? "Toàn bộ khách hàng" : "Theo nhóm khách hàng"}
      </span>
    ) },
];

export default function ThietLapGiaPage() {
  return (
    <AdminListPage<PriceBook>
      title="Thiết lập giá"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Tạo bảng giá
        </button>
      }
      fetcher={(params) => adminApi.warranties.priceBooks(params)}
      columns={COLUMNS}
      rowKey={(p) => p.id}
      searchKeys={["name"]}
      searchPlaceholder="Tìm theo tên bảng giá..."
      exportFilename="danh-sach-bang-gia"
      minWidth={900}
    />
  );
}
