"use client";

import { FileSpreadsheet } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { adminApi } from "@/lib/admin-api/services";
import { paginate } from "@/lib/admin-api/http";
import { formatVND, formatNumber } from "@/lib/admin-api/format";
import type { ChannelReportRow } from "@/data/admin/reports";
import type { Column } from "@/components/admin/data-table";

const COLUMNS: Column<ChannelReportRow>[] = [
  { key: "channel", header: "Kênh bán hàng", sortable: true, render: (r) => <span className="font-medium text-foreground">{r.channel}</span> },
  { key: "orders", header: "Số đơn", sortable: true, className: "text-right", render: (r) => <span>{formatNumber(r.orders)}</span> },
  { key: "qty", header: "Số lượng", className: "text-right", render: (r) => <span className="text-muted-foreground">{formatNumber(r.qty)}</span> },
  { key: "revenue", header: "Doanh thu", sortable: true, className: "text-right", render: (r) => <span className="font-semibold text-foreground">{formatVND(r.revenue)}</span> },
  {
    key: "ratio",
    header: "Tỷ trọng",
    className: "w-[200px]",
    render: (r) => (
      <div className="flex items-center gap-2.5">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-primary" style={{ width: `${r.ratio}%` }} />
        </div>
        <span className="w-10 text-right text-[12px] font-medium text-muted-foreground">{r.ratio}%</span>
      </div>
    ),
  },
];

export default function BaoCaoKenhBanHangPage() {
  return (
    <AdminListPage<ChannelReportRow>
      title="Báo cáo kênh bán hàng"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <FileSpreadsheet className="h-4 w-4" />
          Xuất file
        </button>
      }
      fetcher={(params) => adminApi.reports.channels().then((d) => paginate(d, params))}
      columns={COLUMNS}
      rowKey={(r) => r.id}
      searchKeys={["channel"]}
      searchPlaceholder="Tìm theo kênh bán hàng..."
      exportFilename="bao-cao-kenh-ban-hang"
      minWidth={850}
    />
  );
}
