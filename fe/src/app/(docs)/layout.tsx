import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { DocsSidebar } from "@/components/docs/sidebar";
import { Search } from "lucide-react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="kv-docs-page flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="kv-container py-6">
          <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="mb-3 flex items-center justify-between rounded-xl border bg-white px-3.5 py-2.5">
                  <span className="text-[14px] font-semibold text-foreground">
                    Trung tâm trợ giúp
                  </span>
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="rounded-xl border bg-white p-2">
                  <DocsSidebar />
                </div>
              </div>
            </aside>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}