export function toCSV<T>(rows: T[], columns: { key: string; header: string; render?: (row: T) => React.ReactNode }[]): string {
  const esc = (v: unknown) => {
    const s = v == null ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const header = columns.map((c) => esc(c.header)).join(",");
  const body = rows
    .map((r) =>
      columns.map((c) => esc(c.render ? c.render(r) : (r as Record<string, unknown>)[c.key])).join(",")
    )
    .join("\n");
  return `${header}\n${body}`;
}

export function downloadCSV(filename: string, content: string) {
  const blob = new Blob(["\uFEFF" + content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.endsWith(".csv") ? filename : `${filename}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
