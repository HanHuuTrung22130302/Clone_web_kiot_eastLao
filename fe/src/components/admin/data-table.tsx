"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUp, Search, FileDown, SearchX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Pagination } from "./pagination";
import { EmptyState } from "./empty-state";

export interface Column<T> {
  key: string;
  header: string;
  className?: string;
  render?: (row: T) => ReactNode;
  sortable?: boolean;
  sortValue?: (row: T) => string | number;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowKey: (row: T) => string | number;
  loading?: boolean;
  selectable?: boolean;
  selected?: Set<string | number>;
  onToggleRow?: (key: string | number) => void;
  onToggleAll?: (keys: (string | number)[]) => void;
  emptyText?: string;
  minWidth?: number;
  toolbar?: ReactNode;
  searchPlaceholder?: string;
  searchKeys?: (keyof T)[];
  exportable?: boolean;
  exportFilename?: string;
  page?: number;
  pageSize?: number;
  total?: number;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  footer?: ReactNode;
}

function toCSV<T>(rows: T[], columns: Column<T>[]): string {
  const esc = (v: unknown) => {
    const s = v == null ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const header = columns.map((c) => esc(c.header)).join(",");
  const body = rows
    .map((r) => columns.map((c) => esc(c.render ? c.render(r) : (r as Record<string, unknown>)[c.key])).join(","))
    .join("\n");
  return `${header}\n${body}`;
}

function download(filename: string, content: string) {
  const blob = new Blob(["\uFEFF" + content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.endsWith(".csv") ? filename : `${filename}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export function DataTable<T>({
  columns,
  data,
  rowKey,
  loading,
  selectable,
  selected = new Set(),
  onToggleRow,
  onToggleAll,
  emptyText = "Không có dữ liệu",
  minWidth = 640,
  toolbar,
  searchPlaceholder,
  searchKeys,
  exportable,
  exportFilename = "du-lieu",
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  footer,
}: DataTableProps<T>) {
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState<{ field: string; order: "asc" | "desc" } | null>(null);

  const filtered = useMemo(() => {
    let rows = data;
    if (keyword && searchKeys && searchKeys.length) {
      const k = keyword.toLowerCase();
      rows = rows.filter((r) =>
        searchKeys.some((key) => {
          const v = (r as Record<string, unknown>)[key as string];
          return v != null && String(v).toLowerCase().includes(k);
        })
      );
    }
    if (sort) {
      const col = columns.find((c) => c.key === sort.field);
      rows = [...rows].sort((a, b) => {
        const av = col?.sortValue ? col.sortValue(a) : (a as Record<string, unknown>)[sort.field];
        const bv = col?.sortValue ? col.sortValue(b) : (b as Record<string, unknown>)[sort.field];
        if (typeof av === "number" && typeof bv === "number") {
          return sort.order === "asc" ? av - bv : bv - av;
        }
        return sort.order === "asc"
          ? String(av ?? "").localeCompare(String(bv ?? ""), "vi")
          : String(bv ?? "").localeCompare(String(av ?? ""), "vi");
      });
    }
    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, keyword, sort, searchKeys?.join(",")]);

  const allKeys = filtered.map(rowKey);
  const allSelected = filtered.length > 0 && allKeys.every((k) => selected.has(k));
  const someSelected = allKeys.some((k) => selected.has(k));

  const toggleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    setSort((prev) => {
      if (!prev || prev.field !== col.key) return { field: col.key, order: "asc" };
      if (prev.order === "asc") return { field: col.key, order: "desc" };
      return null;
    });
  };

  const pageRows = page && pageSize ? filtered.slice(0, pageSize) : filtered;
  const displayTotal = total ?? filtered.length;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-white">
      {(toolbar || searchPlaceholder || exportable) && (
        <div className="flex flex-wrap items-center gap-3 border-b border-border px-3 py-2.5">
          {searchPlaceholder && (
            <div className="flex min-w-[220px] flex-1 items-center gap-2 rounded-lg border border-border bg-muted/30 px-3">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={searchPlaceholder}
                className="h-9 flex-1 bg-transparent text-[13px] outline-none placeholder:text-muted-foreground"
              />
            </div>
          )}
          <div className="ml-auto flex items-center gap-2">{toolbar}</div>
          {exportable && (
            <button
              onClick={() => download(exportFilename, toCSV(filtered, columns))}
              className="kv-btn gap-1.5 border border-border px-3 py-2 text-[13px] text-foreground/80 hover:bg-accent"
            >
              <FileDown className="h-4 w-4" />
              Xuất file
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-[13px]" style={{ minWidth }}>
          <thead>
            <tr className="border-b border-border bg-muted/40 text-[12px] text-muted-foreground">
              {selectable && (
                <th className="w-10 px-3 py-3">
                  <input
                    type="checkbox"
                    className="rounded border-border accent-primary"
                    checked={allSelected}
                    ref={(el) => {
                      if (el) el.indeterminate = someSelected && !allSelected;
                    }}
                    onChange={() => onToggleAll?.(allKeys)}
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn("px-3 py-3 font-medium whitespace-nowrap", col.className)}
                >
                  <button
                    type="button"
                    disabled={!col.sortable}
                    onClick={() => toggleSort(col)}
                    className={cn(
                      "inline-flex items-center gap-1",
                      col.sortable ? "hover:text-foreground" : "cursor-default"
                    )}
                  >
                    {col.header}
                    {col.sortable && (
                      <span className="ml-1 inline-flex flex-col leading-none">
                        <ArrowUp className={cn("h-[9px] w-[9px] -mb-[2px]", sort?.field === col.key && sort.order === "asc" ? "text-primary" : "text-muted-foreground/40")} />
                        <ArrowDown className={cn("h-[9px] w-[9px]", sort?.field === col.key && sort.order === "desc" ? "text-primary" : "text-muted-foreground/40")} />
                      </span>
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className="px-4 py-16 text-center">
                  <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
                </td>
              </tr>
            ) : pageRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)}>
                  <EmptyState
                    icon={<SearchX className="h-6 w-6" />}
                    title={emptyText}
                    desc={keyword ? `Không tìm thấy kết quả cho "${keyword}"` : undefined}
                    className="py-12"
                  />
                </td>
              </tr>
            ) : (
              pageRows.map((row, ri) => {
                const key = rowKey(row);
                return (
                  <tr
                    key={key}
                    className={cn(
                      "border-b border-border/70 last:border-0 transition-colors",
                      ri % 2 === 1 && "bg-muted/20",
                      "hover:bg-primary/[0.04]",
                      selected.has(key) && "bg-primary/[0.06]"
                    )}
                  >
                    {selectable && (
                      <td className="px-3 py-2.5">
                        <input
                          type="checkbox"
                          className="rounded border-border accent-primary"
                          checked={selected.has(key)}
                          onChange={() => onToggleRow?.(key)}
                        />
                      </td>
                    )}
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={cn("px-3 py-2.5 align-middle", col.className)}
                      >
                        {col.render ? col.render(row) : (row as Record<string, unknown>)[col.key] as ReactNode}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {footer}

      {onPageChange && page && pageSize && (
        <div className="border-t border-border">
          <Pagination
            page={page}
            pageSize={pageSize}
            total={displayTotal}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
          />
        </div>
      )}
    </div>
  );
}
