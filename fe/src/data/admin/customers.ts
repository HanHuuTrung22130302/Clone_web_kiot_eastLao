export interface Customer {
  id: string;
  code: string;
  name: string;
  type: "Cá nhân" | "Doanh nghiệp";
  phone: string;
  group: string;
  gender: "Nam" | "Nữ" | "Khác";
  dob: string;
  email: string;
  facebook: string;
  company: string;
  taxCode: string;
  idNumber: string;
  address: string;
  deliveryRegion: string;
  ward: string;
  creator: string;
  createdAt: string;
  note: string;
  lastTransaction: string;
  totalSpent: number;
  debt: number;
  orders: number;
}

export const customers: Customer[] = [
  { id: "C001", code: "KH000001", name: "Nguyễn Văn An", type: "Cá nhân", phone: "0912345678", group: "Khách lẻ", gender: "Nam", dob: "1990-05-12", email: "an.nguyen@gmail.com", facebook: "nguyenvanan", company: "—", taxCode: "—", idNumber: "012345678901", address: "12 Nguyễn Trãi, P. Bến Thành", deliveryRegion: "Quận 1", ward: "Phường Bến Thành", creator: "hantrung", createdAt: "2024-11-02T09:00:00", note: "", lastTransaction: "2026-08-13T09:12:00", totalSpent: 2450000, debt: 0, orders: 23 },
  { id: "C002", code: "KH000002", name: "Trần Thị Bích", type: "Cá nhân", phone: "0987654321", group: "Đại lý", gender: "Nữ", dob: "1985-09-22", email: "bich.tran@gmail.com", facebook: "tranbich", company: "—", taxCode: "—", idNumber: "024456789012", address: "45 Lê Văn Sỹ", deliveryRegion: "Quận 3", ward: "Phường 14", creator: "hantrung", createdAt: "2024-11-05T10:00:00", note: "Thanh toán cuối tuần", lastTransaction: "2026-08-12T15:40:00", totalSpent: 18200000, debt: 1500000, orders: 67 },
  { id: "C003", code: "KH000003", name: "Lê Văn Cường", type: "Cá nhân", phone: "0901122334", group: "Khách lẻ", gender: "Nam", dob: "1995-01-08", email: "cuongle@gmail.com", facebook: "", company: "—", taxCode: "—", idNumber: "033367790123", address: "78 Cộng Hòa", deliveryRegion: "Tân Bình", ward: "Phường 4", creator: "hantrung", createdAt: "2024-12-01T08:30:00", note: "", lastTransaction: "2026-08-10T16:20:00", totalSpent: 890000, debt: 0, orders: 9 },
  { id: "C004", code: "KH000004", name: "Phạm Thị Diệu", type: "Cá nhân", phone: "0935567788", group: "Khách sỉ", gender: "Nữ", dob: "1992-06-30", email: "dieu.pham@gmail.com", facebook: "dieupham", company: "—", taxCode: "—", idNumber: "099078945612", address: "23 Hoàng Văn Thụ", deliveryRegion: "Phú Nhuận", ward: "Phường 9", creator: "quanghn", createdAt: "2024-12-10T09:15:00", note: "Khách sỉ gạo & dầu", lastTransaction: "2026-08-11T10:05:00", totalSpent: 9750000, debt: 0, orders: 41 },
  { id: "C005", code: "KH000005", name: "Công ty TNHH Minh Anh", type: "Doanh nghiệp", phone: "02439290088", group: "Doanh nghiệp", gender: "Khác", dob: "", email: "contact@minhanh.vn", facebook: "", company: "Công ty TNHH Minh Anh", taxCode: "0101122334", idNumber: "—", address: "Số 1 Phố Giảng Võ", deliveryRegion: "Ba Đình", ward: "Phường Giảng Võ", creator: "hantrung", createdAt: "2025-01-15T08:00:00", note: "Xuất hóa đơn đỏ", lastTransaction: "2026-08-08T14:30:00", totalSpent: 46300000, debt: 5200000, orders: 128 },
  { id: "C006", code: "KH000006", name: "Hoàng Văn Em", type: "Cá nhân", phone: "0977789900", group: "Khách lẻ", gender: "Nam", dob: "2000-03-14", email: "", facebook: "", company: "—", taxCode: "—", idNumber: "", address: "56 Điện Biên Phủ", deliveryRegion: "Quận 5", ward: "Phường 2", creator: "hucuong", createdAt: "2025-02-02T09:30:00", note: "", lastTransaction: "2026-08-09T17:45:00", totalSpent: 320000, debt: 0, orders: 4 },
  { id: "C007", code: "KH000007", name: "Nguyễn Thị Gấm", type: "Cá nhân", phone: "0968123456", group: "Khách lẻ", gender: "Nữ", dob: "1988-11-02", email: "gam.nguyen@gmail.com", facebook: "", company: "—", taxCode: "—", idNumber: "", address: "9 Ba Cu", deliveryRegion: "Vũng Tàu", ward: "Phường 1", creator: "hantrung", createdAt: "2025-02-20T10:00:00", note: "", lastTransaction: "2026-08-07T11:22:00", totalSpent: 540000, debt: 0, orders: 7 },
  { id: "C008", code: "KH000008", name: "Cửa hàng An Khang", type: "Doanh nghiệp", phone: "0669876543", group: "Đại lý", gender: "Khác", dob: "", email: "ankhangstore@gmail.com", facebook: "", company: "Hộ kinh doanh An Khang", taxCode: "0123456789", idNumber: "—", address: "150 Lý Tự Trọng", deliveryRegion: "Quận 1", ward: "Phường Bến Nghé", creator: "quanghn", createdAt: "2025-03-05T08:30:00", note: "Nhận hàng thứ 3 & thứ 6", lastTransaction: "2026-08-06T09:00:00", totalSpent: 12600000, debt: 800000, orders: 52 },
  { id: "C009", code: "KH000009", name: "Đỗ Văn Hưng", type: "Cá nhân", phone: "0938123124", group: "Khách lẻ", gender: "Nam", dob: "1991-07-19", email: "hungdo@gmail.com", facebook: "dohung91", company: "—", taxCode: "—", idNumber: "", address: "88 Xô Viết Nghệ Tĩnh", deliveryRegion: "Quận Bình Thạnh", ward: "Phường 21", creator: "hantrung", createdAt: "2025-03-18T11:00:00", note: "", lastTransaction: "2026-08-05T16:10:00", totalSpent: 1120000, debt: 0, orders: 15 },
  { id: "C010", code: "KH000010", name: "Bà Mai Lan", type: "Cá nhân", phone: "0904455667", group: "Khách lẻ", gender: "Nữ", dob: "1965-02-25", email: "", facebook: "", company: "—", taxCode: "—", idNumber: "", address: "12/4 Hai Bà Trưng", deliveryRegion: "Quận 1", ward: "Phường Đa Kao", creator: "hucuong", createdAt: "2025-04-01T09:40:00", note: "Khách quen từ năm 2020", lastTransaction: "2026-08-04T09:30:00", totalSpent: 2750000, debt: 0, orders: 33 },
  { id: "C011", code: "KH000011", name: "Công ty CP Phú Mỹ", type: "Doanh nghiệp", phone: "02838221122", group: "Doanh nghiệp", gender: "Khác", dob: "", email: "info@phumy.com.vn", facebook: "", company: "Công ty CP Phú Mỹ", taxCode: "0301234567", idNumber: "—", address: "Số 8 Cao Thắng", deliveryRegion: "Quận 10", ward: "Phường 14", creator: "hantrung", createdAt: "2025-04-10T08:20:00", note: "Mua lẻ, xuất hóa đơn", lastTransaction: "2026-08-03T15:00:00", totalSpent: 9800000, debt: 2000000, orders: 28 },
  { id: "C012", code: "KH000012", name: "Vũ Thị Nga", type: "Cá nhân", phone: "0977112233", group: "Khách sỉ", gender: "Nữ", dob: "1987-12-05", email: "ngavu@gmail.com", facebook: "vu.nga", company: "—", taxCode: "—", idNumber: "", address: "22 Nguyễn Oanh", deliveryRegion: "Gò Vấp", ward: "Phường 7", creator: "quanghn", createdAt: "2025-05-01T10:20:00", note: "", lastTransaction: "2026-08-02T10:45:00", totalSpent: 6400000, debt: 0, orders: 26 },
  { id: "C013", code: "KH000013", name: "Trần Minh Phúc", type: "Cá nhân", phone: "0922344556", group: "Đại lý", gender: "Nam", dob: "1983-04-18", email: "phuctm@gmail.com", facebook: "", company: "—", taxCode: "—", idNumber: "", address: "101 Nguyễn Chí Thanh", deliveryRegion: "Đống Đa", ward: "Phường Ô Chợ Dừa", creator: "hantrung", createdAt: "2025-05-12T14:00:00", note: "", lastTransaction: "2026-08-01T11:30:00", totalSpent: 15300000, debt: 3000000, orders: 48 },
  { id: "C014", code: "KH000014", name: "Lê Thị Quỳnh", type: "Cá nhân", phone: "0988445566", group: "Khách lẻ", gender: "Nữ", dob: "1998-08-09", email: "quynhle@gmail.com", facebook: "", company: "—", taxCode: "—", idNumber: "", address: "34 Tôn Đức Thắng", deliveryRegion: "Quận 1", ward: "Phường Bến Nghé", creator: "hucuong", createdAt: "2025-06-01T09:00:00", note: "", lastTransaction: "2026-07-31T14:20:00", totalSpent: 620000, debt: 0, orders: 8 },
  { id: "C015", code: "KH000015", name: "Hộ kinh doanh Sơn Ca", type: "Doanh nghiệp", phone: "0290998877", group: "Khách sỉ", gender: "Khác", dob: "", email: "soncastore@gmail.com", facebook: "", company: "Hộ kinh doanh Sơn Ca", taxCode: "0987654321", idNumber: "—", address: "250 Trần Hưng Đạo", deliveryRegion: "Quận 8", ward: "Phường 14", creator: "hantrung", createdAt: "2025-06-15T08:45:00", note: "Thanh toán sau 15 ngày", lastTransaction: "2026-07-30T16:30:00", totalSpent: 8700000, debt: 1200000, orders: 35 },
  { id: "C016", code: "KH000016", name: "Khách lẻ", type: "Cá nhân", phone: "0900000000", group: "Khách lẻ", gender: "Khác", dob: "", email: "", facebook: "", company: "—", taxCode: "—", idNumber: "", address: "—", deliveryRegion: "—", ward: "—", creator: "system", createdAt: "2024-11-01T00:00:00", note: "Khách không định danh", lastTransaction: "2026-08-13T10:00:00", totalSpent: 45000000, debt: 0, orders: 312 },
];

export const customerGroups = Array.from(new Set(customers.map((c) => c.group || "Khách lẻ")));