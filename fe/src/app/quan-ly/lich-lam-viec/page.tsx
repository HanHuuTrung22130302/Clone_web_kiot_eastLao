"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { employees, type Employee } from "@/data/admin/employees";
import { cn } from "@/lib/utils";

const DAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const SHIFTS = ["Ca sáng 7h–12h", "Ca chiều 13h–17h", "Ca tối 18h–21h", "Nghỉ"] as const;

function assignShift(e: Employee, day: number): (typeof SHIFTS)[number] {
  if (e.status === "Nghỉ việc") return "Nghỉ";
  if (day >= 5) return "Nghỉ";
  const n = (e.id.charCodeAt(1) + day * 3) % 4;
  if (n === 0) return "Ca sáng 7h–12h";
  if (n === 1) return "Ca chiều 13h–17h";
  if (n === 2) return "Ca tối 18h–21h";
  return "Nghỉ";
}

const SHIFT_STYLE: Record<(typeof SHIFTS)[number], string> = {
  "Ca sáng 7h–12h": "bg-primary/10 text-primary",
  "Ca chiều 13h–17h": "bg-amber-500/10 text-amber-600",
  "Ca tối 18h–21h": "bg-indigo-500/10 text-indigo-600",
  "Nghỉ": "bg-muted text-muted-foreground",
};

export default function LichLamViecPage() {
  const [week, setWeek] = useState(1);

  return (
    <div className="space-y-4">
      <PageHeader
        title="Lịch làm việc"
        subtitle="Phân ca làm việc theo tuần cho nhân viên"
        actions={
          <div className="flex items-center gap-1.5 rounded-lg border border-border bg-card p-1">
            <button className="grid h-7 w-7 place-items-center rounded-md hover:bg-muted" onClick={() => setWeek((w) => Math.max(1, w - 1))}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="min-w-[120px] text-center text-[13px] font-semibold text-foreground">Tuần {week} · T8/2026</span>
            <button className="grid h-7 w-7 place-items-center rounded-md hover:bg-muted" onClick={() => setWeek((w) => Math.min(5, w + 1))}>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        }
      />

      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="grid grid-cols-[220px_repeat(7,1fr)] border-b border-border bg-muted/40">
          <div className="flex items-center px-4 py-3 text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">Nhân viên</div>
          {DAYS.map((d, i) => (
            <div key={d} className="flex items-center justify-center px-2 py-3 text-[12px] font-semibold text-foreground">
              {d} <span className="ml-1.5 text-[11px] font-normal text-muted-foreground">{(i + 1) + (week - 1) * 7}</span>
            </div>
          ))}
        </div>

        {employees.map((e) => (
          <div key={e.id} className="grid grid-cols-[220px_repeat(7,1fr)] border-b border-border last:border-b-0 hover:bg-muted/30">
            <div className="flex min-w-0 items-center gap-2 px-4 py-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-[12px] font-bold text-primary">
                {e.name.charAt(0).toUpperCase()}
              </span>
              <div className="min-w-0">
                <p className={cn("truncate text-[13px] font-medium", e.status === "Nghỉ việc" ? "text-muted-foreground line-through" : "text-foreground")}>{e.name}</p>
                <p className="truncate text-[11px] text-muted-foreground">{e.role}</p>
              </div>
            </div>
            {DAYS.map((d, day) => {
              const s = assignShift(e, day);
              return (
                <div key={d} className="flex items-center justify-center px-2 py-3">
                  <span className={cn("rounded-md px-2 py-1 text-[11px] font-medium", SHIFT_STYLE[s])}>{s}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
