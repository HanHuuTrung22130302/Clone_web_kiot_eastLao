"use client";

import { Plus } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { PurchaseOrder } from "@/data/admin/purchasing";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<PurchaseOrder>[] = [
  { key: "code", header: "Mã nhập hàng", sortable: true, render: (p) => <span className="font-medium text-primary">{p.code}</span> },
  { key: "createdAt", header: "Thời gian", sortable: true, render: (p) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(p.createdAt)}</span> },
  { key: "supplier", header: "Nhà cung cấp", sortable: true, render: (p) => <span className="max-w-[220px] truncate text-foreground/90">{p.supplier}</span> },
  { key: "branch", header: "Chi nhánh", render: (p) => <span className="whitespace-nowrap text-muted-foreground">{p.branch}</span> },
  { key: "creator", header: "Người tạo", render: (p) => <span className="text-muted-foreground">{p.creator}</span> },
  { key: "qty", header: "Số lượng", className: "text-right", render: (p) => <span>{p.qty}</span> },
  { key: "itemCount", header: "Mặt hàng", className: "text-right", render: (p) => <span className="text-muted-foreground">{p.itemCount}</span> },
  { key: "total", header: "Tổng tiền", sortable: true, className: "text-right", render: (p) => <span className="font-semibold text-foreground">{formatVND(p.total)}</span> },
  { key: "status", header: "Trạng thái", render: (p) => <StatusBadge label={p.status} /> },
];

export default function NhapHangPage() {
  return (
    <AdminListPage<PurchaseOrder>
      title="Nhập hàng"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Tạo phiếu nhập
        </button>
      }
      fetcher={(params) => adminApi.purchasing.orders(params)}
      columns={COLUMNS}
      rowKey={(p) => p.id}
      chips={[{ label: "Phiếu tạm" }, { label: "Đã xác nhận" }, { label: "Đã nhập hàng" }, { label: "Đã hủy" }]}
      chipFilter={(p, chip) => p.status === chip}
      searchKeys={["code", "supplier", "note", "creator"]}
      searchPlaceholder="Tìm theo mã nhập hàng, nhà cung cấp..."
      exportFilename="danh-sach-nhap-hang"
      minWidth={1100}
    />
  );
}
