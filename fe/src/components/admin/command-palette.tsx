import { useEffect, useMemo, useRef, useState } from "react";
import { Command, Search, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export interface CmdItem {
  label: string;
  href: string;
  group: string;
}

export function CommandPalette({
  items,
  open,
  onClose,
}: {
  items: CmdItem[];
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  const filtered = useMemo(
    () =>
      query
        ? items.filter(
            (i) =>
              i.label.toLowerCase().includes(query.toLowerCase()) ||
              i.href.toLowerCase().includes(query.toLowerCase())
          )
        : items,
    [items, query]
  );

  useEffect(() => {
    setIndex(0);
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") setIndex((i) => Math.min(i + 1, filtered.length - 1));
      if (e.key === "ArrowUp") setIndex((i) => Math.max(i - 1, 0));
      if (e.key === "Enter" && filtered[index]) {
        router.push(filtered[index].href);
        onClose();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, filtered, index, router, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-[540px] overflow-hidden rounded-xl border border-border bg-white shadow-2xl kv-fade-in">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm trang, chức năng..."
            className="flex-1 border-none bg-transparent text-[14px] text-foreground outline-none placeholder:text-muted-foreground/60"
          />
          <kbd className="flex items-center gap-0.5 rounded-md border border-border bg-muted/60 px-1.5 py-0.5 text-[11px] text-muted-foreground">
            <Command className="h-3 w-3" />K
          </kbd>
        </div>
        <div className="max-h-[320px] overflow-y-auto p-1.5">
          {filtered.length === 0 && (
            <p className="px-3 py-8 text-center text-[13px] text-muted-foreground">Không tìm thấy kết quả</p>
          )}
          {filtered.map((item, i) => (
            <button
              key={item.href}
              onClick={() => {
                router.push(item.href);
                onClose();
              }}
              onMouseEnter={() => setIndex(i)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors",
                i === index ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
              )}
            >
              <span className="flex-1 truncate font-medium">{item.label}</span>
              <span className="whitespace-nowrap text-[11px] text-muted-foreground">{item.group}</span>
              {i === index && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function useCmdPalette(items: CmdItem[]) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return { open, setOpen, items, cmdPalette: <CommandPalette items={items} open={open} onClose={() => setOpen(false)} /> };
}
