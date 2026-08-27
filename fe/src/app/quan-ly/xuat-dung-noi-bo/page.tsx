"use client";

import { Plus } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { InternalUse } from "@/data/admin/warehouse";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<InternalUse>[] = [
  { key: "code", header: "Mã phiếu", sortable: true, render: (i) => <span className="font-medium text-primary">{i.code}</span> },
  { key: "type", header: "Loại xuất", render: (i) => <span className="whitespace-nowrap text-muted-foreground">{i.type}</span> },
  { key: "createdAt", header: "Thời gian", sortable: true, render: (i) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(i.createdAt)}</span> },
  { key: "creator", header: "Người tạo", render: (i) => <span className="text-muted-foreground">{i.creator}</span> },
  { key: "issuer", header: "Người xuất", render: (i) => <span className="text-muted-foreground">{i.issuer}</span> },
  { key: "receiver", header: "Người nhận", render: (i) => <span className="text-muted-foreground">{i.receiver}</span> },
  { key: "totalValue", header: "Tổng giá trị", sortable: true, className: "text-right", render: (i) => <span className="font-semibold text-foreground">{formatVND(i.totalValue)}</span> },
  { key: "status", header: "Trạng thái", render: (i) => <StatusBadge label={i.status} /> },
];

export default function XuatDungNoiBoPage() {
  return (
    <AdminListPage<InternalUse>
      title="Xuất dùng nội bộ"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Tạo phiếu xuất
        </button>
      }
      fetcher={(params) => adminApi.warehouse.internalUses(params)}
      columns={COLUMNS}
      rowKey={(i) => i.id}
      chips={[{ label: "Phiếu tạm" }, { label: "Đã xác nhận" }, { label: "Đã hủy" }]}
      chipFilter={(i, chip) => i.status === chip}
      searchKeys={["code", "type", "creator", "note"]}
      searchPlaceholder="Tìm theo mã phiếu, người tạo..."
      exportFilename="danh-sach-xuat-dung-noi-bo"
      minWidth={1000}
    />
  );
}
