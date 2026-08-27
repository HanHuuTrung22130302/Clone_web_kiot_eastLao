"use client";

import { Plus, ShieldCheck } from "lucide-react";
import { AdminListPage } from "@/components/admin/admin-list-page";
import { StatusBadge } from "@/components/admin/status-badge";
import { adminApi } from "@/lib/admin-api/services";
import type { WarrantyItem } from "@/data/admin/warranty";
import type { Column } from "@/components/admin/data-table";
import { formatDateTime } from "@/lib/admin-api/format";

const COLUMNS: Column<WarrantyItem>[] = [
  { key: "code", header: "Mã hàng", sortable: true, render: (w) => <span className="font-medium text-primary">{w.code}</span> },
  { key: "name", header: "Tên hàng", sortable: true, render: (w) => (
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-muted/60 text-muted-foreground">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <p className="max-w-[220px] truncate font-medium text-foreground">{w.name}</p>
      </div>
    ) },
  { key: "serial", header: "Serial / IMEI", render: (w) => <span className="whitespace-nowrap text-muted-foreground">{w.serial}</span> },
  { key: "invoiceCode", header: "Hóa đơn mua", render: (w) => <span className="text-muted-foreground">{w.invoiceCode}</span> },
  { key: "time", header: "Thời gian mua", render: (w) => <span className="whitespace-nowrap text-muted-foreground">{formatDateTime(w.time)}</span> },
  { key: "customer", header: "Khách hàng", render: (w) => <span className="max-w-[160px] truncate text-foreground/90">{w.customer}</span> },
  { key: "maxWarranty", header: "Bảo hành tối đa", render: (w) => <span className="whitespace-nowrap text-muted-foreground">{w.maxWarranty}</span> },
  { key: "expiredAt", header: "Hết hạn bảo hành", render: (w) => <span className="whitespace-nowrap text-muted-foreground">{w.expiredAt}</span> },
  { key: "status", header: "Trạng thái", render: (w) => <StatusBadge label={w.status} /> },
];

export default function BaoHanhBaoTriPage() {
  return (
    <AdminListPage<WarrantyItem>
      title="Bảo hành, bảo trì"
      actions={
        <button className="kv-btn kv-btn--primary kv-btn--md">
          <Plus className="h-4 w-4" />
          Thêm bảo hành
        </button>
      }
      fetcher={(params) => adminApi.warranties.items(params)}
      columns={COLUMNS}
      rowKey={(w) => w.id}
      chips={[{ label: "Đang bảo hành" }, { label: "Còn bảo hành" }, { label: "Hết hạn" }]}
      chipFilter={(w, chip) => w.status === chip}
      searchKeys={["code", "name", "customer", "serial", "phone"]}
      searchPlaceholder="Tìm theo mã hàng, tên hàng, serial..."
      exportFilename="danh-sach-bao-hanh"
      minWidth={1200}
    />
  );
}
