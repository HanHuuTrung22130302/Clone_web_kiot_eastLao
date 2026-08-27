"use client";

import { Plus, Package } from "lucide-react";
import { FilterBar, FilterSelect } from "@/components/admin/filter-bar";
import { DataTable, type Column } from "@/components/admin/data-table";
import { StatusBadge } from "@/components/admin/status-badge";
import { useAdminList } from "@/lib/admin-api/use-admin-list";
import { adminApi } from "@/lib/admin-api/services";
import type { Product } from "@/data/admin/products";
import { formatVND } from "@/lib/admin-api/format";
import { cn } from "@/lib/utils";

const COLUMNS: Column<Product>[] = [
  { key: "code", header: "Mã hàng", sortable: true, render: (p) => <span className="font-medium text-primary">{p.code}</span> },
  { key: "barcode", header: "Mã vạch", render: (p) => <span className="text-muted-foreground">{p.barcode}</span> },
  { key: "name", header: "Tên hàng", sortable: true, render: (p) => (
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-muted/60 text-muted-foreground">
          <Package className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="max-w-[240px] truncate font-medium text-foreground">{p.name}</p>
          <p className="text-[11px] text-muted-foreground">{p.group} · {p.unit}</p>
        </div>
      </div>
    ) },
  { key: "price", header: "Giá bán", sortable: true, className: "text-right", sortValue: (p) => p.price, render: (p) => <span className="font-semibold text-foreground">{formatVND(p.price)}</span> },
  { key: "cost", header: "Giá vốn", className: "text-right", sortValue: (p) => p.cost, render: (p) => <span className="text-muted-foreground">{formatVND(p.cost)}</span> },
  { key: "stock", header: "Tồn kho", sortable: true, className: "text-right", sortValue: (p) => p.stock, render: (p) => (
      <span className={cn(p.stock <= p.minStock ? "font-semibold text-destructive" : "text-foreground")}>
        {p.stock} {p.unit}
      </span>
    ) },
  { key: "brand", header: "Thương hiệu", render: (p) => <span className="text-muted-foreground">{p.brand}</span> },
  { key: "status", header: "Trạng thái", render: (p) => <StatusBadge label={p.status} /> },
];

export default function HangHoaPage() {
  const list = useAdminList<Product>(
    (params) => adminApi.products.list(params),
    {
      chips: [
        { label: "Đang bán" },
        { label: "Sắp hết" },
        { label: "Ngừng bán" },
      ],
      chipFilter: (p, chip) => p.status === chip,
      selectFilters: [
        { key: "group", options: [], matches: (p, v) => p.group === v },
        { key: "type", options: [], matches: (p, v) => p.type === v },
        { key: "brand", options: [], matches: (p, v) => p.brand === v },
      ],
      fetchOptions: async () => ({
        group: await adminApi.products.groups(),
        type: ["Hàng hóa", "Dịch vụ", "Combo"],
        brand: Array.from(new Set((await adminApi.products.list({ pageSize: 100 })).data.map((p) => p.brand))),
      }),
    }
  );

  const totalValue = list.rows.reduce((s, p) => s + p.stock * p.cost, 0);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[20px] font-bold tracking-tight text-foreground">
          Hàng hóa <span className="text-[14px] font-medium text-muted-foreground">({list.total})</span>
        </h1>
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Thêm mới hàng hóa
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
        <FilterSelect label="Nhóm hàng" options={list.optionMap.group ?? []} value={list.filters.group ?? ""} onChange={(v) => list.setFilters((f) => ({ ...f, group: v }))} />
        <FilterSelect label="Loại hàng" options={list.optionMap.type ?? []} value={list.filters.type ?? ""} onChange={(v) => list.setFilters((f) => ({ ...f, type: v }))} />
        <FilterSelect label="Thương hiệu" options={(list.optionMap.brand ?? []).filter((v) => v !== "—")} value={list.filters.brand ?? ""} onChange={(v) => list.setFilters((f) => ({ ...f, brand: v }))} />
      </FilterBar>

      <DataTable
        columns={COLUMNS}
        data={list.rows}
        rowKey={(p) => p.id}
        loading={list.loading}
        selectable
        searchPlaceholder="Tìm theo tên, mã hàng, mã vạch..."
        searchKeys={["code", "name", "barcode", "group", "brand"]}
        exportable
        exportFilename="danh-sach-hang-hoa"
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
