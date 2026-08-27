"use client";

import { FileSpreadsheet } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { adminApi } from "@/lib/admin-api/services";
import type { SaleRow } from "@/data/admin/reports";
import type { Column } from "@/components/admin/data-table";
import { formatVND, formatNumber } from "@/lib/admin-api/format";

const COLUMNS: Column<SaleRow>[] = [
  { key: "code", header: "Mã hàng", sortable: true, render: (r) => <span className="font-medium text-primary">{r.code}</span> },
  { key: "name", header: "Tên hàng hóa", sortable: true, render: (r) => <span className="max-w-[220px] truncate font-medium text-foreground">{r.name}</span> },
  { key: "category", header: "Nhóm hàng", render: (r) => <span className="whitespace-nowrap text-muted-foreground">{r.category}</span> },
  { key: "qty", header: "Số lượng", sortable: true, className: "text-right", render: (r) => <span>{formatNumber(r.qty)}</span> },
  { key: "revenue", header: "Doanh thu", sortable: true, className: "text-right", render: (r) => <span className="font-semibold text-foreground">{formatVND(r.revenue)}</span> },
  { key: "discount", header: "Giảm giá", className: "text-right", render: (r) => <span className={r.discount > 0 ? "text-destructive" : "text-muted-foreground"}>{formatVND(r.discount)}</span> },
  { key: "cost", header: "Giá vốn", className: "text-right", render: (r) => <span className="text-muted-foreground">{formatVND(r.cost)}</span> },
  { key: "profit", header: "Lợi nhuận", sortable: true, className: "text-right", render: (r) => <span className={r.profit >= 0 ? "font-semibold text-[#00942F]" : "text-destructive"}>{formatVND(r.profit)}</span> },
];

export default function BaoCaoBanHangPage() {
  return (
    <AdminListPage<SaleRow>
      title="Báo cáo bán hàng"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <FileSpreadsheet className="h-4 w-4" />
          Xuất file
        </button>
      }
      fetcher={(params) => adminApi.reports.sale(params)}
      columns={COLUMNS}
      rowKey={(r) => r.id}
      selectFilters={[{ key: "category", label: "Nhóm hàng", options: [] }]}
      optionsFetcher={async () => ({ category: [...new Set(saleCategories)] })}
      searchKeys={["code", "name", "category"]}
      searchPlaceholder="Tìm theo mã, tên hàng hóa..."
      exportFilename="bao-cao-ban-hang"
      minWidth={1100}
    />
  );
}

const saleCategories = ["Đồ uống", "Điện thoại", "Thực phẩm", "Thời trang", "Máy tính", "Phụ kiện công nghệ", "Mỹ phẩm", "Máy văn phòng"];
