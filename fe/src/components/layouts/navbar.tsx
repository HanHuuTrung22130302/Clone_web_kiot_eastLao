"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { topNav } from "@/lib/site";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="kv-container flex h-16 items-center justify-between gap-4">
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {topNav.map((item) => (
            <div
              key={item.label}
              className="group relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={item.href}
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground",
                  openMenu === item.label && "bg-accent text-accent-foreground"
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                )}
              </a>
              {item.children && (
                <div
                  className={cn(
                    "absolute left-0 top-full w-56 rounded-xl border bg-white p-2 shadow-kv transition-all",
                    openMenu === item.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  )}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.href + child.label}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-[14px] text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/dang-nhap"
            className="text-[14px] font-medium text-foreground/80 hover:text-primary"
          >
            Đăng nhập
          </a>
          <a href="/dang-ky" className="kv-btn kv-btn--primary kv-btn--md">
            Đăng ký
          </a>
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Mở menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="kv-container flex flex-col gap-1 py-4">
            {topNav.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="py-2 text-[15px] font-semibold text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <button
                      onClick={() =>
                        setOpenMenu((v) => (v === item.label ? null : item.label))
                      }
                      className="p-2"
                      aria-label={`Mở ${item.label}`}
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openMenu === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>
                {item.children && openMenu === item.label && (
                  <div className="ml-3 flex flex-col border-l pl-3">
                    {item.children.map((child) => (
                      <a
                        key={child.href + child.label}
                        href={child.href}
                        className="py-1.5 text-[14px] text-muted-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex gap-3">
              <a
                href="/dang-nhap"
                className="kv-btn flex-1 border text-[14px] font-medium"
              >
                Đăng nhập
              </a>
              <a
                href="/dang-ky"
                className="kv-btn kv-btn--primary kv-btn--md flex-1"
              >
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}