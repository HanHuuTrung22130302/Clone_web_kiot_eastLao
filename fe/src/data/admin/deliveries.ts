export interface OrderDelivery {
  id: string;
  code: string;
  createdAt: string;
  time: string;
  completedAt: string;
  creator: string;
  invoiceCode: string;
  customerCode: string;
  customer: string;
  branch: string;
  seller: string;
  receiver: string;
  phone: string;
  address: string;
  region: string;
  ward: string;
  partnerDelivery: string;
  deliveryNote: string;
  status: string;
  deliveryTime: string;
  service: string;
}

export const deliveryStatuses = ["Chờ giao", "Đang giao", "Đã giao", "Hoàn thành", "Đã hủy", "Trả hàng"] as const;

export const orderDeliveries: OrderDelivery[] = [
  { id: "OD001", code: "VD000026", createdAt: "2026-08-13T09:40:00", time: "09:40", completedAt: "—", creator: "hantrung", invoiceCode: "HD000048", customerCode: "KH000001", customer: "Nguyễn Văn An", branch: "Chi nhánh trung tâm", seller: "hantrung", receiver: "Trần Văn Hưng", phone: "0912345678", address: "12 Nguyễn Trãi", region: "Quận 1", ward: "Phường Bến Thành", partnerDelivery: "Giao hàng nhanh", deliveryNote: "Gọi trước khi giao", status: "Chờ giao", deliveryTime: "2026-08-14T09:40:00", service: "Giao tiêu chuẩn" },
  { id: "OD002", code: "VD000025", createdAt: "2026-08-13T09:05:00", time: "09:05", completedAt: "—", creator: "quanghn", invoiceCode: "HD000047", customerCode: "KH000004", customer: "Phạm Thị Diệu", branch: "Chi nhánh trung tâm", seller: "quanghn", receiver: "Phạm Thị Diệu", phone: "0935567788", address: "23 Hoàng Văn Thụ", region: "Phú Nhuận", ward: "Phường 9", partnerDelivery: "Viettel Post", deliveryNote: "", status: "Đang giao", deliveryTime: "2026-08-14T09:05:00", service: "Giao hỏa tốc" },
  { id: "OD003", code: "VD000024", createdAt: "2026-08-13T08:30:00", time: "08:30", completedAt: "2026-08-13T14:30:00", creator: "hantrung", invoiceCode: "HD000046", customerCode: "KH000001", customer: "Nguyễn Văn An", branch: "Chi nhánh trung tâm", seller: "hantrung", receiver: "Nguyễn Văn An", phone: "0912345678", address: "12 Nguyễn Trãi", region: "Quận 1", ward: "Phường Bến Thành", partnerDelivery: "Tự giao hàng", deliveryNote: "", status: "Hoàn thành", deliveryTime: "2026-08-13T14:30:00", service: "Giao tiêu chuẩn" },
  { id: "OD004", code: "VD000023", createdAt: "2026-08-12T17:20:00", time: "17:20", completedAt: "—", creator: "hucuong", invoiceCode: "HD000045", customerCode: "KH000005", customer: "Công ty TNHH Minh Anh", branch: "Chi nhánh trung tâm", seller: "hucuong", receiver: "Kho Minh Anh", phone: "02439290088", address: "Số 1 Phố Giảng Võ", region: "Ba Đình", ward: "Phường Giảng Võ", partnerDelivery: "Giao hàng tiết kiệm", deliveryNote: "Hàng cồng kềnh", status: "Đang giao", deliveryTime: "2026-08-13T17:20:00", service: "Giao tiêu chuẩn" },
  { id: "OD005", code: "VD000022", createdAt: "2026-08-12T15:00:00", time: "15:00", completedAt: "—", creator: "hantrung", invoiceCode: "HD000044", customerCode: "KH000002", customer: "Trần Thị Bích", branch: "Chi nhánh trung tâm", seller: "hantrung", receiver: "Trần Thị Bích", phone: "0987654321", address: "45 Lê Văn Sỹ", region: "Quận 3", ward: "Phường 14", partnerDelivery: "Giao hàng nhanh", deliveryNote: "", status: "Chờ giao", deliveryTime: "2026-08-13T15:00:00", service: "Giao tiêu chuẩn" },
  { id: "OD006", code: "VD000021", createdAt: "2026-08-12T10:10:00", time: "10:10", completedAt: "2026-08-12T14:10:00", creator: "quanghn", invoiceCode: "HD000043", customerCode: "KH000003", customer: "Lê Văn Cường", branch: "Chi nhánh Lê Văn Sỹ", seller: "quanghn", receiver: "Lê Văn Cường", phone: "0901122334", address: "78 Cộng Hòa", region: "Tân Bình", ward: "Phường 4", partnerDelivery: "Tự giao hàng", deliveryNote: "", status: "Hoàn thành", deliveryTime: "2026-08-12T14:10:00", service: "Giao tiêu chuẩn" },
  { id: "OD007", code: "VD000020", createdAt: "2026-08-11T16:45:00", time: "16:45", completedAt: "—", creator: "hucuong", invoiceCode: "HD000042", customerCode: "KH000008", customer: "Cửa hàng An Khang", branch: "Chi nhánh trung tâm", seller: "hucuong", receiver: "Quản lý An Khang", phone: "0669876543", address: "150 Lý Tự Trọng", region: "Quận 1", ward: "Phường Bến Nghé", partnerDelivery: "Viettel Post", deliveryNote: "", status: "Đang giao", deliveryTime: "2026-08-12T16:45:00", service: "Giao tiêu chuẩn" },
  { id: "OD008", code: "VD000019", createdAt: "2026-08-11T09:30:00", time: "09:30", completedAt: "2026-08-11T14:30:00", creator: "hantrung", invoiceCode: "HD000041", customerCode: "KH000004", customer: "Phạm Thị Diệu", branch: "Chi nhánh trung tâm", seller: "hantrung", receiver: "Phạm Thị Diệu", phone: "0935567788", address: "23 Hoàng Văn Thụ", region: "Phú Nhuận", ward: "Phường 9", partnerDelivery: "Tự giao hàng", deliveryNote: "", status: "Hoàn thành", deliveryTime: "2026-08-11T14:30:00", service: "Giao tiêu chuẩn" },
];

export interface PartnerDelivery {
  id: string;
  code: string;
  name: string;
  phone: string;
  hotline: string;
  active: boolean;
  cost: string;
  unit: string;
  pickupNote: string;
  color: string;
}

export const partnerDeliveries: PartnerDelivery[] = [
  { id: "PD001", code: "GHN", name: "Giao hàng nhanh", phone: "19006745", hotline: "1900 6745", active: true, cost: "15.000đ", unit: "đơn/đồng giá", pickupNote: "Lấy hàng 2h/ngày", color: "#F58220" },
  { id: "PD002", code: "GHTK", name: "Giao hàng tiết kiệm", phone: "19007007", hotline: "1900 7007", active: true, cost: "13.000đ", unit: "đơn/đồng giá", pickupNote: "Lấy hàng 3h/ngày", color: "#00AEEF" },
  { id: "PD003", code: "VTP", name: "Viettel Post", phone: "198", hotline: "1900 8095", active: true, cost: "16.000đ", unit: "đơn/đồng giá", pickupNote: "Lấy hàng 2h/ngày", color: "#EE1C25" },
  { id: "PD004", code: "BEM", name: "Best Express", phone: "02873008888", hotline: "1900 6769", active: false, cost: "14.000đ", unit: "đơn/đồng giá", pickupNote: "Lấy hàng 1h/ngày", color: "#1BA1E2" },
  { id: "PD005", code: "SELF", name: "Tự giao hàng", phone: "—", hotline: "—", active: true, cost: "0đ", unit: "—", pickupNote: "—", color: "#0070F4" },
  { id: "PD006", code: "J&T", name: "J&T Express", phone: "02839997777", hotline: "1900 6858", active: false, cost: "15.500đ", unit: "đơn/đồng giá", pickupNote: "Lấy hàng 2h/ngày", color: "#F77F00" },
];
