"use client";

import { Plus } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { DamageItem } from "@/data/admin/warehouse";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<DamageItem>[] = [
  { key: "code", header: "Mã xuất hủy", sortable: true, render: (d) => <span className="font-medium text-primary">{d.code}</span> },
  { key: "createdAt", header: "Thời gian", sortable: true, render: (d) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(d.createdAt)}</span> },
  { key: "creator", header: "Người tạo", render: (d) => <span className="text-muted-foreground">{d.creator}</span> },
  { key: "branch", header: "Chi nhánh", render: (d) => <span className="whitespace-nowrap text-muted-foreground">{d.branch}</span> },
  { key: "note", header: "Ghi chú", render: (d) => <span className="max-w-[200px] truncate text-muted-foreground">{d.note}</span> },
  { key: "totalValue", header: "Tổng giá trị", sortable: true, className: "text-right", render: (d) => <span className="font-semibold text-foreground">{formatVND(d.totalValue)}</span> },
  { key: "status", header: "Trạng thái", render: (d) => <StatusBadge label={d.status} /> },
];

export default function XuatHuyPage() {
  return (
    <AdminListPage<DamageItem>
      title="Xuất hủy"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Tạo phiếu xuất hủy
        </button>
      }
      fetcher={(params) => adminApi.warehouse.damageItems(params)}
      columns={COLUMNS}
      rowKey={(d) => d.id}
      chips={[{ label: "Phiếu tạm" }, { label: "Đã xác nhận" }, { label: "Đã hủy" }]}
      chipFilter={(d, chip) => d.status === chip}
      searchKeys={["code", "creator", "note"]}
      searchPlaceholder="Tìm theo mã phiếu, ghi chú..."
      exportFilename="danh-sach-xuat-huy"
      minWidth={1000}
    />
  );
}
