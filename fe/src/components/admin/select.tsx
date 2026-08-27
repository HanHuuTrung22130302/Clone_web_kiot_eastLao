"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  allLabel?: string;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Chọn",
  className,
  allLabel,
}: SelectProps) {
  return (
    <div className={cn("relative inline-flex", className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 appearance-none rounded-lg border border-border bg-white pl-3 pr-8 text-[13px] text-foreground outline-none transition-colors hover:border-primary/50 focus:border-primary"
      >
        {allLabel !== undefined && <option value="">{allLabel}</option>}
        {options.length === 0 && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}
