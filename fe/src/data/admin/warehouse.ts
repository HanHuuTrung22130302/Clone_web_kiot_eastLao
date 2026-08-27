export interface StockTake {
  id: string;
  code: string;
  time: string;
  createdAt: string;
  creator: string;
  balancer: string;
  balanceDate: string;
  actualQty: number;
  totalActual: number;
  totalDiff: number;
  totalValueDiff: number;
  diffUpQty: number;
  diffUpValue: number;
  diffDownQty: number;
  diffDownValue: number;
  note: string;
  status: "Chờ cân bằng" | "Đã cân bằng" | "Đã hủy";
}

export const stockTakes: StockTake[] = [
  { id: "ST001", code: "KK000009", time: "2026-08-13T08:30:00", createdAt: "2026-08-13T08:30:00", creator: "hantrung", balancer: "—", balanceDate: "—", actualQty: 380, totalActual: 12850000, totalDiff: 0, totalValueDiff: 0, diffUpQty: 0, diffUpValue: 0, diffDownQty: 0, diffDownValue: 0, note: "Kiểm kho định kỳ tháng 8", status: "Chờ cân bằng" },
  { id: "ST002", code: "KK000008", time: "2026-08-10T09:00:00", createdAt: "2026-08-10T09:00:00", creator: "quanghn", balancer: "hantrung", balanceDate: "2026-08-10T11:30:00", actualQty: 405, totalActual: 14300000, totalDiff: -3, totalValueDiff: -96000, diffUpQty: 0, diffUpValue: 0, diffDownQty: 3, diffDownValue: 96000, note: "Phát hiện hao hụt đồ uống", status: "Đã cân bằng" },
  { id: "ST003", code: "KK000007", time: "2026-08-05T14:00:00", createdAt: "2026-08-05T14:00:00", creator: "hucuong", balancer: "quanghn", balanceDate: "2026-08-05T16:20:00", actualQty: 420, totalActual: 15100000, totalDiff: 2, totalValueDiff: 65000, diffUpQty: 2, diffUpValue: 65000, diffDownQty: 0, diffDownValue: 0, note: "Thừa 2 hộp sữa", status: "Đã cân bằng" },
  { id: "ST004", code: "KK000006", time: "2026-07-30T10:00:00", createdAt: "2026-07-30T10:00:00", creator: "hantrung", balancer: "hantrung", balanceDate: "2026-07-30T12:00:00", actualQty: 395, totalActual: 13900000, totalDiff: 0, totalValueDiff: 0, diffUpQty: 0, diffUpValue: 0, diffDownQty: 0, diffDownValue: 0, note: "", status: "Đã cân bằng" },
  { id: "ST005", code: "KK000005", time: "2026-07-20T09:30:00", createdAt: "2026-07-20T09:30:00", creator: "quanghn", balancer: "—", balanceDate: "—", actualQty: 0, totalActual: 0, totalDiff: 0, totalValueDiff: 0, diffUpQty: 0, diffUpValue: 0, diffDownQty: 0, diffDownValue: 0, note: "Hủy do thiếu nhân sự", status: "Đã hủy" },
  { id: "ST006", code: "KK000004", time: "2026-07-15T14:30:00", createdAt: "2026-07-15T14:30:00", creator: "hucuong", balancer: "hucuong", balanceDate: "2026-07-15T16:40:00", actualQty: 410, totalActual: 14600000, totalDiff: -5, totalValueDiff: -210000, diffUpQty: 0, diffUpValue: 0, diffDownQty: 5, diffDownValue: 210000, note: "Hao hụt bánh kẹo", status: "Đã cân bằng" },
];

export interface InternalUse {
  id: string;
  code: string;
  type: string;
  createdAt: string;
  time: string;
  totalValue: number;
  branch: string;
  note: string;
  status: "Phiếu tạm" | "Đã xác nhận" | "Đã hủy";
  creator: string;
  issuer: string;
  receiver: string;
}

export const internalUses: InternalUse[] = [
  { id: "IU001", code: "XDNB000004", type: "Xuất dùng nội bộ", createdAt: "2026-08-12T10:20:00", time: "10:20", totalValue: 86000, branch: "Chi nhánh trung tâm", note: "Dùng cho bếp thử món", status: "Đã xác nhận", creator: "hantrung", issuer: "hantrung", receiver: "Nhà bếp" },
  { id: "IU002", code: "XDNB000003", type: "Xuất dùng nội bộ", createdAt: "2026-08-08T15:00:00", time: "15:00", totalValue: 245000, branch: "Chi nhánh trung tâm", note: "Đồ dùng cho nhân viên", status: "Phiếu tạm", creator: "quanghn", issuer: "quanghn", receiver: "Nhân viên" },
  { id: "IU003", code: "XDNB000002", type: "Trưng bày", createdAt: "2026-08-01T09:00:00", time: "09:00", totalValue: 150000, branch: "Chi nhánh Lê Văn Sỹ", note: "Hàng trưng bày quầy", status: "Đã xác nhận", creator: "hucuong", issuer: "hucuong", receiver: "Quầy 1" },
  { id: "IU004", code: "XDNB000001", type: "Chấm điểm hàng mẫu", createdAt: "2026-07-28T11:00:00", time: "11:00", totalValue: 32000, branch: "Chi nhánh trung tâm", note: "Hàng mẫu cho khách", status: "Đã hủy", creator: "hantrung", issuer: "hantrung", receiver: "Khách" },
];

export interface DamageItem {
  id: string;
  code: string;
  createdAt: string;
  time: string;
  totalValue: number;
  branch: string;
  note: string;
  status: "Phiếu tạm" | "Đã xác nhận" | "Đã hủy";
  creator: string;
}

export const damageItems: DamageItem[] = [
  { id: "DI001", code: "XH000003", createdAt: "2026-08-12T16:30:00", time: "16:30", totalValue: 45000, branch: "Chi nhánh trung tâm", note: "Bánh kẹo quá hạn", status: "Đã xác nhận", creator: "hantrung" },
  { id: "DI002", code: "XH000002", createdAt: "2026-08-05T14:10:00", time: "14:10", totalValue: 120000, branch: "Chi nhánh Lê Văn Sỹ", note: "Nước ngọt bị móp", status: "Phiếu tạm", creator: "quanghn" },
  { id: "DI003", code: "XH000001", createdAt: "2026-07-22T10:00:00", time: "10:00", totalValue: 85000, branch: "Chi nhánh trung tâm", note: "Mỹ phẩm hư hỏng do rơi", status: "Đã xác nhận", creator: "hucuong" },
];
