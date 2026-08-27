"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { FilterBar, FilterSelect } from "@/components/admin/filter-bar";
import { DataTable, type Column } from "@/components/admin/data-table";
import { StatusBadge } from "@/components/admin/status-badge";
import { useAdminList } from "@/lib/admin-api/use-admin-list";
import { adminApi } from "@/lib/admin-api/services";
import type { Invoice } from "@/data/admin/invoices";
import { formatVND } from "@/lib/admin-api/format";

const COLUMNS: Column<Invoice>[] = [
  { key: "code", header: "Mã hóa đơn", sortable: true, render: (i) => <span className="font-medium text-primary">{i.code}</span> },
  { key: "createdAt", header: "Thời gian", sortable: true, render: (i) => <span className="whitespace-nowrap text-muted-foreground">{i.createdAt.slice(0, 16).replace("T", " ")}</span> },
  { key: "customer", header: "Khách hàng", sortable: true, render: (i) => (
      <div className="min-w-0">
        <p className="truncate font-medium text-foreground">{i.customer}</p>
        <p className="text-[11px] text-muted-foreground">{i.phone}</p>
      </div>
    ) },
  { key: "creator", header: "Người bán", render: (i) => <span className="text-muted-foreground">{i.creator}</span> },
  { key: "channel", header: "Kênh bán", render: (i) => <span className="whitespace-nowrap text-muted-foreground">{i.channel}</span> },
  { key: "paymentMethod", header: "Thanh toán", render: (i) => <span className="whitespace-nowrap text-muted-foreground">{i.paymentMethod}</span> },
  { key: "total", header: "Tổng tiền", sortable: true, className: "text-right", sortValue: (i) => i.total, render: (i) => <span className="font-semibold text-foreground">{formatVND(i.total)}</span> },
  { key: "status", header: "Trạng thái", render: (i) => <StatusBadge label={i.status} /> },
];

export default function HoaDonPage() {
  const list = useAdminList<Invoice>(
    (params) => adminApi.invoices.list(params),
    {
      chips: [
        { label: "Đã thanh toán" },
        { label: "Chưa thanh toán" },
        { label: "Đã hủy" },
      ],
      chipFilter: (i, chip) => i.status === chip,
      selectFilters: [
        { key: "branch", options: [], matches: (i, v) => i.branch === v },
        { key: "creator", options: [], matches: (i, v) => i.creator === v },
        { key: "channel", options: [], matches: (i, v) => i.channel === v },
      ],
      fetchOptions: async () => ({
        branch: await adminApi.orders.branches(),
        creator: await adminApi.orders.creators(),
        channel: await adminApi.orders.channels(),
      }),
    }
  );

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[20px] font-bold tracking-tight text-foreground">Hóa đơn</h1>
        <Link href="/ban-hang" className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Tạo hóa đơn
        </Link>
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
        <FilterSelect label="Người bán" options={list.optionMap.creator ?? []} value={list.filters.creator ?? ""} onChange={(v) => list.setFilters((f) => ({ ...f, creator: v }))} />
        <FilterSelect label="Kênh bán" options={list.optionMap.channel ?? []} value={list.filters.channel ?? ""} onChange={(v) => list.setFilters((f) => ({ ...f, channel: v }))} />
      </FilterBar>

      <DataTable
        columns={COLUMNS}
        data={list.rows}
        rowKey={(i) => i.id}
        loading={list.loading}
        selectable
        searchPlaceholder="Tìm theo mã hóa đơn, khách hàng, SĐT..."
        searchKeys={["code", "customer", "phone", "creator"]}
        exportable
        exportFilename="danh-sach-hoa-don"
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
