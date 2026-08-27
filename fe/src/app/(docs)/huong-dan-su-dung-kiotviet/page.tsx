import Link from "next/link";
import { ChevronRight, BookOpen, FileText } from "lucide-react";
import { docSections, prettifySection, docsIndexUrl } from "@/lib/docs";

export const metadata = {
  title: "Hướng dẫn sử dụng KiotViet - Trung tâm trợ giúp",
  description:
    "Hướng dẫn sử dụng phần mềm KiotViet chi tiết từ A - Z cho các ngành Bán buôn, Bán lẻ, Khách sạn, Nhà nghỉ. Tra cứu tài liệu hướng dẫn và thao tác từng tính năng.",
};

export default function DocsIndexPage() {
  const sections = docSections();

  return (
    <div className="min-w-0">
      <div className="rounded-xl border bg-white p-6 sm:p-8">
        <h1 className="text-[26px] font-bold leading-tight text-foreground">
          Trung tâm trợ giúp KiotViet
        </h1>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Tra cứu hướng dẫn sử dụng phần mềm KiotViet chi tiết từ A - Z. Chọn
          ngành hàng và tính năng để xem tài liệu hướng dẫn.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {sections.map((sec) => (
            <Link
              key={sec.section}
              href={docsIndexUrl(sec.section)}
              className="group flex items-start gap-3 rounded-xl border p-4 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <BookOpen className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1 text-[15px] font-semibold text-foreground">
                  {prettifySection(sec.section)}
                </span>
                <span className="mt-1 line-clamp-2 text-[13px] text-muted-foreground">
                  {sec.items.length} bài viết ·{" "}
                  {sec.items
                    .slice(0, 2)
                    .map((i) => i.title)
                    .join(", ")}
                </span>
              </span>
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}