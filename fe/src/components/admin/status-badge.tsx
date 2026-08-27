import { cn } from "@/lib/utils";

type Tone = "success" | "warning" | "danger" | "neutral" | "info" | "primary";

const toneStyles: Record<Tone, string> = {
  success: "bg-[#00B63E]/10 text-[#00942F]",
  warning: "bg-amber-500/10 text-amber-600",
  danger: "bg-destructive/10 text-destructive",
  neutral: "bg-muted text-muted-foreground",
  info: "bg-sky-500/10 text-sky-600",
  primary: "bg-primary/10 text-primary",
};

export function toneForLabel(label?: string): Tone {
  if (!label) return "neutral";
  const l = label.toLowerCase();
  if (l.includes("hoàn thành") || l.includes("thanh toán") || l.includes("đã nhập") || l.includes("đã giao") || l.includes("đã khóa") || l.includes("đã trả") || l.includes("đang bán") || l.includes("đang hợp tác") || l.includes("đang làm") || l.includes("đã khớp") || l.includes("đã xác nhận") || l.includes("đã cân bằng") || l.includes("còn bảo hành"))
    return "success";
  if (l.includes("đang giao") || l.includes("đang sửa") || l.includes("chờ") || l.includes("phiếu tạm") || l.includes("sắp hết") || l.includes("chưa thanh toán") || l.includes("chưa khớp") || l.includes("đang bảo hành") || l.includes("đang mở"))
    return "warning";
  if (l.includes("hủy") || l.includes("ngừng") || l.includes("hết hạn") || l.includes("nghỉ việc") || l.includes("lỗi") || l.includes("trả hàng"))
    return "danger";
  if (l.includes("bán")) return "primary";
  return "neutral";
}

export function StatusBadge({
  label,
  tone,
  className,
}: {
  label: string;
  tone?: Tone;
  className?: string;
}) {
  const t = tone ?? toneForLabel(label);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-medium whitespace-nowrap",
        toneStyles[t],
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {label}
    </span>
  );
}
