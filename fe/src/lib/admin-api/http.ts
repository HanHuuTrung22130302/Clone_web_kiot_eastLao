export interface ApiListResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ApiListParams {
  page?: number;
  pageSize?: number;
  keyword?: string;
  sort?: { field: string; order: "asc" | "desc" };
}

/**
 * Mock HTTP layer. Mirrors the real KiotViet REST shape so that
 * swapping `fakeFetch` for `fetch(apiUrl)` later only touches this file.
 */
export function fakeFetch<T>(payload: T, delay = 180): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(payload), delay);
  });
}

export function paginate<T>(
  all: T[],
  params: ApiListParams
): ApiListResult<T> {
  const { page = 1, pageSize = 20 } = params;
  const start = (page - 1) * pageSize;
  const slice = all.slice(start, start + pageSize);
  return { data: slice, total: all.length, page, pageSize };
}

export function matchKeyword<T>(row: T, keyword: string, keys: (keyof T)[]): boolean {
  if (!keyword) return true;
  const k = keyword.toLowerCase();
  return keys.some((key) => {
    const v = row[key];
    if (v == null) return false;
    return String(v).toLowerCase().includes(k);
  });
}

export function sortRows<T>(rows: T[], sort?: ApiListParams["sort"]): T[] {
  if (!sort) return rows;
  const { field, order } = sort;
  return [...rows].sort((a, b) => {
    const av = (a as Record<string, unknown>)[field];
    const bv = (b as Record<string, unknown>)[field];
    if (typeof av === "number" && typeof bv === "number") {
      return order === "asc" ? av - bv : bv - av;
    }
    return order === "asc"
      ? String(av ?? "").localeCompare(String(bv ?? ""), "vi")
      : String(bv ?? "").localeCompare(String(av ?? ""), "vi");
  });
}
