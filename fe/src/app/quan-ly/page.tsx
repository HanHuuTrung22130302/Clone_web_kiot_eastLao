import Link from "next/link";
import { ArrowUpRight, ArrowDownRight, TrendingUp, ShoppingCart, Users } from "lucide-react";
import { StatCard } from "@/components/admin/stat-card";
import { dashboardStats, revenueByDay, topProducts, topCustomers } from "@/data/admin/reports";
import { formatVND, formatNumber } from "@/lib/admin-api/format";

export const metadata = {
  title: "Tổng quan - KiotViet",
};

const DAY_LABELS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN", "T2", "T3", "T4", "T5", "T6", "T7", "CN", "T2", "T3", "T4", "T5", "T6", "T7", "CN", "T2", "T3", "T4", "T5", "T6", "T7", "CN", "T2", "T3"];

function RevenueBarChart() {
  const max = Math.max(...revenueByDay);
  return (
    <div className="flex h-44 items-end gap-1">
      {revenueByDay.map((v, i) => (
        <div
          key={i}
          className="group relative flex flex-1 flex-col items-center justify-end self-stretch"
        >
          <div
            className="w-full rounded-t-sm bg-[#0070F4]/80 transition-colors group-hover:bg-[#0070F4]"
            style={{ height: `${Math.max(4, (v / max) * 100)}%` }}
          />
          <span className="mt-1 hidden text-[9px] text-muted-foreground group-hover:block">
            {formatNumber(v / 1000)}k
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-[20px] font-bold text-foreground">Tổng quan</h1>
          <p className="mt-0.5 text-[13px] text-muted-foreground">
            Chi nhánh trung tâm · Hôm nay · {new Date().toLocaleDateString("vi-VN")}
          </p>
        </div>
      </div>

      {/* Kết quả bán hàng hôm nay */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dashboardStats.map((s) => {
          const up = s.delta >= 0;
          return (
            <StatCard
              key={s.label}
              label={s.label}
              value={formatVND(s.value)}
              icon={up ? <TrendingUp className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
              accent={up ? "blue" : "red"}
              footer={
                <span
                  className={`flex items-center gap-1 text-[12px] font-medium ${
                    up ? "text-[#00942F]" : "text-[#E11D48]"
                  }`}
                >
                  {up ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {up ? "+" : ""}
                  {s.delta}%
                  <span className="font-normal text-muted-foreground">
                    {s.deltaLabel}
                  </span>
                </span>
              }
            />
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Doanh thu thuần */}
        <div className="rounded-xl border bg-white lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b px-5 py-4">
            <div>
              <h2 className="text-[15px] font-semibold text-foreground">
                Doanh thu thuần
              </h2>
              <p className="mt-1 text-[20px] font-bold text-foreground">
                {formatVND(12325000)}
              </p>
            </div>
            <select className="h-8 rounded-lg border border-border bg-white px-2 text-[13px] text-muted-foreground">
              <option>Tháng này</option>
              <option>Hôm nay</option>
              <option>Hôm qua</option>
              <option>7 ngày qua</option>
              <option>Tháng trước</option>
            </select>
          </div>
          <div className="px-5 py-4">
            <RevenueBarChart />
            <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
              <span>{DAY_LABELS[0]}</span>
              <span>{DAY_LABELS[10]}</span>
              <span>{DAY_LABELS[20]}</span>
              <span>{DAY_LABELS[29]}</span>
            </div>
          </div>
        </div>

        {/* Top 10 khách mua nhiều nhất */}
        <div className="rounded-xl border bg-white">
          <div className="flex items-center justify-between border-b px-5 py-4">
            <h2 className="text-[15px] font-semibold text-foreground">
              Top 10 khách mua nhiều
            </h2>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <ul className="divide-y divide-border/60">
            {topCustomers.slice(0, 6).map((c) => (
              <li key={c.rank} className="flex items-center gap-3 px-5 py-2.5">
                <span className="w-5 text-[13px] font-bold text-muted-foreground">
                  {c.rank}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium text-foreground/90">
                    {c.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {formatNumber(c.orders)} đơn · {c.ratio}%
                  </p>
                </div>
                <span className="text-[13px] font-semibold text-foreground">
                  {formatVND(c.revenue)}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t px-5 py-3">
            <Link
              href="/quan-ly/khach-hang"
              className="text-[13px] font-medium text-primary hover:underline"
            >
              Xem tất cả khách hàng
            </Link>
          </div>
        </div>
      </div>

      {/* Top 10 hàng bán chạy */}
      <div className="rounded-xl border bg-white">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b px-5 py-4">
          <h2 className="text-[15px] font-semibold text-foreground">
            Top 10 hàng bán chạy
          </h2>
          <select className="h-8 rounded-lg border border-border bg-white px-2 text-[13px] text-muted-foreground">
            <option>Theo doanh thu thuần</option>
            <option>Theo số lượng</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-[13px]">
            <thead>
              <tr className="border-b bg-muted/40 text-[12px] text-muted-foreground">
                <th className="px-5 py-2.5 font-medium">#</th>
                <th className="px-5 py-2.5 font-medium">Mã hàng</th>
                <th className="px-5 py-2.5 font-medium">Tên hàng</th>
                <th className="px-5 py-2.5 font-medium text-right">Số lượng</th>
                <th className="px-5 py-2.5 font-medium text-right">Doanh thu</th>
                <th className="px-5 py-2.5 font-medium text-right">Tỷ trọng</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p) => (
                <tr key={p.rank} className="border-b last:border-0 hover:bg-muted/30">
                  <td className="px-5 py-3 text-muted-foreground">{p.rank}</td>
                  <td className="px-5 py-3 font-medium text-primary">{p.code}</td>
                  <td className="px-5 py-3 text-foreground/90">{p.name}</td>
                  <td className="px-5 py-3 text-right">{formatNumber(p.qty)}</td>
                  <td className="px-5 py-3 text-right font-semibold text-foreground">
                    {formatVND(p.revenue)}
                  </td>
                  <td className="px-5 py-3 text-right text-muted-foreground">
                    {p.ratio}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
