export interface Invoice {
  id: string;
  code: string;
  createdAt: string;
  time: string;
  customerCode: string;
  customer: string;
  phone: string;
  creator: string;
  branch: string;
  channel: string;
  status: "Đã thanh toán" | "Chưa thanh toán" | "Đã hủy";
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  paymentMethod: string;
}

export const invoiceStatuses = ["Đã thanh toán", "Chưa thanh toán", "Đã hủy"] as const;

const CUSTOMERS = [
  { code: "KH000001", name: "Nguyễn Văn An", phone: "0912345678" },
  { code: "KH000002", name: "Trần Thị Bích", phone: "0987654321" },
  { code: "KH000003", name: "Lê Văn Cường", phone: "0901122334" },
  { code: "KH000004", name: "Phạm Thị Diệu", phone: "0935567788" },
  { code: "KH000005", name: "Công ty TNHH Minh Anh", phone: "02439290088" },
  { code: "KH000008", name: "Cửa hàng An Khang", phone: "0669876543" },
  { code: "KH000011", name: "Công ty CP Phú Mỹ", phone: "02838221122" },
  { code: "KH000016", name: "Khách lẻ", phone: "0900000000" },
];

const raw: Omit<Invoice, "id">[] = [
  { code: "HD000048", createdAt: "2026-08-13T09:50:00", time: "09:50", customerCode: "KH000016", customer: "Khách lẻ", phone: "0900000000", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã thanh toán", subtotal: 165000, discount: 0, tax: 0, total: 165000, paymentMethod: "Tiền mặt" },
  { code: "HD000047", createdAt: "2026-08-13T09:30:00", time: "09:30", customerCode: "KH000001", customer: "Nguyễn Văn An", phone: "0912345678", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã thanh toán", subtotal: 320000, discount: 0, tax: 0, total: 320000, paymentMethod: "Chuyển khoản" },
  { code: "HD000046", createdAt: "2026-08-13T09:12:00", time: "09:12", customerCode: "KH000002", customer: "Trần Thị Bích", phone: "0987654321", creator: "quanghn", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã thanh toán", subtotal: 540000, discount: 20000, tax: 0, total: 520000, paymentMethod: "Tiền mặt" },
  { code: "HD000045", createdAt: "2026-08-13T08:45:00", time: "08:45", customerCode: "KH000004", customer: "Phạm Thị Diệu", phone: "0935567788", creator: "hucuong", branch: "Chi nhánh trung tâm", channel: "Facebook Fanpage", status: "Đã thanh toán", subtotal: 1120000, discount: 0, tax: 0, total: 1120000, paymentMethod: "Chuyển khoản" },
  { code: "HD000044", createdAt: "2026-08-12T18:10:00", time: "18:10", customerCode: "KH000016", customer: "Khách lẻ", phone: "0900000000", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã thanh toán", subtotal: 86000, discount: 0, tax: 0, total: 86000, paymentMethod: "Tiền mặt" },
  { code: "HD000043", createdAt: "2026-08-12T16:30:00", time: "16:30", customerCode: "KH000005", customer: "Công ty TNHH Minh Anh", phone: "02439290088", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Website", status: "Chưa thanh toán", subtotal: 2450000, discount: 50000, tax: 0, total: 2400000, paymentMethod: "Công nợ" },
  { code: "HD000042", createdAt: "2026-08-12T14:05:00", time: "14:05", customerCode: "KH000008", customer: "Cửa hàng An Khang", phone: "0669876543", creator: "quanghn", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã thanh toán", subtotal: 1890000, discount: 0, tax: 0, total: 1890000, paymentMethod: "Chuyển khoản" },
  { code: "HD000041", createdAt: "2026-08-12T10:20:00", time: "10:20", customerCode: "KH000003", customer: "Lê Văn Cường", phone: "0901122334", creator: "hucuong", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã thanh toán", subtotal: 95000, discount: 0, tax: 0, total: 95000, paymentMethod: "Tiền mặt" },
  { code: "HD000040", createdAt: "2026-08-11T17:55:00", time: "17:55", customerCode: "KH000016", customer: "Khách lẻ", phone: "0900000000", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã thanh toán", subtotal: 240000, discount: 0, tax: 0, total: 240000, paymentMethod: "Quét QR" },
  { code: "HD000039", createdAt: "2026-08-11T15:40:00", time: "15:40", customerCode: "KH000002", customer: "Trần Thị Bích", phone: "0987654321", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã thanh toán", subtotal: 720000, discount: 0, tax: 0, total: 720000, paymentMethod: "Chuyển khoản" },
  { code: "HD000038", createdAt: "2026-08-11T09:15:00", time: "09:15", customerCode: "KH000005", customer: "Công ty TNHH Minh Anh", phone: "02439290088", creator: "quanghn", branch: "Chi nhánh trung tâm", channel: "Website", status: "Chưa thanh toán", subtotal: 2350000, discount: 0, tax: 100000, total: 2450000, paymentMethod: "Công nợ" },
  { code: "HD000037", createdAt: "2026-08-10T16:20:00", time: "16:20", customerCode: "KH000004", customer: "Phạm Thị Diệu", phone: "0935567788", creator: "hucuong", branch: "Chi nhánh trung tâm", channel: "Facebook Fanpage", status: "Đã thanh toán", subtotal: 1560000, discount: 0, tax: 0, total: 1560000, paymentMethod: "Chuyển khoản" },
  { code: "HD000036", createdAt: "2026-08-10T11:00:00", time: "11:00", customerCode: "KH000011", customer: "Công ty CP Phú Mỹ", phone: "02838221122", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã thanh toán", subtotal: 980000, discount: 0, tax: 0, total: 980000, paymentMethod: "Công nợ" },
  { code: "HD000035", createdAt: "2026-08-09T19:30:00", time: "19:30", customerCode: "KH000016", customer: "Khách lẻ", phone: "0900000000", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã hủy", subtotal: 320000, discount: 0, tax: 0, total: 0, paymentMethod: "Tiền mặt" },
  { code: "HD000034", createdAt: "2026-08-09T14:10:00", time: "14:10", customerCode: "KH000008", customer: "Cửa hàng An Khang", phone: "0669876543", creator: "quanghn", branch: "Chi nhánh Lê Văn Sỹ", channel: "Tại cửa hàng", status: "Đã thanh toán", subtotal: 4200000, discount: 100000, tax: 0, total: 4100000, paymentMethod: "Công nợ" },
  { code: "HD000033", createdAt: "2026-08-08T17:45:00", time: "17:45", customerCode: "KH000003", customer: "Lê Văn Cường", phone: "0901122334", creator: "hucuong", branch: "Chi nhánh trung tâm", channel: "Tiktok Shop", status: "Đã thanh toán", subtotal: 685000, discount: 0, tax: 0, total: 685000, paymentMethod: "Chuyển khoản" },
  { code: "HD000032", createdAt: "2026-08-08T10:30:00", time: "10:30", customerCode: "KH000001", customer: "Nguyễn Văn An", phone: "0912345678", creator: "hantrung", branch: "Chi nhánh trung tâm", channel: "Tại cửa hàng", status: "Đã thanh toán", subtotal: 125000, discount: 0, tax: 0, total: 125000, paymentMethod: "Tiền mặt" },
];

export const invoices: Invoice[] = raw.map((r, i) => ({ ...r, id: `INV-${String(i + 1).padStart(3, "0")}` }));