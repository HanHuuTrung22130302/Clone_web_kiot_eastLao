export interface Return {
  id: string;
  code: string;
  invoiceCode: string;
  createdAt: string;
  time: string;
  customerCode: string;
  customer: string;
  phone: string;
  creator: string;
  branch: string;
  channel: string;
  status: "Phiếu tạm" | "Đã xác nhận" | "Đã hủy";
  subtotal: number;
  discount: number;
  refundMethod: string;
  total: number;
}

export const returnStatuses = ["Phiếu tạm", "Đã xác nhận", "Đã hủy"] as const;

const CUSTOMERS = [
  { code: "KH000001", name: "Nguyễn Văn An", phone: "0912345678" },
  { code: "KH000002", name: "Trần Thị Bích", phone: "0987654321" },
  { code: "KH000004", name: "Phạm Thị Diệu", phone: "0935567788" },
  { code: "KH000005", name: "Công ty TNHH Minh Anh", phone: "02439290088" },
  { code: "KH000008", name: "Cửa hàng An Khang", phone: "0669876543" },
  { code: "KH000016", name: "Khách lẻ", phone: "0900000000" },
];

const raw: Omit<Return, "id">[] = [
  { code: "TH000009", invoiceCode: "HD000046", createdAt: "2026-08-13T10:05:00", time: "10:05", customerCode: "KH000002", customer: "Trần Thị Bích", phone: "0987654321", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Phiếu tạm", subtotal: 95000, discount: 0, refundMethod: "Tiền mặt", total: 95000 },
  { code: "TH000008", invoiceCode: "HD000044", createdAt: "2026-08-12T18:25:00", time: "18:25", customerCode: "KH000016", customer: "Khách lẻ", phone: "0900000000", creator: "hucuong", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã xác nhận", subtotal: 18000, discount: 0, refundMethod: "Tiền mặt", total: 18000 },
  { code: "TH000007", invoiceCode: "HD000041", createdAt: "2026-08-11T11:30:00", time: "11:30", customerCode: "KH000003", customer: "Lê Văn Cường", phone: "0901122334", creator: "quanghn", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã xác nhận", subtotal: 12000, discount: 0, refundMethod: "Tiền mặt", total: 12000 },
  { code: "TH000006", invoiceCode: "HD000040", createdAt: "2026-08-11T09:45:00", time: "09:45", customerCode: "KH000001", customer: "Nguyễn Văn An", phone: "0912345678", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã xác nhận", subtotal: 32000, discount: 0, refundMethod: "Tiền mặt", total: 32000 },
  { code: "TH000005", invoiceCode: "HD000039", createdAt: "2026-08-10T17:00:00", time: "17:00", customerCode: "KH000004", customer: "Phạm Thị Diệu", phone: "0935567788", creator: "hucuong", branch: "Chi nhánh trung tâm", channel: "Facebook Fanpage", status: "Đã hủy", subtotal: 245000, discount: 0, refundMethod: "Chuyển khoản", total: 0 },
  { code: "TH000004", invoiceCode: "HD000037", createdAt: "2026-08-09T15:20:00", time: "15:20", customerCode: "KH000005", customer: "Công ty TNHH Minh Anh", phone: "02439290088", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Website", status: "Đã xác nhận", subtotal: 560000, discount: 0, refundMethod: "Công nợ", total: 560000 },
  { code: "TH000003", invoiceCode: "HD000034", createdAt: "2026-08-08T16:40:00", time: "16:40", customerCode: "KH000008", customer: "Cửa hàng An Khang", phone: "0669876543", creator: "quanghn", branch: "Chi nhánh Lê Văn Sỹ", channel: "Tại cửa hàng", status: "Đã xác nhận", subtotal: 210000, discount: 0, refundMethod: "Công nợ", total: 210000 },
  { code: "TH000002", invoiceCode: "HD000033", createdAt: "2026-08-07T10:15:00", time: "10:15", customerCode: "KH000016", customer: "Khách lẻ", phone: "0900000000", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã xác nhận", subtotal: 95000, discount: 0, refundMethod: "Tiền mặt", total: 95000 },
  { code: "TH000001", invoiceCode: "HD000030", createdAt: "2026-08-06T14:30:00", time: "14:30", customerCode: "KH000002", customer: "Trần Thị Bích", phone: "0987654321", creator: "hucuong", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã xác nhận", subtotal: 150000, discount: 0, refundMethod: "Tiền mặt", total: 150000 },
];

export const returns: Return[] = raw.map((r, i) => ({ ...r, id: `RTN-${String(i + 1).padStart(3, "0")}` }));