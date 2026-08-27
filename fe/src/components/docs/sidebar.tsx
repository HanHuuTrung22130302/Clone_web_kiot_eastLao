"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { docSections, prettifySection, slugToPath } from "@/lib/docs";

interface DocsSidebarProps {
  activeSection?: string;
  activeSlug?: string;
}

export function DocsSidebar({ activeSection, activeSlug }: DocsSidebarProps) {
  const sections = docSections();
  const [open, setOpen] = useState<string | null>(
    activeSection ?? sections[0]?.section ?? null
  );

  return (
    <nav className="docs-scroll max-h-[calc(100vh-6rem)] space-y-1 overflow-y-auto pr-2">
      {sections.map((sec) => {
        const isOpen = open === sec.section;
        return (
          <div key={sec.section}>
            <button
              onClick={() =>
                setOpen((v) => (v === sec.section ? null : sec.section))
              }
              className={cn(
                "flex w-full items-center gap-1.5 rounded-lg px-2.5 py-2 text-left text-[13px] font-semibold transition-colors",
                isOpen
                  ? "bg-primary/5 text-primary"
                  : "text-foreground/80 hover:bg-accent"
              )}
            >
              {isOpen ? (
                <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-60" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
              )}
              <span className="truncate">{prettifySection(sec.section)}</span>
            </button>
            {isOpen && (
              <div className="ml-2 mt-0.5 space-y-0.5 border-l border-border/70 pl-2.5">
                {sec.items.map((item) => {
                  const active = activeSection === sec.section && activeSlug === item.slug;
                  return (
                    <a
                      key={item.slug + item.title}
                      href={slugToPath(sec.section, item.slug)}
                      className={cn(
                        "flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[13px] leading-snug transition-colors",
                        active
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-foreground/70 hover:bg-accent hover:text-foreground"
                      )}
                    >
                      <FileText className="h-3 w-3 shrink-0 opacity-50" />
                      <span className="line-clamp-1">{item.title}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}