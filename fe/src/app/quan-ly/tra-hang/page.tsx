"use client";

import { Undo2 } from "lucide-react";
import { FilterBar, FilterSelect } from "@/components/admin/filter-bar";
import { DataTable, type Column } from "@/components/admin/data-table";
import { StatusBadge } from "@/components/admin/status-badge";
import { useAdminList } from "@/lib/admin-api/use-admin-list";
import { adminApi } from "@/lib/admin-api/services";
import type { Return } from "@/data/admin/returns";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<Return>[] = [
  { key: "code", header: "Mã trả hàng", sortable: true, render: (r) => <span className="font-medium text-primary">{r.code}</span> },
  { key: "invoiceCode", header: "Mã hóa đơn", render: (r) => <span className="text-muted-foreground">{r.invoiceCode}</span> },
  { key: "createdAt", header: "Thời gian", sortable: true, render: (r) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(r.createdAt)}</span> },
  { key: "customer", header: "Khách hàng", sortable: true, render: (r) => (
      <div className="min-w-0">
        <p className="truncate font-medium text-foreground">{r.customer}</p>
        <p className="text-[11px] text-muted-foreground">{r.phone}</p>
      </div>
    ) },
  { key: "creator", header: "Người trả", render: (r) => <span className="text-muted-foreground">{r.creator}</span> },
  { key: "refundMethod", header: "Hoàn tiền", render: (r) => <span className="whitespace-nowrap text-muted-foreground">{r.refundMethod}</span> },
  { key: "total", header: "Tổng tiền", sortable: true, className: "text-right", sortValue: (r) => r.total, render: (r) => <span className="font-semibold text-foreground">{formatVND(r.total)}</span> },
  { key: "status", header: "Trạng thái", render: (r) => <StatusBadge label={r.status} /> },
];

export default function TraHangPage() {
  const list = useAdminList<Return>(
    (params) => adminApi.returns.list(params),
    {
      chips: [
        { label: "Phiếu tạm" },
        { label: "Đã xác nhận" },
        { label: "Đã hủy" },
      ],
      chipFilter: (r, chip) => r.status === chip,
      selectFilters: [
        { key: "branch", options: [], matches: (r, v) => r.branch === v },
        { key: "creator", options: [], matches: (r, v) => r.creator === v },
      ],
      fetchOptions: async () => ({
        branch: await adminApi.orders.branches(),
        creator: await adminApi.orders.creators(),
      }),
    }
  );

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[20px] font-bold tracking-tight text-foreground">Trả hàng</h1>
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Undo2 className="h-4 w-4" />
          Tạo phiếu trả
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
        <FilterSelect label="Chi nhánh" options={list.optionMap.branch ?? []} value={list.filters.branch ?? ""} onChange={(v) => list.setFilters((f) => ({ ...f, branch: v }))} />
        <FilterSelect label="Người tạo" options={list.optionMap.creator ?? []} value={list.filters.creator ?? ""} onChange={(v) => list.setFilters((f) => ({ ...f, creator: v }))} />
      </FilterBar>

      <DataTable
        columns={COLUMNS}
        data={list.rows}
        rowKey={(r) => r.id}
        loading={list.loading}
        selectable
        searchPlaceholder="Tìm theo mã phiếu, hóa đơn, khách hàng..."
        searchKeys={["code", "invoiceCode", "customer", "phone"]}
        exportable
        exportFilename="danh-sach-tra-hang"
        minWidth={1000}
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
