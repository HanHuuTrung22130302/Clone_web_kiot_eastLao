export interface Supplier {
  id: string;
  code: string;
  name: string;
  phone: string;
  group: string;
  email: string;
  address: string;
  region: string;
  ward: string;
  company: string;
  note: string;
  taxCode: string;
  idNumber: string;
  creator: string;
  createdAt: string;
  debt: number;
  totalPurchased: number;
  totalAfterReturn: number;
  status: "Đang hợp tác" | "Ngừng hợp tác";
}

export const suppliers: Supplier[] = [
  { id: "S001", code: "NCC000001", name: "Công ty TNHH Việt Hưng", phone: "02838112233", group: "Đại lý phân phối", email: "vienthung@gmail.com", address: "120 Tân Kỳ Tân Quý", region: "Tân Phú", ward: "Phường Sơn Kỳ", company: "Công ty TNHH Việt Hưng", note: "Giao hàng thứ 2-7", taxCode: "0301234567", idNumber: "—", creator: "hantrung", createdAt: "2024-10-01T08:00:00", debt: 25000000, totalPurchased: 480000000, totalAfterReturn: 470000000, status: "Đang hợp tác" },
  { id: "S002", code: "NCC000002", name: "Cửa hàng Phan Thành", phone: "02839876543", group: "Nhà cung cấp lẻ", email: "phanthanh@gmail.com", address: "45 Nguyễn Văn Cừ", region: "Quận 5", ward: "Phường 1", company: "Hộ kinh doanh Phan Thành", note: "Hàng hóa gia dụng", taxCode: "0123456789", idNumber: "—", creator: "quanghn", createdAt: "2024-10-05T09:00:00", debt: 5800000, totalPurchased: 96000000, totalAfterReturn: 95000000, status: "Đang hợp tác" },
  { id: "S003", code: "NCC000003", name: "Công ty TNHH An Thịnh", phone: "02437778899", group: "Nhà sản xuất", email: "anthinh@gmail.com", address: "Số 3 Trương Định", region: "Hai Bà Trưng", ward: "Phường Ngô Thì Nhậm", company: "Công ty TNHH An Thịnh", note: "Sản xuất bánh kẹo", taxCode: "0102345678", idNumber: "—", creator: "hantrung", createdAt: "2024-11-01T10:00:00", debt: 0, totalPurchased: 220000000, totalAfterReturn: 219000000, status: "Đang hợp tác" },
  { id: "S004", code: "NCC000004", name: "Nhà cung cấp Minh Khôi", phone: "0911223344", group: "Nhà cung cấp lẻ", email: "minhkhoi@gmail.com", address: "67 Lê Lợi", region: "Quận 1", ward: "Phường Bến Thành", company: "—", note: "Hàng thời trang", taxCode: "—", idNumber: "033456789012", creator: "hucuong", createdAt: "2024-11-10T09:30:00", debt: 1200000, totalPurchased: 35000000, totalAfterReturn: 34800000, status: "Đang hợp tác" },
  { id: "S005", code: "NCC000005", name: "Công ty CP Phân phối Sài Gòn", phone: "02835224455", group: "Đại lý phân phối", email: "sgdist@gmail.com", address: "89 Hoàng Văn Thụ", region: "Phú Nhuận", ward: "Phường 9", company: "Công ty CP Phân phối Sài Gòn", note: "Đồ uống, nước ngọt", taxCode: "0312345678", idNumber: "—", creator: "hantrung", createdAt: "2024-12-01T08:00:00", debt: 9000000, totalPurchased: 150000000, totalAfterReturn: 148000000, status: "Đang hợp tác" },
  { id: "S006", code: "NCC000006", name: "Kho gạo Bến Tre", phone: "0912998877", group: "Nhà sản xuất", email: "gaobentre@gmail.com", address: "Ấp An Thuận", region: "Bến Tre", ward: "Xã Phú An Hòa", company: "Hộ kinh doanh Gạo Bến Tre", note: "Gạo ST25, Nàng Thơm", taxCode: "—", idNumber: "—", creator: "quanghn", createdAt: "2025-01-05T09:00:00", debt: 3500000, totalPurchased: 120000000, totalAfterReturn: 119000000, status: "Đang hợp tác" },
  { id: "S007", code: "NCC000007", name: "Công ty TNHH Thiết bị điện Nghiêm", phone: "02839998877", group: "Nhà cung cấp lẻ", email: "nghiem@gmail.com", address: "15 Lũy Bán Bích", region: "Tân Phú", ward: "Phường Hòa Thạnh", company: "Công ty TNHH Thiết bị điện Nghiêm", note: "Thiết bị, máy móc", taxCode: "0345678901", idNumber: "—", creator: "hantrung", createdAt: "2025-02-01T10:00:00", debt: 0, totalPurchased: 58000000, totalAfterReturn: 57500000, status: "Đang hợp tác" },
  { id: "S008", code: "NCC000008", name: "Công ty TNHH Mỹ phẩm N.V.", phone: "02838445566", group: "Nhà sản xuất", email: "nvmyp@gmail.com", address: "33 Lý Thường Kiệt", region: "Tân Bình", ward: "Phường 9", company: "Công ty TNHH Mỹ phẩm N.V.", note: "Mỹ phẩm, chăm sóc cá nhân", taxCode: "0356789012", idNumber: "—", creator: "hucuong", createdAt: "2025-03-01T08:30:00", debt: 2500000, totalPurchased: 80000000, totalAfterReturn: 79000000, status: "Đang hợp tác" },
  { id: "S009", code: "NCC000009", name: "Phân phối điện thoại Hoàng Nam", phone: "0905111222", group: "Đại lý phân phối", email: "hnmobile@gmail.com", address: "200 Bùi Thị Xuân", region: "Quận 1", ward: "Phường Phạm Ngũ Lão", company: "Hộ kinh doanh Hoàng Nam", note: "Điện thoại, phụ kiện", taxCode: "—", idNumber: "033999000111", creator: "hantrung", createdAt: "2025-04-01T09:00:00", debt: 12000000, totalPurchased: 320000000, totalAfterReturn: 315000000, status: "Đang hợp tác" },
  { id: "S010", code: "NCC000010", name: "Nhà cung cấp Công nghệ Minh", phone: "0933222111", group: "Nhà cung cấp lẻ", email: "cn.minh@gmail.com", address: "77 Võ Văn Tần", region: "Quận 3", ward: "Phường 6", company: "—", note: "Linh kiện, máy tính", taxCode: "—", idNumber: "022233344455", creator: "quanghn", createdAt: "2025-05-01T08:00:00", debt: 0, totalPurchased: 40000000, totalAfterReturn: 39800000, status: "Ngừng hợp tác" },
];

export const supplierGroups = Array.from(new Set(suppliers.map((s) => s.group)));