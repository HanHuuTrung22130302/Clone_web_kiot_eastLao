"use client";

import { useEffect, useMemo, useState } from "react";
import type { ApiListParams, ApiListResult } from "./http";

export interface ListFilters {
  [key: string]: string;
}

/**
 * Shared state for KiotViet list pages: async load, chip + select filters,
 * keyword, pagination. Renders null while the mock fetch resolves.
 */
export function useAdminList<T>(
  fetcher: (params: ApiListParams) => Promise<ApiListResult<T>>,
  options: {
    pageSize?: number;
    chips?: { label: string; count?: number }[];
    chipFilter?: (row: T, chip: string) => boolean;
    selectFilters?: { key: string; options: string[]; matches?: (row: T, value: string) => boolean }[];
    fetchOptions?: () => Promise<Record<string, string[]>>;
  } = {}
) {
  const [rows, setRows] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(options.pageSize ?? 20);
  const [activeChip, setActiveChip] = useState("");
  const [filters, setFilters] = useState<ListFilters>({});
  const [optionMap, setOptionMap] = useState<Record<string, string[]>>({});

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetcher({ page, pageSize, keyword }).then((res) => {
      if (cancelled) return;
      let data = res.data;
      if (options.chipFilter && activeChip) {
        data = data.filter((r) => options.chipFilter!(r, activeChip));
      }
      for (const f of options.selectFilters ?? []) {
        const v = filters[f.key];
        if (v) {
          const m = f.matches;
          data = m ? data.filter((r) => m(r, v)) : data;
        }
      }
      setRows(data);
      setTotal(res.total);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize, keyword, activeChip, JSON.stringify(filters)]);

  useEffect(() => {
    if (!options.fetchOptions) return;
    options.fetchOptions().then((map) => setOptionMap(map));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const counts = useMemo(() => {
    if (!options.chips) return undefined;
    return options.chips.map((c) => ({
      label: c.label,
      count: c.count,
    }));
  }, [options.chips]);

  return {
    rows,
    total,
    loading,
    keyword,
    setKeyword,
    page,
    setPage,
    pageSize,
    setPageSize,
    activeChip,
    setActiveChip,
    filters,
    setFilters,
    optionMap,
    chips: counts,
  };
}
