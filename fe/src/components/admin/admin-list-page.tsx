"use client";

import { FilterBar } from "@/components/admin/filter-bar";
import { DataTable, type Column } from "@/components/admin/data-table";
import { useAdminList } from "@/lib/admin-api/use-admin-list";
import type { ApiListParams } from "@/lib/admin-api/http";

export interface AdminListConfig<T> {
  title: string;
  actions?: React.ReactNode;
  fetcher: (params: ApiListParams) => Promise<{ data: T[]; total: number; page: number; pageSize: number }>;
  columns: Column<T>[];
  rowKey: (row: T) => string | number;
  chips?: { label: string; count?: number }[];
  chipFilter?: (row: T, chip: string) => boolean;
  selectFilters?: { key: string; label: string; options: string[]; matches?: (row: T, value: string) => boolean }[];
  optionsFetcher?: () => Promise<Record<string, string[]>>;
  searchKeys?: (keyof T)[];
  searchPlaceholder?: string;
  exportFilename?: string;
  minWidth?: number;
}

/**
 * Boilerplate for KiotViet admin list pages: compact title bar + single-row
 * filter strip (chips + inline selects) + searchable/sortable/exportable table.
 */
export function AdminListPage<T>({
  title,
  actions,
  fetcher,
  columns,
  rowKey,
  chips,
  chipFilter,
  selectFilters = [],
  optionsFetcher,
  searchKeys,
  searchPlaceholder = "Tìm kiếm...",
  exportFilename = "danh-sach",
  minWidth = 1000,
}: AdminListConfig<T>) {
  const list = useAdminList<T>(fetcher, {
    chips,
    chipFilter,
    selectFilters: selectFilters.map((f) => ({ key: f.key, options: f.options, matches: f.matches })),
    fetchOptions: optionsFetcher ?? (async () => {
      const map: Record<string, string[]> = {};
      for (const f of selectFilters) map[f.key] = f.options;
      return map;
    }),
  });

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[20px] font-bold tracking-tight text-foreground">{title}</h1>
        {actions}
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
        {selectFilters.map((f) => (
          <FilterSelect
            key={f.key}
            label={f.label}
            value={list.filters[f.key] ?? ""}
            options={(list.optionMap[f.key] ?? []).map((v) => ({ label: v, value: v }))}
            onChange={(v) => list.setFilters((prev) => ({ ...prev, [f.key]: v }))}
          />
        ))}
      </FilterBar>

      <DataTable
        columns={columns}
        data={list.rows}
        rowKey={rowKey}
        loading={list.loading}
        selectable
        searchPlaceholder={searchPlaceholder}
        searchKeys={searchKeys}
        exportable
        exportFilename={exportFilename}
        minWidth={minWidth}
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

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <div className="flex max-w-full items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-2 py-1">
      <span className="hidden whitespace-nowrap px-0.5 text-[12px] text-muted-foreground sm:inline">{label}:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 max-w-[180px] appearance-none rounded-md border-none bg-transparent pr-5 pl-1 text-[13px] text-foreground outline-none"
      >
        <option value="">Tất cả</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
