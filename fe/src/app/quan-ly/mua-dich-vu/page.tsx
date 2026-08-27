"use client";

import { Plus, Briefcase } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { ServicePurchase } from "@/data/admin/purchasing";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<ServicePurchase>[] = [
  { key: "code", header: "Mã phiếu", sortable: true, render: (s) => <span className="font-medium text-primary">{s.code}</span> },
  { key: "createdAt", header: "Thời gian", sortable: true, render: (s) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(s.createdAt)}</span> },
  { key: "supplier", header: "Nhà cung cấp", sortable: true, render: (s) => <span className="max-w-[220px] truncate text-foreground/90">{s.supplier}</span> },
  { key: "branch", header: "Chi nhánh", render: (s) => <span className="whitespace-nowrap text-muted-foreground">{s.branch}</span> },
  { key: "note", header: "Nội dung", render: (s) => <span className="max-w-[220px] truncate text-muted-foreground">{s.note}</span> },
  { key: "amount", header: "Tổng tiền", sortable: true, className: "text-right", render: (s) => <span className="font-semibold text-foreground">{formatVND(s.amount)}</span> },
  { key: "status", header: "Trạng thái", render: (s) => <StatusBadge label={s.status} /> },
];

export default function MuaDichVuPage() {
  return (
    <AdminListPage<ServicePurchase>
      title="Mua dịch vụ"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Briefcase className="h-4 w-4" />
          Thêm phiếu mua dịch vụ
        </button>
      }
      fetcher={(params) => adminApi.purchasing.services(params)}
      columns={COLUMNS}
      rowKey={(s) => s.id}
      chips={[{ label: "Phiếu tạm" }, { label: "Đã xác nhận" }, { label: "Đã hủy" }]}
      chipFilter={(s, chip) => s.status === chip}
      searchKeys={["code", "supplier", "note", "creator"]}
      searchPlaceholder="Tìm theo mã phiếu, nhà cung cấp..."
      exportFilename="danh-sach-mua-dich-vu"
      minWidth={1000}
    />
  );
}
