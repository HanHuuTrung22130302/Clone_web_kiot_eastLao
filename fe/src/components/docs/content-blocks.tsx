import { Fragment } from "react";
import { CheckCircle2 } from "lucide-react";

export type DocBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list_start"; ordered: boolean }
  | { type: "list_item"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "quote"; text: string };

export type LooseBlock = {
  type: string;
  text?: string;
  level?: number;
  src?: string;
  alt?: string;
  ordered?: boolean;
};

export function ContentBlocks({ blocks }: { blocks: LooseBlock[] }) {
  const out: React.ReactNode[] = [];
  let key = 0;
  let listBuffer: { ordered: boolean; items: string[] } | null = null;

  const flushList = () => {
    if (!listBuffer) return;
    const { ordered, items } = listBuffer;
    const keyCur = key;
    if (ordered) {
      out.push(
        <ol key={`ol-${keyCur}`} className="my-4 space-y-2 pl-1">
          {items.map((t, i) => (
            <li
              key={i}
              className="flex gap-2.5 leading-relaxed text-[15px] text-foreground/80"
            >
              <span className="mt-0.5 shrink-0 font-semibold text-primary">
                {i + 1}.
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      );
    } else {
      out.push(
        <ul key={`ul-${keyCur}`} className="my-4 space-y-2.5">
          {items.map((t, i) => (
            <li
              key={i}
              className="flex gap-2.5 leading-relaxed text-[15px] text-foreground/80"
            >
              <span className="mt-0.5 shrink-0 text-primary">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      );
    }
    listBuffer = null;
  };

  for (const b of blocks) {
    key++;
    if (b.type === "list_start") {
      flushList();
      listBuffer = { ordered: !!b.ordered, items: [] };
      continue;
    }
    if (b.type === "list_item") {
      if (listBuffer) listBuffer.items.push(b.text || "");
      else listBuffer = { ordered: false, items: [b.text || ""] };
      continue;
    }
    flushList();

    switch (b.type) {
      case "heading":
        const Tag = `h${Math.min(Math.max(b.level || 2, 2), 5)}` as
          | "h2"
          | "h3"
          | "h4"
          | "h5";
        out.push(
          <Tag
            key={key}
            id={`doc-${key}`}
            className="mt-9 scroll-mt-24 text-[22px] font-bold leading-snug text-foreground first:mt-0"
          >
            {b.text}
          </Tag>
        );
        break;
      case "paragraph":
        out.push(
          <p
            key={key}
            className="mt-4 leading-[1.8] text-[15px] text-foreground/80"
          >
            {b.text || ""}
          </p>
        );
        break;
      case "image":
        if (b.src) {
          out.push(
            <p key={key} className="my-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.src}
                alt={b.alt || ""}
                loading="lazy"
                className="mx-auto w-full max-w-4xl rounded-lg border border-border"
              />
            </p>
          );
        }
        break;
      case "quote":
        out.push(
          <blockquote
            key={key}
            className="my-6 border-l-4 border-primary bg-accent/50 p-4 text-[15px] italic text-foreground/75"
          >
            {b.text || ""}
          </blockquote>
        );
        break;
    }
  }
  flushList();

  return <div>{out}</div>;
}