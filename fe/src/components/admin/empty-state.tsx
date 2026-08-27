import type { ReactNode } from "react";
import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmptyState({
  icon,
  title = "Không có dữ liệu",
  desc,
  action,
  className,
}: {
  icon?: ReactNode;
  title?: string;
  desc?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center px-4 py-14 text-center", className)}>
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-muted text-muted-foreground">
        {icon || <Inbox className="h-6 w-6" />}
      </span>
      <p className="mt-4 text-[14px] font-semibold text-foreground">{title}</p>
      {desc && <p className="mt-1 max-w-[300px] text-[13px] text-muted-foreground">{desc}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
