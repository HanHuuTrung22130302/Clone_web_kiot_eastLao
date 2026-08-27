export interface StatItem {
  label: string;
  value: number;
  delta: number;
  deltaLabel?: string;
  sub?: string;
}

export interface TopProduct {
  rank: number;
  code: string;
  name: string;
  qty: number;
  revenue: number;
  ratio: number;
}

export interface TopCustomer {
  rank: number;
  code: string;
  name: string;
  orders: number;
  revenue: number;
  ratio: number;
}

export interface SaleRow {
  id: string;
  code: string;
  name: string;
  category: string;
  qty: number;
  revenue: number;
  discount: number;
  cost: number;
  profit: number;
}

export interface OrderReportRow {
  id: string;
  code: string;
  time: string;
  status: string;
  totalOrders: number;
  totalQty: number;
  totalValue: number;
}

export interface UserReportRow {
  id: string;
  username: string;
  name: string;
  invoices: number;
  orders: number;
  revenue: number;
  returns: number;
}

export interface ChannelReportRow {
  id: string;
  channel: string;
  orders: number;
  qty: number;
  revenue: number;
  ratio: number;
}

export interface SupplierReportRow {
  id: string;
  code: string;
  name: string;
  purchases: number;
  qty: number;
  totalValue: number;
  returns: number;
  returnValue: number;
}

export interface CustomerReportRow {
  id: string;
  code: string;
  name: string;
  invoices: number;
  qty: number;
  revenue: number;
  debt: number;
}

// Dashboard: Kết quả bán hàng hôm nay
export const dashboardStats: StatItem[] = [
  { label: "Doanh thu", value: 12450000, delta: 8.2, deltaLabel: "So với hôm qua" },
  { label: "Trả hàng", value: 125000, delta: -2.1, deltaLabel: "So với hôm qua" },
  { label: "Doanh thu thuần", value: 12325000, delta: 8.6, deltaLabel: "So với hôm qua" },
];

export const revenueByDay: number[] = [
  4200000, 5100000, 4800000, 6200000, 7300000, 9800000, 10400000, 9200000, 8700000, 12300000, 11400000, 12100000, 13200000, 12600000, 11800000, 13900000, 14500000, 13800000, 15200000, 16800000, 15900000, 17500000, 18300000, 17200000, 18900000, 19500000, 20100000, 19300000, 18700000, 12450000,
];

export const topProducts: TopProduct[] = [
  { rank: 1, code: "CF-001", name: "Cà phê Robusta 500g", qty: 32, revenue: 3040000, ratio: 24.6 },
  { rank: 2, code: "DM-001", name: "Điện thoại Samsung Galaxy A15 128GB", qty: 3, revenue: 16470000, ratio: 21.8 },
  { rank: 3, code: "SUA-001", name: "Sữa tươi TH True Milk 1L", qty: 58, revenue: 1856000, ratio: 15.1 },
  { rank: 4, code: "NC-001", name: "Nước ngọt Coca-Cola 390ml", qty: 74, revenue: 888000, ratio: 12.9 },
  { rank: 5, code: "GA-001", name: "Gạo ST25 5kg", qty: 12, revenue: 1980000, ratio: 8.4 },
  { rank: 6, code: "LT-001", name: "Laptop Dell Inspiron 15", qty: 1, revenue: 14500000, ratio: 6.2 },
  { rank: 7, code: "GT-001", name: "Giày thể thao Nike Air", qty: 2, revenue: 3780000, ratio: 3.1 },
  { rank: 8, code: "TB-001", name: "Tai nghe Bluetooth Xiaomi Redmi Buds 4", qty: 4, revenue: 2360000, ratio: 2.4 },
  { rank: 9, code: "DG-001", name: "Dầu gội Clear Men 350g", qty: 5, revenue: 445000, ratio: 1.9 },
  { rank: 10, code: "KD-001", name: "Kem đánh răng P/S 175g", qty: 6, revenue: 144000, ratio: 1.2 },
];

export const topCustomers: TopCustomer[] = [
  { rank: 1, code: "KH000005", name: "Công ty TNHH Minh Anh", orders: 8, revenue: 12400000, ratio: 18.5 },
  { rank: 2, code: "KH000008", name: "Cửa hàng An Khang", orders: 6, revenue: 9800000, ratio: 14.2 },
  { rank: 3, code: "KH000011", name: "Công ty CP Phú Mỹ", orders: 4, revenue: 7600000, ratio: 11.6 },
  { rank: 4, code: "KH000002", name: "Trần Thị Bích", orders: 7, revenue: 5400000, ratio: 8.9 },
  { rank: 5, code: "KH000001", name: "Nguyễn Văn An", orders: 5, revenue: 3200000, ratio: 6.4 },
  { rank: 6, code: "KH000004", name: "Phạm Thị Diệu", orders: 4, revenue: 2800000, ratio: 5.2 },
  { rank: 7, code: "KH000013", name: "Trần Minh Phúc", orders: 3, revenue: 2400000, ratio: 4.8 },
  { rank: 8, code: "KH000009", name: "Đỗ Văn Hưng", orders: 2, revenue: 1500000, ratio: 3.1 },
  { rank: 9, code: "KH000016", name: "Khách lẻ", orders: 12, revenue: 980000, ratio: 2.4 },
  { rank: 10, code: "KH000010", name: "Bà Mai Lan", orders: 3, revenue: 720000, ratio: 1.6 },
];

export const saleReportRows: SaleRow[] = [
  { id: "R01", code: "CF-001", name: "Cà phê Robusta 500g", category: "Đồ uống", qty: 32, revenue: 3040000, discount: 120000, cost: 2240000, profit: 680000 },
  { id: "R02", code: "SUA-001", name: "Sữa tươi TH True Milk 1L", category: "Đồ uống", qty: 58, revenue: 1856000, discount: 0, cost: 1450000, profit: 406000 },
  { id: "R03", code: "NC-001", name: "Nước ngọt Coca-Cola 390ml", category: "Đồ uống", qty: 74, revenue: 888000, discount: 0, cost: 703000, profit: 185000 },
  { id: "R04", code: "DM-001", name: "Điện thoại Samsung Galaxy A15 128GB", category: "Điện thoại", qty: 3, revenue: 16470000, discount: 300000, cost: 15300000, profit: 1170000 },
  { id: "R05", code: "GA-001", name: "Gạo ST25 5kg", category: "Thực phẩm", qty: 12, revenue: 1980000, discount: 0, cost: 1680000, profit: 300000 },
  { id: "R06", code: "GT-001", name: "Giày thể thao Nike Air", category: "Thời trang", qty: 2, revenue: 3780000, discount: 0, cost: 2900000, profit: 880000 },
  { id: "R07", code: "LT-001", name: "Laptop Dell Inspiron 15", category: "Máy tính", qty: 1, revenue: 14500000, discount: 200000, cost: 13200000, profit: 1300000 },
  { id: "R08", code: "TB-001", name: "Tai nghe Bluetooth Xiaomi Redmi Buds 4", category: "Phụ kiện công nghệ", qty: 4, revenue: 2360000, discount: 0, cost: 1800000, profit: 560000 },
  { id: "R09", code: "SP-001", name: "Sữa rửa mặt Cetaphil 125ml", category: "Mỹ phẩm", qty: 3, revenue: 960000, discount: 0, cost: 750000, profit: 210000 },
  { id: "R10", code: "MD-001", name: "Máy đếm tiền", category: "Máy văn phòng", qty: 1, revenue: 1250000, discount: 0, cost: 980000, profit: 270000 },
];

export const orderReportRows: OrderReportRow[] = [
  { id: "OR01", code: "DH000013", time: "2026-08-13", status: "Phiếu tạm", totalOrders: 1, totalQty: 5, totalValue: 425000 },
  { id: "OR02", code: "DH000012", time: "2026-08-13", status: "Đã xác nhận", totalOrders: 1, totalQty: 3, totalValue: 1320000 },
  { id: "OR03", code: "DH000011", time: "2026-08-13", status: "Hoàn thành", totalOrders: 1, totalQty: 6, totalValue: 540000 },
  { id: "OR04", code: "DH000010", time: "2026-08-12", status: "Đang giao hàng", totalOrders: 1, totalQty: 8, totalValue: 2450000 },
  { id: "OR05", code: "DH000009", time: "2026-08-12", status: "Đã xác nhận", totalOrders: 1, totalQty: 4, totalValue: 860000 },
  { id: "OR06", code: "DH000008", time: "2026-08-12", status: "Hoàn thành", totalOrders: 1, totalQty: 2, totalValue: 310000 },
  { id: "OR07", code: "DH000007", time: "2026-08-11", status: "Đang giao hàng", totalOrders: 1, totalQty: 7, totalValue: 1890000 },
  { id: "OR08", code: "DH000006", time: "2026-08-11", status: "Hoàn thành", totalOrders: 1, totalQty: 3, totalValue: 720000 },
];

export const userReportRows: UserReportRow[] = [
  { id: "UR01", username: "hantrung", name: "Hantrung", invoices: 32, orders: 45, revenue: 18500000, returns: 3 },
  { id: "UR02", username: "quanghn", name: "Hoàng Nam Quang", invoices: 28, orders: 38, revenue: 16200000, returns: 5 },
  { id: "UR03", username: "hucuong", name: "Nguyễn Lê Hùng Cường", invoices: 25, orders: 30, revenue: 12800000, returns: 4 },
];

export const channelReportRows: ChannelReportRow[] = [
  { id: "CH01", channel: "Tại cửa hàng", orders: 46, qty: 120, revenue: 28600000, ratio: 42 },
  { id: "CH02", channel: "Website", orders: 22, qty: 48, revenue: 19500000, ratio: 29 },
  { id: "CH03", channel: "Shopee / Lazada / Tiki / Sendo", orders: 15, qty: 35, revenue: 9800000, ratio: 15 },
  { id: "CH04", channel: "Facebook Fanpage", orders: 8, qty: 18, revenue: 5200000, ratio: 8 },
  { id: "CH05", channel: "Tiktok Shop", orders: 6, qty: 12, revenue: 3800000, ratio: 6 },
];

export const supplierReportRows: SupplierReportRow[] = [
  { id: "SR01", code: "NCC000001", name: "Công ty TNHH Việt Hưng", purchases: 5, qty: 320, totalValue: 48000000, returns: 1, returnValue: 1500000 },
  { id: "SR02", code: "NCC000009", name: "Phân phối điện thoại Hoàng Nam", purchases: 3, qty: 60, totalValue: 42000000, returns: 1, returnValue: 5400000 },
  { id: "SR03", code: "NCC000003", name: "Công ty TNHH An Thịnh", purchases: 4, qty: 180, totalValue: 22000000, returns: 0, returnValue: 0 },
  { id: "SR04", code: "NCC000005", name: "Công ty CP Phân phối Sài Gòn", purchases: 2, qty: 150, totalValue: 15000000, returns: 0, returnValue: 0 },
  { id: "SR05", code: "NCC000006", name: "Kho gạo Bến Tre", purchases: 3, qty: 80, totalValue: 12000000, returns: 0, returnValue: 0 },
];

export const customerReportRows: CustomerReportRow[] = [
  { id: "CR01", code: "KH000005", name: "Công ty TNHH Minh Anh", invoices: 12, qty: 88, revenue: 46300000, debt: 5200000 },
  { id: "CR02", code: "KH000008", name: "Cửa hàng An Khang", invoices: 10, qty: 65, revenue: 12600000, debt: 800000 },
  { id: "CR03", code: "KH000002", name: "Trần Thị Bích", invoices: 9, qty: 42, revenue: 18200000, debt: 1500000 },
  { id: "CR04", code: "KH000004", name: "Phạm Thị Diệu", invoices: 7, qty: 30, revenue: 9750000, debt: 0 },
  { id: "CR05", code: "KH000011", name: "Công ty CP Phú Mỹ", invoices: 5, qty: 24, revenue: 9800000, debt: 2000000 },
];

export interface EndOfDayRow {
  id: string;
  code: string;
  time: string;
  branch: string;
  shift: string;
  cashStart: number;
  cashIn: number;
  cashOut: number;
  cashEnd: number;
  cashier: string;
  status: "Đã khóa" | "Đang mở";
}

export const endOfDayRows: EndOfDayRow[] = [
  { id: "EOD01", code: "CN000012", time: "2026-08-12T21:30:00", branch: "Chi nhánh trung tâm", shift: "Ca sáng", cashStart: 2000000, cashIn: 9500000, cashOut: 1200000, cashEnd: 10300000, cashier: "hucuong", status: "Đã khóa" },
  { id: "EOD02", code: "CN000011", time: "2026-08-11T21:00:00", branch: "Chi nhánh trung tâm", shift: "Ca chiều", cashStart: 2000000, cashIn: 8700000, cashOut: 900000, cashEnd: 9800000, cashier: "hantrung", status: "Đã khóa" },
  { id: "EOD03", code: "CN000010", time: "2026-08-10T21:30:00", branch: "Chi nhánh trung tâm", shift: "Ca sáng", cashStart: 2000000, cashIn: 10200000, cashOut: 1500000, cashEnd: 10700000, cashier: "quanghn", status: "Đã khóa" },
  { id: "EOD04", code: "CN000009", time: "2026-08-09T21:15:00", branch: "Chi nhánh Lê Văn Sỹ", shift: "Ca chiều", cashStart: 1500000, cashIn: 5400000, cashOut: 600000, cashEnd: 6300000, cashier: "thaoanh", status: "Đã khóa" },
];

export interface FinancialReportRow {
  id: string;
  label: string;
  value: number;
  note: string;
}

export const financialReportRows: FinancialReportRow[] = [
  { id: "FR01", label: "Doanh thu thuần", value: 125000000, note: "Tổng doanh thu sau trả hàng, giảm giá" },
  { id: "FR02", label: "Chi phí vốn hàng bán", value: 89000000, note: "Giá vốn của hàng bán ra" },
  { id: "FR03", label: "Lợi nhuận gộp", value: 36000000, note: "Doanh thu thuần - chi phí vốn" },
  { id: "FR04", label: "Chi phí vận hành", value: 12800000, note: "Thuê mặt bằng, điện nước, nhân sự" },
  { id: "FR05", label: "Lợi nhuận trước thuế", value: 23200000, note: "Lợi nhuận gộp - chi phí vận hành" },
  { id: "FR06", label: "Thuế thu nhập doanh nghiệp", value: 4640000, note: "20% lợi nhuận trước thuế" },
  { id: "FR07", label: "Lợi nhuận sau thuế", value: 18560000, note: "Lợi nhuận ròng trong kỳ" },
];
