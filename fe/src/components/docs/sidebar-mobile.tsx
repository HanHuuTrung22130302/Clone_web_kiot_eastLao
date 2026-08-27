"use client";

import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { docSections, prettifySection, slugToPath } from "@/lib/docs";

export function DocsSidebarMobile({
  currentSection,
  currentSlug,
}: {
  currentSection?: string;
  currentSlug?: string;
}) {
  const [open, setOpen] = useState(false);
  const [openSec, setOpenSec] = useState<string | null>(currentSection ?? null);
  const sections = docSections();

  return (
    <div className="relative mb-4 lg:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 rounded-xl border bg-white px-4 py-3 text-[14px] font-semibold text-foreground"
      >
        <span className="inline-flex items-center gap-2">
          <Menu className="h-4 w-4 text-primary" />
          Trung tâm trợ giúp
        </span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-[70vh] overflow-y-auto rounded-xl border bg-white p-2 shadow-kv">
          {sections.map((sec) => {
            const isOpen = openSec === sec.section;
            return (
              <div key={sec.section}>
                <button
                  onClick={() =>
                    setOpenSec((v) => (v === sec.section ? null : sec.section))
                  }
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] font-semibold",
                    isOpen ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {prettifySection(sec.section)}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="mb-2 flex flex-col border-l border-border pl-3">
                    {sec.items.map((item) => (
                      <a
                        key={item.slug + item.title}
                        href={slugToPath(sec.section, item.slug)}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-md px-2 py-1.5 text-[13px]",
                          currentSection === sec.section &&
                            currentSlug === item.slug
                            ? "font-medium text-primary"
                            : "text-foreground/70"
                        )}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}