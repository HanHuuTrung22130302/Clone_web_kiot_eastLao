export interface PriceBook {
  id: string;
  name: string;
  description: string;
  applyAll: boolean;
  priority: number;
  updatedAt: string;
  productCount: number;
}

export const priceBooks: PriceBook[] = [
  { id: "PB001", name: "Bảng giá chung", description: "Giá bán mặc định cho mọi khách hàng", applyAll: true, priority: 1, updatedAt: "2026-08-01T08:00:00", productCount: 36 },
  { id: "PB002", name: "Giá đại lý", description: "Chiết khấu 10% cho nhóm Đại lý", applyAll: false, priority: 2, updatedAt: "2026-07-20T10:00:00", productCount: 30 },
  { id: "PB003", name: "Giá khách sỉ", description: "Chiết khấu 8% khi mua theo lô", applyAll: false, priority: 3, updatedAt: "2026-07-15T14:00:00", productCount: 25 },
  { id: "PB004", name: "Giá doanh nghiệp", description: "Chiết khấu 5% + xuất hóa đơn", applyAll: false, priority: 4, updatedAt: "2026-06-30T09:00:00", productCount: 18 },
];

export interface WarrantyItem {
  id: string;
  code: string;
  name: string;
  qty: number;
  serial: string;
  note: string;
  invoiceCode: string;
  time: string;
  branch: string;
  customer: string;
  phone: string;
  maxWarranty: string;
  expiredAt: string;
  maintenance: string;
  status: "Đang bảo hành" | "Còn bảo hành" | "Hết hạn";
}

export const warrantyItems: WarrantyItem[] = [
  { id: "W001", code: "TB-001", name: "Tai nghe Bluetooth Xiaomi Redmi Buds 4", qty: 1, serial: "SN-XM-0001", note: "Lỗi pin nhanh hết", invoiceCode: "HD000040", time: "2026-08-10T10:30:00", branch: "Chi nhánh trung tâm", customer: "Nguyễn Văn An", phone: "0912345678", maxWarranty: "12 tháng", expiredAt: "2027-08-10", maintenance: "Định kỳ 6 tháng", status: "Đang bảo hành" },
  { id: "W002", code: "DM-001", name: "Điện thoại Samsung Galaxy A15 128GB", qty: 1, serial: "IMEI-352812345678901", note: "", invoiceCode: "HD000034", time: "2026-08-05T09:00:00", branch: "Chi nhánh Lê Văn Sỹ", customer: "Cửa hàng An Khang", phone: "0669876543", maxWarranty: "12 tháng", expiredAt: "2027-08-05", maintenance: "—", status: "Còn bảo hành" },
  { id: "W003", code: "LT-001", name: "Laptop Dell Inspiron 15", qty: 1, serial: "SN-DL-55321", note: "Thay bàn phím", invoiceCode: "HD000030", time: "2026-07-28T14:00:00", branch: "Chi nhánh trung tâm", customer: "Công ty TNHH Minh Anh", phone: "02439290088", maxWarranty: "12 tháng", expiredAt: "2027-07-28", maintenance: "—", status: "Đang bảo hành" },
  { id: "W004", code: "MA-001", name: "Máy xay sinh tố cầm tay", qty: 1, serial: "SN-KG-0099", note: "", invoiceCode: "HD000028", time: "2026-07-15T10:00:00", branch: "Chi nhánh trung tâm", customer: "Trần Thị Bích", phone: "0987654321", maxWarranty: "6 tháng", expiredAt: "2027-01-15", maintenance: "—", status: "Còn bảo hành" },
  { id: "W005", code: "BC-001", name: "Bàn chải điện Oral-B", qty: 1, serial: "SN-OB-2210", note: "", invoiceCode: "HD000025", time: "2026-07-02T11:00:00", branch: "Chi nhánh trung tâm", customer: "Phạm Thị Diệu", phone: "0935567788", maxWarranty: "6 tháng", expiredAt: "2027-01-02", maintenance: "—", status: "Còn bảo hành" },
  { id: "W006", code: "MD-001", name: "Máy đếm tiền", qty: 1, serial: "SN-WG-0012", note: "Lỗi cảm biến", invoiceCode: "HD000018", time: "2026-06-20T09:30:00", branch: "Chi nhánh trung tâm", customer: "Lê Văn Cường", phone: "0901122334", maxWarranty: "12 tháng", expiredAt: "2027-06-20", maintenance: "Định kỳ 6 tháng", status: "Đang bảo hành" },
];

export interface OrderWarranty {
  id: string;
  code: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  customer: string;
  phone: string;
  creator: string;
  receiver: string;
  branch: string;
  repairQty: number;
  totalItems: number;
  totalAfterTax: number;
  discount: number;
  otherCharges: number;
  vat: number;
  taxDiscount: number;
  customerPays: number;
  customerPaid: number;
  note: string;
  status: "Chờ tiếp nhận" | "Đang sửa chữa" | "Hoàn thành" | "Đã trả" | "Đã hủy";
}

export const orderWarranties: OrderWarranty[] = [
  { id: "OW001", code: "YCSCT000006", time: "2026-08-13T09:00:00", createdAt: "2026-08-13T09:00:00", updatedAt: "2026-08-13T09:00:00", customer: "Nguyễn Văn An", phone: "0912345678", creator: "hantrung", receiver: "Quang", branch: "Chi nhánh trung tâm", repairQty: 1, totalItems: 1, totalAfterTax: 150000, discount: 0, otherCharges: 0, vat: 0, taxDiscount: 0, customerPays: 150000, customerPaid: 0, note: "Thay pin tai nghe", status: "Chờ tiếp nhận" },
  { id: "OW002", code: "YCSCT000005", time: "2026-08-11T14:00:00", createdAt: "2026-08-11T14:00:00", updatedAt: "2026-08-12T10:00:00", customer: "Công ty TNHH Minh Anh", phone: "02439290088", creator: "quanghn", receiver: "Long", branch: "Chi nhánh trung tâm", repairQty: 1, totalItems: 1, totalAfterTax: 350000, discount: 0, otherCharges: 0, vat: 0, taxDiscount: 0, customerPays: 350000, customerPaid: 0, note: "Thay bàn phím laptop", status: "Đang sửa chữa" },
  { id: "OW003", code: "YCSCT000004", time: "2026-08-08T10:00:00", createdAt: "2026-08-08T10:00:00", updatedAt: "2026-08-10T15:00:00", customer: "Cửa hàng An Khang", phone: "0669876543", creator: "hucuong", receiver: "Quang", branch: "Chi nhánh Lê Văn Sỹ", repairQty: 1, totalItems: 1, totalAfterTax: 200000, discount: 0, otherCharges: 0, vat: 0, taxDiscount: 0, customerPays: 200000, customerPaid: 200000, note: "Sửa màn hình điện thoại", status: "Hoàn thành" },
  { id: "OW004", code: "YCSCT000003", time: "2026-08-05T09:30:00", createdAt: "2026-08-05T09:30:00", updatedAt: "2026-08-05T09:30:00", customer: "Trần Thị Bích", phone: "0987654321", creator: "hantrung", receiver: "Long", branch: "Chi nhánh trung tâm", repairQty: 1, totalItems: 1, totalAfterTax: 250000, discount: 0, otherCharges: 0, vat: 0, taxDiscount: 0, customerPays: 250000, customerPaid: 0, note: "Sửa máy xay", status: "Đang sửa chữa" },
  { id: "OW005", code: "YCSCT000002", time: "2026-07-28T16:00:00", createdAt: "2026-07-28T16:00:00", updatedAt: "2026-07-30T10:00:00", customer: "Lê Văn Cường", phone: "0901122334", creator: "quanghn", receiver: "Quang", branch: "Chi nhánh trung tâm", repairQty: 1, totalItems: 1, totalAfterTax: 180000, discount: 0, otherCharges: 0, vat: 0, taxDiscount: 0, customerPays: 180000, customerPaid: 180000, note: "Vệ sinh máy đếm tiền", status: "Đã trả" },
  { id: "OW006", code: "YCSCT000001", time: "2026-07-20T11:00:00", createdAt: "2026-07-20T11:00:00", updatedAt: "2026-07-20T11:00:00", customer: "Phạm Thị Diệu", phone: "0935567788", creator: "hucuong", receiver: "—", branch: "Chi nhánh trung tâm", repairQty: 1, totalItems: 1, totalAfterTax: 0, discount: 0, otherCharges: 0, vat: 0, taxDiscount: 0, customerPays: 0, customerPaid: 0, note: "Hủy do khách đổi máy", status: "Đã hủy" },
];
