"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LogOut, Menu, Search, User, X, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { adminMenu, type AdminMenuItem } from "@/lib/admin";
import { getFakeAuth, fakeLogout } from "@/lib/auth";
import { KvNavbar } from "@/components/admin/kv-navbar";
import { useCmdPalette, type CmdItem } from "@/components/admin/command-palette";
import { NotificationBell } from "@/components/admin/notification-bell";

function AuthGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!getFakeAuth()) {
      const target = pathname !== "/quan-ly" && pathname.startsWith("/quan-ly") ? `?next=${encodeURIComponent(pathname)}` : "";
      router.replace(`/dang-nhap${target}`);
      return;
    }
    setChecked(true);
  }, [pathname, router]);

  if (!checked) return null;
  return <>{children}</>;
}

function UserDropdown({ auth, onLogout }: { auth: ReturnType<typeof getFakeAuth>; onLogout: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="grid h-9 w-9 place-items-center rounded-full border border-border bg-gradient-to-br from-primary/10 to-primary/5 text-[13px] font-bold text-primary transition-all hover:border-primary/30 hover:shadow-sm"
      >
        {auth?.fullname?.charAt(0)?.toUpperCase() || "K"}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-56 overflow-hidden rounded-xl border border-border bg-white shadow-lg kv-fade-in">
          <div className="border-b border-border px-4 py-3">
            <p className="text-[13px] font-semibold text-foreground">{auth?.fullname || "Chủ cửa hàng"}</p>
            <p className="mt-0.5 text-[12px] text-muted-foreground">{auth?.shopName || "cua-hang"}.kiotviet.vn</p>
          </div>
          <div className="p-1">
            <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-foreground/75 transition-colors hover:bg-accent hover:text-foreground">
              <User className="h-4 w-4" />
              Tài khoản
            </button>
            <button
              onClick={onLogout}
              className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-foreground/75 transition-colors hover:bg-destructive/5 hover:text-destructive"
            >
              <LogOut className="h-4 w-4" />
              Đăng xuất
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [auth, setAuth] = useState(() => getFakeAuth());
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setAuth(getFakeAuth());
  }, []);

  function handleLogout() {
    fakeLogout();
    router.push("/");
  }

  const cmdItems: CmdItem[] = [];
  function flatten(items: AdminMenuItem[], group?: string) {
    for (const item of items) {
      if (item.children) flatten(item.children, item.label);
      else cmdItems.push({ label: item.label, href: item.href, group: group ?? item.label });
    }
  }
  flatten(adminMenu);
  const { open: cmdOpen, setOpen: setCmdOpen, cmdPalette } = useCmdPalette(cmdItems);

  return (
    <AuthGate>
      {cmdPalette}
      <div className="kv-admin kv-admin-shell flex h-screen flex-col overflow-hidden">
        {/* ===== Dòng 1: Header ===== */}
        <header className="z-40 flex h-14 shrink-0 items-center gap-3 border-b border-border bg-white px-4 sm:px-6">
          <button
            className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground hover:bg-accent lg:hidden"
            onClick={() => setMobileMenu(true)}
            aria-label="Mở menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/quan-ly" className="flex shrink-0 items-center gap-2.5">
            <img src="/images/v2/logo.svg" alt="KiotViet" className="h-7 w-auto" />
          </Link>

          <div className="hidden items-center gap-1.5 border-l border-border pl-4 text-[13px] text-muted-foreground md:flex">
            <span className="font-semibold text-foreground">
              {auth?.shopName || "Cửa hàng demo"}
            </span>
            <span className="text-muted-foreground/30">/</span>
            <span className="text-muted-foreground">Chi nhánh trung tâm</span>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button
              onClick={() => setCmdOpen(true)}
              className="hidden items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground md:flex"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">Tìm kiếm...</span>
              <kbd className="flex items-center gap-0.5 rounded border border-border bg-white px-1 py-0.5 text-[10px] text-muted-foreground/60">
                <Command className="h-2.5 w-2.5" />K
              </kbd>
            </button>

            <span className="hidden h-5 w-px bg-border md:block" />

            <NotificationBell />

            <UserDropdown auth={auth} onLogout={handleLogout} />
          </div>
        </header>

        {/* ===== Dòng 2: KvNavbar ===== */}
        <div className="hidden border-b border-border bg-white lg:block">
          <div className="px-5">
            <KvNavbar menu={adminMenu} />
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div className={cn("fixed inset-0 z-50 lg:hidden", mobileMenu ? "pointer-events-auto" : "pointer-events-none")}>
          <div
            className={cn("absolute inset-0 bg-black/40 transition-opacity", mobileMenu ? "opacity-100" : "opacity-0")}
            onClick={() => setMobileMenu(false)}
          />
          <aside
            className={cn(
              "absolute left-0 top-0 flex h-full w-72 flex-col border-r border-border bg-white shadow-xl transition-transform",
              mobileMenu ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="flex h-14 items-center gap-2 border-b border-border px-4">
              <img src="/images/v2/logo.svg" alt="KiotViet" className="h-7 w-auto" />
              <button
                onClick={() => setMobileMenu(false)}
                className="ml-auto grid h-8 w-8 place-items-center rounded-lg text-muted-foreground hover:bg-accent"
                aria-label="Đóng menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto kv-scroll p-2">
              {adminMenu.map((item) => (
                <MobileMenuItem key={item.href + item.label} item={item} pathname={pathname} onNavigate={() => setMobileMenu(false)} />
              ))}
            </nav>
            <div className="border-t border-border p-3">
              <div className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-primary/5 to-primary/[0.02] px-3 py-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-[14px] font-bold text-primary">
                  {auth?.fullname?.charAt(0)?.toUpperCase() || "K"}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-foreground">{auth?.fullname || "Chủ cửa hàng"}</p>
                  <p className="truncate text-[11px] text-muted-foreground">{auth?.shopName || "cua-hang"}.kiotviet.vn</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ===== Main content ===== */}
        <main className="flex-1 overflow-y-auto bg-[#f5f6f7] p-4 sm:p-6 lg:p-8 kv-scroll">
          <div className="mx-auto max-w-[1400px]">{children}</div>
        </main>
      </div>
    </AuthGate>
  );
}

function MobileMenuItem({ item, pathname, depth = 0, onNavigate }: { item: AdminMenuItem; pathname: string; depth?: number; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;
  const active = pathname === item.href || pathname.startsWith(item.href + "/");

  useEffect(() => {
    if (hasChildren && item.children!.some((c) => pathname === c.href || pathname.startsWith(c.href + "/"))) {
      setOpen(true);
    }
  }, [pathname, hasChildren, item.children]);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={cn(
          "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors",
          active ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-accent hover:text-foreground",
          depth > 0 && "ml-3"
        )}
      >
        <span className="ik-solid text-[15px]"><i className={item.icon} /></span>
        <span className="flex-1 truncate">{item.label}</span>
        {item.badge && <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">{item.badge}</span>}
      </Link>
    );
  }

  return (
    <div className="mb-0.5">
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors",
          active ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-accent hover:text-foreground"
        )}
      >
        <span className="ik-solid text-[15px]"><i className={item.icon} /></span>
        <span className="flex-1 truncate text-left">{item.label}</span>
        {item.badge && <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">{item.badge}</span>}
        <span className={cn("text-muted-foreground/50 transition-transform duration-200", open ? "" : "-rotate-90")}>
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
        </span>
      </button>
      <div className={cn("space-y-0.5 overflow-hidden transition-all duration-200", open ? "max-h-screen opacity-100" : "max-h-0 opacity-0")}>
        {item.children!.map((child) => (
          <MobileMenuItem key={child.href} item={child} pathname={pathname} depth={depth + 1} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}
