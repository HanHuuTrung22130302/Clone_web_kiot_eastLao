import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const ACCENTS: Record<string, string> = {
  blue: "bg-[#0070F4]/10 text-[#0070F4]",
  green: "bg-[#00B63E]/10 text-[#00942F]",
  red: "bg-[#E11D48]/10 text-[#E11D48]",
  orange: "bg-[#FF8800]/10 text-[#FF8800]",
  slate: "bg-muted/60 text-muted-foreground",
};

export function StatCard({
  label,
  value,
  delta,
  sub,
  icon,
  accent = "slate",
  footer,
  className,
}: {
  label: string;
  value: string;
  delta?: string;
  sub?: string;
  icon?: ReactNode;
  accent?: "blue" | "green" | "red" | "orange" | "slate";
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl border border-border bg-white p-5 transition-all duration-200 hover:shadow-sm hover:border-primary/20", className)}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[12px] font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
        {icon ? (
          <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-transform duration-200 group-hover:scale-110", ACCENTS[accent])}>
            {icon}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-[26px] font-bold leading-tight tracking-tight text-foreground">{value}</p>
      {footer}
      {delta && (
        <p className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium" style={{ color: delta.startsWith("-") ? "#E11D48" : "#00942F" }}>
          {delta.startsWith("-") ? "↓" : "↑"} {delta.replace("+", "")}
          {sub && <span className="font-normal text-muted-foreground">· {sub}</span>}
        </p>
      )}
    </div>
  );
}
