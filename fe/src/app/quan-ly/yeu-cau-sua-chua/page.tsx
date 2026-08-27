"use client";

import { Wrench } from "lucide-react";
import { FilterBar, FilterSelect } from "@/components/admin/filter-bar";
import { DataTable, type Column } from "@/components/admin/data-table";
import { StatusBadge } from "@/components/admin/status-badge";
import { useAdminList } from "@/lib/admin-api/use-admin-list";
import { adminApi } from "@/lib/admin-api/services";
import type { OrderWarranty } from "@/data/admin/warranty";
import { formatDateTime, formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<OrderWarranty>[] = [
  { key: "code", header: "Mã yêu cầu", sortable: true, render: (w) => <span className="font-medium text-primary">{w.code}</span> },
  { key: "createdAt", header: "Thời gian tạo", sortable: true, render: (w) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(w.createdAt)}</span> },
  { key: "customer", header: "Khách hàng", sortable: true, render: (w) => (
      <div className="min-w-0">
        <p className="truncate font-medium text-foreground">{w.customer}</p>
        <p className="text-[11px] text-muted-foreground">{w.phone}</p>
      </div>
    ) },
  { key: "creator", header: "Người tạo", render: (w) => <span className="text-muted-foreground">{w.creator}</span> },
  { key: "receiver", header: "Người nhận", render: (w) => <span className="text-muted-foreground">{w.receiver}</span> },
  { key: "branch", header: "Chi nhánh", render: (w) => <span className="whitespace-nowrap text-muted-foreground">{w.branch}</span> },
  { key: "customerPays", header: "Khách cần trả", sortable: true, className: "text-right", sortValue: (w) => w.customerPays, render: (w) => <span className="font-semibold text-foreground">{formatVND(w.customerPays)}</span> },
  { key: "customerPaid", header: "Đã trả", className: "text-right", render: (w) => <span className="text-muted-foreground">{formatVND(w.customerPaid)}</span> },
  { key: "status", header: "Trạng thái", render: (w) => <StatusBadge label={w.status} /> },
];

export default function YeuCauSuaChuaPage() {
  const list = useAdminList<OrderWarranty>(
    (params) => adminApi.warranties.orderWarranties(params),
    {
      chips: [
        { label: "Chờ tiếp nhận" },
        { label: "Đang sửa chữa" },
        { label: "Hoàn thành" },
        { label: "Đã trả" },
        { label: "Đã hủy" },
      ],
      chipFilter: (w, chip) => w.status === chip,
      selectFilters: [
        { key: "creator", options: [], matches: (w, v) => w.creator === v },
        { key: "branch", options: [], matches: (w, v) => w.branch === v },
      ],
      fetchOptions: async () => ({
        creator: await adminApi.orders.creators(),
        branch: await adminApi.orders.branches(),
      }),
    }
  );

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[20px] font-bold tracking-tight text-foreground">Yêu cầu sửa chữa</h1>
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Wrench className="h-4 w-4" />
          Tiếp nhận yêu cầu
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
        rowKey={(w) => w.id}
        loading={list.loading}
        selectable
        searchPlaceholder="Tìm theo mã yêu cầu, khách hàng, SĐT..."
        searchKeys={["code", "customer", "phone", "creator"]}
        exportable
        exportFilename="danh-sach-yeu-cau-sua-chua"
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