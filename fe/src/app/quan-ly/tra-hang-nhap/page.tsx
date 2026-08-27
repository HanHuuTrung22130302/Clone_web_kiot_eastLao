"use client";

import { Plus, Undo2 } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { PurchaseReturn } from "@/data/admin/purchasing";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<PurchaseReturn>[] = [
  { key: "code", header: "Mã trả hàng nhập", sortable: true, render: (r) => <span className="font-medium text-primary">{r.code}</span> },
  { key: "purchaseCode", header: "Mã nhập hàng", render: (r) => <span className="text-muted-foreground">{r.purchaseCode}</span> },
  { key: "createdAt", header: "Thời gian", sortable: true, render: (r) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(r.createdAt)}</span> },
  { key: "supplier", header: "Nhà cung cấp", sortable: true, render: (r) => <span className="max-w-[200px] truncate text-foreground/90">{r.supplier}</span> },
  { key: "returner", header: "Người trả", render: (r) => <span className="text-muted-foreground">{r.returner}</span> },
  { key: "qty", header: "SL", className: "text-right", render: (r) => <span>{r.qty}</span> },
  { key: "supplierPays", header: "NCC cần trả", sortable: true, className: "text-right", render: (r) => <span className="font-semibold text-foreground">{formatVND(r.supplierPays)}</span> },
  { key: "status", header: "Trạng thái", render: (r) => <StatusBadge label={r.status} /> },
];

export default function TraHangNhapPage() {
  return (
    <AdminListPage<PurchaseReturn>
      title="Trả hàng nhập"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Undo2 className="h-4 w-4" />
          Tạo phiếu trả
        </button>
      }
      fetcher={(params) => adminApi.purchasing.returns(params)}
      columns={COLUMNS}
      rowKey={(r) => r.id}
      chips={[{ label: "Phiếu tạm" }, { label: "Đã xác nhận" }, { label: "Đã hủy" }]}
      chipFilter={(r, chip) => r.status === chip}
      searchKeys={["code", "purchaseCode", "supplier", "creator"]}
      searchPlaceholder="Tìm theo mã phiếu, nhà cung cấp..."
      exportFilename="danh-sach-tra-hang-nhap"
      minWidth={1080}
    />
  );
}
