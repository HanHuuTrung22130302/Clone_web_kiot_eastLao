"use client";

import { PackageCheck } from "lucide-react";
import { FilterBar, FilterSelect } from "@/components/admin/filter-bar";
import { DataTable, type Column } from "@/components/admin/data-table";
import { StatusBadge } from "@/components/admin/status-badge";
import { useAdminList } from "@/lib/admin-api/use-admin-list";
import { adminApi } from "@/lib/admin-api/services";
import type { OrderDelivery } from "@/data/admin/deliveries";
import { formatDateTime } from "@/lib/admin-api/format";

const COLUMNS: Column<OrderDelivery>[] = [
  { key: "code", header: "Mã vận đơn", sortable: true, render: (d) => <span className="font-medium text-primary">{d.code}</span> },
  { key: "invoiceCode", header: "Mã hóa đơn", render: (d) => <span className="text-muted-foreground">{d.invoiceCode}</span> },
  { key: "createdAt", header: "Thời gian tạo", sortable: true, render: (d) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(d.createdAt)}</span> },
  { key: "customer", header: "Khách hàng", sortable: true, render: (d) => (
      <div className="min-w-0">
        <p className="truncate font-medium text-foreground">{d.customer}</p>
        <p className="text-[11px] text-muted-foreground">{d.phone}</p>
      </div>
    ) },
  { key: "receiver", header: "Người nhận", render: (d) => <span className="truncate text-muted-foreground">{d.receiver}</span> },
  { key: "partnerDelivery", header: "Đối tác giao hàng", render: (d) => <span className="text-muted-foreground">{d.partnerDelivery}</span> },
  { key: "service", header: "Dịch vụ", render: (d) => <span className="text-muted-foreground">{d.service}</span> },
  { key: "deliveryTime", header: "Thời gian giao", render: (d) => <span className="whitespace-nowrap text-muted-foreground">{d.deliveryTime === "—" ? "—" : formatDateTime(d.deliveryTime)}</span> },
  { key: "status", header: "Trạng thái giao", render: (d) => <StatusBadge label={d.status} /> },
];

export default function VanDonPage() {
  const list = useAdminList<OrderDelivery>(
    (params) => adminApi.deliveries.list(params),
    {
      chips: [
        { label: "Chờ giao" },
        { label: "Đang giao" },
        { label: "Hoàn thành" },
        { label: "Đã hủy" },
      ],
      chipFilter: (d, chip) => d.status === chip,
      selectFilters: [
        { key: "partner", options: [], matches: (d, v) => d.partnerDelivery === v },
        { key: "branch", options: [], matches: (d, v) => d.branch === v },
      ],
      fetchOptions: async () => ({
        partner: await adminApi.orders.deliveryPartners(),
        branch: await adminApi.orders.branches(),
      }),
    }
  );

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[20px] font-bold tracking-tight text-foreground">Vận đơn</h1>
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <PackageCheck className="h-4 w-4" />
          Tạo vận đơn
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
        <FilterSelect label="Đối tác giao hàng" options={list.optionMap.partner ?? []} value={list.filters.partner ?? ""} onChange={(v) => list.setFilters((f) => ({ ...f, partner: v }))} />
      </FilterBar>

      <DataTable
        columns={COLUMNS}
        data={list.rows}
        rowKey={(d) => d.id}
        loading={list.loading}
        selectable
        searchPlaceholder="Tìm theo mã vận đơn, hóa đơn, khách hàng..."
        searchKeys={["code", "invoiceCode", "customer", "receiver", "phone"]}
        exportable
        exportFilename="danh-sach-van-don"
        minWidth={1100}
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