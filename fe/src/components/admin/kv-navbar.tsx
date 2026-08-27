"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AdminMenuItem } from "@/lib/admin";

export function KvNavbar({ menu }: { menu: AdminMenuItem[] }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="flex h-14 items-center justify-between">
      <div className="flex items-center gap-0.5">
        {menu.map((item) => {
          // "Bán hàng" nằm ở vị trí đặc biệt bên phải
          if (item.href === "/ban-hang") return null;
          const hasChildren = !!item.children?.length;
          const active = isActive(item.href);
          return (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  "flex h-14 items-center gap-1.5 px-3 text-[13px] font-medium transition-colors",
                  active
                    ? "border-b-2 border-primary text-primary"
                    : "text-foreground/75 hover:text-primary"
                )}
              >
                {item.label}
                {item.badge && (
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                    {item.badge}
                  </span>
                )}
                {hasChildren && <ChevronDown className="h-3.5 w-3.5 opacity-50" />}
              </Link>
              {hasChildren && (
                <div className="invisible absolute left-0 top-full min-w-[220px] rounded-lg border border-border bg-white p-1.5 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-3 py-2 text-[13px] transition-colors",
                        isActive(child.href)
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-foreground/80 hover:bg-accent"
                      )}
                    >
                      {child.label}
                      {child.badge && (
                        <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                          {child.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <a
        href="/ban-hang"
        className="kv-btn kv-btn--primary kv-btn--md h-9 shrink-0"
      >
        <Plus className="h-4 w-4" />
        Bán hàng
      </a>
    </nav>
  );
}
