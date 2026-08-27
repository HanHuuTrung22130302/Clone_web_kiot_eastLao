import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

/** Inline labelled select for the filter strip (renders label + options side by side). */
export function FilterSelect({
  label,
  value,
  onChange,
  options,
  allLabel,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  allLabel?: string;
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-2 py-1">
      <span className="hidden whitespace-nowrap px-0.5 text-[12px] text-muted-foreground sm:inline">{label}:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 max-w-[180px] appearance-none rounded-md border-none bg-transparent pr-5 pl-1 text-[13px] text-foreground outline-none"
      >
        <option value="">{allLabel ?? "Tất cả"}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export interface FilterBarProps {
  /** Quick chips like "Phiếu tạm X", "Đang giao hàng X" */
  chips?: { label: string; count?: number }[];
  activeChip?: string;
  onChipClick?: (label: string) => void;
  /** Inline filters (Selects...) rendered right after chips */
  children?: React.ReactNode;
  /** Reset button */
  onReset?: () => void;
}

/**
 * Single-row filter strip for KiotViet list pages: quick chips + inline
 * select filters sit side by side, reset on the far right.
 */
export { Select } from "./select";

export function FilterBar({ chips, activeChip, onChipClick, children, onReset }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5">
      <span className="text-[12px] font-medium text-muted-foreground">Lọc:</span>
      {(chips ?? []).map((c) => (
        <button
          key={c.label}
          onClick={() => onChipClick?.(c.label)}
          className={cn(
            "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-medium transition-colors",
            activeChip === c.label
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-border bg-muted/40 text-foreground/75 hover:border-primary/50 hover:text-foreground"
          )}
        >
          {c.label}
          {typeof c.count === "number" && (
            <span
              className={cn(
                "rounded-full px-1.5 text-[11px]",
                activeChip === c.label ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
              )}
            >
              {c.count}
            </span>
          )}
        </button>
      ))}

      {children}

      {onReset && (
        <button
          onClick={onReset}
          className="ml-auto flex items-center gap-1.5 rounded-lg border border-transparent px-2.5 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:border-border hover:bg-muted/40 hover:text-foreground"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Đặt lại
        </button>
      )}
    </div>
  );
}
