"use client";

import { FileSpreadsheet } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { OrderReportRow } from "@/data/admin/reports";
import type { Column } from "@/components/admin/data-table";
import { formatDate, formatNumber, formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<OrderReportRow>[] = [
  { key: "time", header: "Ngày", sortable: true, render: (r) => <span className="whitespace-nowrap text-muted-foreground">{formatDate(r.time)}</span> },
  { key: "status", header: "Trạng thái", render: (r) => <StatusBadge label={r.status} /> },
  { key: "code", header: "Quầy bán / Mã", sortable: true, render: (r) => <span className="font-medium text-primary">{r.code}</span> },
  { key: "totalOrders", header: "Số đơn", sortable: true, className: "text-right", render: (r) => <span>{formatNumber(r.totalOrders)}</span> },
  { key: "totalQty", header: "Số lượng", sortable: true, className: "text-right", render: (r) => <span>{formatNumber(r.totalQty)}</span> },
  { key: "totalValue", header: "Số tiền", sortable: true, className: "text-right", render: (r) => <span className="font-semibold text-foreground">{formatVND(r.totalValue)}</span> },
];

export default function BaoCaoDatHangPage() {
  return (
    <AdminListPage<OrderReportRow>
      title="Báo cáo đặt hàng"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <FileSpreadsheet className="h-4 w-4" />
          Xuất file
        </button>
      }
      fetcher={(params) => adminApi.reports.orders(params)}
      columns={COLUMNS}
      rowKey={(r) => r.id}
      chips={[{ label: "Tất cả" }, { label: "Đang giao hàng" }, { label: "Đã xác nhận" }, { label: "Hoàn thành" }]}
      chipFilter={(r, chip) => chip === "Tất cả" || r.status === chip}
      searchKeys={["code", "status"]}
      searchPlaceholder="Tìm theo mã, trạng thái..."
      exportFilename="bao-cao-dat-hang"
      minWidth={900}
    />
  );
}
