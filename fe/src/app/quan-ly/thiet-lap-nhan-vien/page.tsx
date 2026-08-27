"use client";

import { useState } from "react";
import { CalendarClock, Calculator, RotateCcw, Settings2, Users } from "lucide-react";
import { PageHeader } from "@/components/admin/page-header";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "employee", label: "Nhân viên", icon: <Users className="h-4 w-4" /> },
  { id: "timesheet", label: "Chấm công", icon: <CalendarClock className="h-4 w-4" /> },
  { id: "commission", label: "Hoa hồng", icon: <Calculator className="h-4 w-4" /> },
  { id: "clear-data", label: "Xóa dữ liệu", icon: <RotateCcw className="h-4 w-4" /> },
] as const;

type TabId = (typeof TABS)[number]["id"];

function Row({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-border py-4 last:border-b-0">
      <div>
        <p className="text-[13px] font-medium text-foreground">{label}</p>
        {desc && <p className="mt-0.5 text-[12px] text-muted-foreground">{desc}</p>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={cn("relative h-6 w-11 rounded-full transition-colors", on ? "bg-primary" : "bg-border")}
      aria-pressed={on}
    >
      <span className={cn("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all", on ? "left-[22px]" : "left-0.5")} />
    </button>
  );
}

function TextInput({ defaultValue, className }: { defaultValue: string; className?: string }) {
  const [v, setV] = useState(defaultValue);
  return (
    <input
      value={v}
      onChange={(e) => setV(e.target.value)}
      className={cn("kv-input h-9 w-40 rounded-md border border-border bg-card px-3 text-[13px] text-foreground outline-none focus:border-primary", className)}
    />
  );
}

export default function ThietLapNhanVienPage() {
  const [tab, setTab] = useState<TabId>("employee");
  const [commissionEnabled, setCommissionEnabled] = useState(true);
  const [pinRequired, setPinRequired] = useState(true);
  const [timesheetEnabled, setTimesheetEnabled] = useState(true);
  const [autoLock, setAutoLock] = useState(false);

  return (
    <div className="space-y-4">
      <PageHeader title="Thiết lập nhân viên" subtitle="Cấu hình tài khoản, chấm công, hoa hồng và dữ liệu nhân viên" />

      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-56 lg:shrink-0">
          <div className="flex gap-1 overflow-x-auto rounded-lg border border-border bg-card p-1 lg:flex-col lg:overflow-visible">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "flex items-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-[13px] font-medium transition-colors",
                  tab === t.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-lg border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-5 py-4">
            <Settings2 className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-[14px] font-semibold text-foreground">
              {TABS.find((t) => t.id === tab)?.label}
            </h2>
          </div>

          {tab === "employee" && (
            <div className="px-5">
              <Row label="Bắt buộc nhập mã PIN khi bán hàng" desc="Yêu cầu nhân viên nhập mã PIN cá nhân trước khi thao tác bán hàng">
                <Toggle on={pinRequired} onChange={() => setPinRequired((v) => !v)} />
              </Row>
              <Row label="Cho phép sửa giá bán" desc="Nhân viên được phép thay đổi giá khi lập hóa đơn">
                <Toggle on onChange={() => {}} />
              </Row>
              <Row label="Cho phép xóa hóa đơn" desc="Nhân viên được phép xóa hóa đơn đã lập">
                <Toggle on={false} onChange={() => {}} />
              </Row>
              <Row label="Mã nhân viên bắt đầu từ" desc="Tiền tố mã nhân viên tự sinh">
                <TextInput defaultValue="NV" className="w-24" />
              </Row>
              <Row label="Kỳ công mặc định" desc="Ngày bắt đầu kỳ công hàng tháng">
                <TextInput defaultValue="01" className="w-20" />
              </Row>
            </div>
          )}

          {tab === "timesheet" && (
            <div className="px-5">
              <Row label="Bật chấm công bằng mã PIN" desc="Nhân viên dùng mã PIN để chấm công khi vào/ra ca">
                <Toggle on={timesheetEnabled} onChange={() => setTimesheetEnabled((v) => !v)} />
              </Row>
              <Row label="Tự khóa ca khi hết giờ" desc="Tự động chốt công khi hết ca làm việc">
                <Toggle on={autoLock} onChange={() => setAutoLock((v) => !v)} />
              </Row>
              <Row label="Giờ bắt đầu ca sáng" desc="Mặc định 7:00">
                <TextInput defaultValue="07:00" className="w-24" />
              </Row>
              <Row label="Giờ bắt đầu ca chiều" desc="Mặc định 13:00">
                <TextInput defaultValue="13:00" className="w-24" />
              </Row>
            </div>
          )}

          {tab === "commission" && (
            <div className="px-5">
              <Row label="Tự động tính hoa hồng" desc="Tính hoa hồng theo doanh số từng nhân viên">
                <Toggle on={commissionEnabled} onChange={() => setCommissionEnabled((v) => !v)} />
              </Row>
              <Row label="Tỷ lệ hoa hồng mặc định" desc="Áp dụng khi chưa cấu hình riêng cho nhân viên">
                <TextInput defaultValue="1.0%" className="w-24" />
              </Row>
              <Row label="Tính theo doanh số thực thu" desc="Không bao gồm đơn trả hàng">
                <Toggle on onChange={() => {}} />
              </Row>
            </div>
          )}

          {tab === "clear-data" && (
            <div className="px-5">
              <Row label="Xóa dữ liệu nhân viên" desc="Xóa toàn bộ nhân viên, bảng chấm công và hoa hồng. Không thể hoàn tác.">
                <button className="kv-btn kv-btn--md border border-destructive/30 text-destructive hover:bg-destructive/5">Xóa dữ liệu</button>
              </Row>
              <Row label="Xuất file mẫu nhân viên" desc="Tải file Excel mẫu để nhập khối lượng nhân viên">
                <button className="kv-btn kv-btn--md border border-border text-foreground hover:bg-muted">Tải mẫu</button>
              </Row>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
