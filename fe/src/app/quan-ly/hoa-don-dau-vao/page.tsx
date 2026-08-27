"use client";

import { Plus } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { PurchaseEInvoice } from "@/data/admin/purchasing";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<PurchaseEInvoice>[] = [
  { key: "code", header: "Mã hóa đơn đầu vào", sortable: true, render: (e) => <span className="font-medium text-primary">{e.code}</span> },
  { key: "createdAt", header: "Thời gian", sortable: true, render: (e) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(e.createdAt)}</span> },
  { key: "supplier", header: "Nhà cung cấp", sortable: true, render: (e) => <span className="max-w-[220px] truncate text-foreground/90">{e.supplier}</span> },
  { key: "amount", header: "Tiền hàng", className: "text-right", render: (e) => <span>{formatVND(e.amount)}</span> },
  { key: "tax", header: "Thuế", className: "text-right", render: (e) => <span className="text-muted-foreground">{formatVND(e.tax)}</span> },
  { key: "total", header: "Tổng tiền", sortable: true, className: "text-right", render: (e) => <span className="font-semibold text-foreground">{formatVND(e.total)}</span> },
  { key: "status", header: "Trạng thái", render: (e) => <StatusBadge label={e.status} /> },
];

export default function HoaDonDauVaoPage() {
  return (
    <AdminListPage<PurchaseEInvoice>
      title="Hóa đơn đầu vào"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Thêm hóa đơn
        </button>
      }
      fetcher={(params) => adminApi.purchasing.einvoices(params)}
      columns={COLUMNS}
      rowKey={(e) => e.id}
      chips={[{ label: "Đã khớp" }, { label: "Chưa khớp" }]}
      chipFilter={(e, chip) => e.status === chip}
      searchKeys={["code", "supplier"]}
      searchPlaceholder="Tìm theo mã hóa đơn, nhà cung cấp..."
      exportFilename="danh-sach-hoa-don-dau-vao"
      minWidth={1000}
    />
  );
}
