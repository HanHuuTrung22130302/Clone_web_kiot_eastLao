"use client";

import { Plus } from "lucide-react";
import { FilterBar, FilterSelect } from "@/components/admin/filter-bar";
import { DataTable, type Column } from "@/components/admin/data-table";
import { StatusBadge } from "@/components/admin/status-badge";
import { useAdminList } from "@/lib/admin-api/use-admin-list";
import { adminApi } from "@/lib/admin-api/services";
import type { Order } from "@/data/admin/orders";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<Order>[] = [
  { key: "code", header: "Mã đặt hàng", sortable: true, render: (o) => <span className="font-medium text-primary">{o.code}</span> },
  { key: "invoiceCode", header: "Mã hóa đơn", render: (o) => <span className="text-foreground/80">{o.invoiceCode}</span> },
  { key: "createdAt", header: "Thời gian tạo", sortable: true, render: (o) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(o.createdAt)}</span> },
  { key: "customer", header: "Khách hàng", sortable: true, render: (o) => (
      <div className="min-w-0">
        <p className="truncate font-medium text-foreground">{o.customer}</p>
        <p className="text-[11px] text-muted-foreground">{o.phone}</p>
      </div>
    ) },
  { key: "channel", header: "Kênh bán", render: (o) => <span className="whitespace-nowrap text-muted-foreground">{o.channel}</span> },
  { key: "partnerDelivery", header: "Đối tác giao hàng", render: (o) => <span className="whitespace-nowrap text-muted-foreground">{o.partnerDelivery}</span> },
  { key: "total", header: "Tổng tiền", sortable: true, className: "text-right", sortValue: (o) => o.total, render: (o) => <span className="font-semibold text-foreground">{formatVND(o.total)}</span> },
  { key: "status", header: "Trạng thái", render: (o) => <StatusBadge label={o.status} /> },
];

export default function DonHangPage() {
  const list = useAdminList<Order>(
    (params) => adminApi.orders.list(params),
    {
      chips: [
        { label: "Phiếu tạm" },
        { label: "Đã xác nhận" },
        { label: "Đang giao hàng" },
        { label: "Hoàn thành" },
        { label: "Đã hủy" },
      ],
      chipFilter: (o, chip) => o.status === chip,
      selectFilters: [
        { key: "channel", options: [], matches: (o, v) => o.channel === v },
        { key: "partner", options: [], matches: (o, v) => o.partnerDelivery === v },
        { key: "branch", options: [], matches: (o, v) => o.branch === v },
      ],
      fetchOptions: async () => ({
        channel: await adminApi.orders.channels(),
        partner: await adminApi.orders.deliveryPartners(),
        branch: await adminApi.orders.branches(),
      }),
    }
  );

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[20px] font-bold tracking-tight text-foreground">Đặt hàng</h1>
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Thêm đơn đặt hàng
        </button>
      </div>

      <FilterBar
        chips={list.chips}
        activeChip={list.activeChip}
        onChipClick={(label) => {
          list.setActiveChip(list.activeChip === label ? "" : label);
          list.setPage(1);
        }}
        onReset={() => {
          list.setActiveChip("");
          list.setFilters({});
          list.setKeyword("");
          list.setPage(1);
        }}
      >
        <FilterSelect label="Chi nhánh xử lý" allLabel="Tất cả chi nhánh" options={list.optionMap.branch ?? []} value={list.filters.branch ?? ""} onChange={(v) => list.setFilters((f) => ({ ...f, branch: v }))} />
        <FilterSelect label="Kênh bán" options={list.optionMap.channel ?? []} value={list.filters.channel ?? ""} onChange={(v) => list.setFilters((f) => ({ ...f, channel: v }))} />
        <FilterSelect label="Đối tác giao hàng" options={list.optionMap.partner ?? []} value={list.filters.partner ?? ""} onChange={(v) => list.setFilters((f) => ({ ...f, partner: v }))} />
      </FilterBar>

      <DataTable
        columns={COLUMNS}
        data={list.rows}
        rowKey={(o) => o.id}
        loading={list.loading}
        selectable
        searchPlaceholder="Tìm theo mã đơn, khách hàng, SĐT..."
        searchKeys={["code", "invoiceCode", "customer", "phone"]}
        exportable
        exportFilename="danh-sach-dat-hang"
        minWidth={1080}
        page={list.page}
        pageSize={list.pageSize}
        total={list.total}
        onPageChange={list.setPage}
        onPageSizeChange={(s) => {
          list.setPageSize(s);
          list.setPage(1);
        }}
      />
    </div>
  );
}
