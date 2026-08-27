export interface Order {
  id: string;
  code: string;
  invoiceCode: string;
  deliveryCode: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  deliveryTime: string;
  waitDays: number;
  customerCode: string;
  customer: string;
  phone: string;
  address: string;
  region: string;
  ward: string;
  partnerDelivery: string;
  receiver: string;
  creator: string;
  channel: string;
  branch: string;
  warehouse: string;
  paymentMethod: string;
  status: string;
  total: number;
}

export const branches = ["Chi nhánh trung tâm", "Chi nhánh Lê Văn Sỹ"];
export const warehouses = ["Kho chính", "Kho phụ"];
export const creators = ["hantrung", "Hoàng Nam Quang", "Nguyễn Lê Hùng Cường"];
export const channels = ["Tại cửa hàng", "Facebook Fanpage", "Shopee / Lazada / Tiki / Sendo", "Tiktok Shop", "Website"];
export const deliveryPartners = ["Giao hàng nhanh", "Giao hàng tiết kiệm", "Viettel Post", "Tự giao hàng"];
export const orderStatuses = ["Phiếu tạm", "Đã xác nhận", "Đang giao hàng", "Hoàn thành", "Đã hủy"];

const CUSTOMERS = [
  { code: "KH000001", name: "Nguyễn Văn An", phone: "0912345678", address: "12 Nguyễn Trãi", region: "Quận 1", ward: "Phường Bến Thành" },
  { code: "KH000002", name: "Trần Thị Bích", phone: "0987654321", address: "45 Lê Văn Sỹ", region: "Quận 3", ward: "Phường 14" },
  { code: "KH000003", name: "Lê Văn Cường", phone: "0901122334", address: "78 Cộng Hòa", region: "Tân Bình", ward: "Phường 4" },
  { code: "KH000004", name: "Phạm Thị Diệu", phone: "0935567788", address: "23 Hoàng Văn Thụ", region: "Phú Nhuận", ward: "Phường 9" },
  { code: "KH000005", name: "Công ty TNHH Minh Anh", phone: "02439290088", address: "Số 1 Phố Giảng Võ", region: "Ba Đình", ward: "Phường Giảng Võ" },
  { code: "KH000008", name: "Cửa hàng An Khang", phone: "0669876543", address: "150 Lý Tự Trọng", region: "Quận 1", ward: "Phường Bến Nghé" },
  { code: "KH000011", name: "Công ty CP Phú Mỹ", phone: "02838221122", address: "Số 8 Cao Thắng", region: "Quận 10", ward: "Phường 14" },
];

type OrderInput = Omit<
  Order,
  "id" | "customerCode" | "customer" | "phone" | "address" | "region" | "ward" | "creator"
>;

function buildOrders(): Order[] {
  const raw: OrderInput[] = [
    { code: "DH000013", invoiceCode: "HD000048", deliveryCode: "VD000026", time: "2026-08-13T09:40:00", createdAt: "2026-08-13T09:40:00", updatedAt: "2026-08-13T09:40:00", deliveryTime: "2026-08-14T09:40:00", waitDays: 1, partnerDelivery: "Giao hàng nhanh", receiver: "Trần Văn Hưng", channel: "Website", branch: "Chi nhánh trung tâm", warehouse: "Kho chính", paymentMethod: "Thanh toán khi nhận hàng", status: "Phiếu tạm", total: 425000 },
    { code: "DH000012", invoiceCode: "HD000047", deliveryCode: "VD000025", time: "2026-08-13T09:05:00", createdAt: "2026-08-13T09:05:00", updatedAt: "2026-08-13T09:05:00", deliveryTime: "2026-08-14T09:05:00", waitDays: 1, partnerDelivery: "Viettel Post", receiver: "Phạm Thị Diệu", channel: "Tại cửa hàng", branch: "Chi nhánh trung tâm", warehouse: "Kho chính", paymentMethod: "Chuyển khoản", status: "Đã xác nhận", total: 1320000 },
    { code: "DH000011", invoiceCode: "HD000046", deliveryCode: "VD000024", time: "2026-08-13T08:30:00", createdAt: "2026-08-13T08:30:00", updatedAt: "2026-08-13T08:30:00", deliveryTime: "2026-08-13T14:30:00", waitDays: 0, partnerDelivery: "Tự giao hàng", receiver: "Nguyễn Văn An", channel: "Facebook Fanpage", branch: "Chi nhánh trung tâm", warehouse: "Kho chính", paymentMethod: "Tiền mặt", status: "Hoàn thành", total: 540000 },
    { code: "DH000010", invoiceCode: "HD000045", deliveryCode: "VD000023", time: "2026-08-12T17:20:00", createdAt: "2026-08-12T17:20:00", updatedAt: "2026-08-12T17:20:00", deliveryTime: "2026-08-13T17:20:00", waitDays: 1, partnerDelivery: "Giao hàng tiết kiệm", receiver: "Công ty TNHH Minh Anh", channel: "Website", branch: "Chi nhánh trung tâm", warehouse: "Kho chính", paymentMethod: "Chuyển khoản", status: "Đang giao hàng", total: 2450000 },
    { code: "DH000009", invoiceCode: "HD000044", deliveryCode: "VD000022", time: "2026-08-12T15:00:00", createdAt: "2026-08-12T15:00:00", updatedAt: "2026-08-12T15:00:00", deliveryTime: "2026-08-13T15:00:00", waitDays: 1, partnerDelivery: "Giao hàng nhanh", receiver: "Trần Thị Bích", channel: "Shopee / Lazada / Tiki / Sendo", branch: "Chi nhánh trung tâm", warehouse: "Kho phụ", paymentMethod: "Thanh toán khi nhận hàng", status: "Đã xác nhận", total: 860000 },
    { code: "DH000008", invoiceCode: "HD000043", deliveryCode: "VD000021", time: "2026-08-12T10:10:00", createdAt: "2026-08-12T10:10:00", updatedAt: "2026-08-12T10:10:00", deliveryTime: "2026-08-12T14:10:00", waitDays: 0, partnerDelivery: "Tự giao hàng", receiver: "Lê Văn Cường", channel: "Tại cửa hàng", branch: "Chi nhánh Lê Văn Sỹ", warehouse: "Kho phụ", paymentMethod: "Tiền mặt", status: "Hoàn thành", total: 310000 },
    { code: "DH000007", invoiceCode: "HD000042", deliveryCode: "VD000020", time: "2026-08-11T16:45:00", createdAt: "2026-08-11T16:45:00", updatedAt: "2026-08-11T16:45:00", deliveryTime: "2026-08-12T16:45:00", waitDays: 1, partnerDelivery: "Viettel Post", receiver: "Cửa hàng An Khang", channel: "Website", branch: "Chi nhánh trung tâm", warehouse: "Kho chính", paymentMethod: "Chuyển khoản", status: "Đang giao hàng", total: 1890000 },
    { code: "DH000006", invoiceCode: "HD000041", deliveryCode: "VD000019", time: "2026-08-11T09:30:00", createdAt: "2026-08-11T09:30:00", updatedAt: "2026-08-11T09:30:00", deliveryTime: "2026-08-11T14:30:00", waitDays: 0, partnerDelivery: "Tự giao hàng", receiver: "Phạm Thị Diệu", channel: "Facebook Fanpage", branch: "Chi nhánh trung tâm", warehouse: "Kho chính", paymentMethod: "Tiền mặt", status: "Hoàn thành", total: 720000 },
    { code: "DH000005", invoiceCode: "HD000040", deliveryCode: "VD000018", time: "2026-08-10T14:20:00", createdAt: "2026-08-10T14:20:00", updatedAt: "2026-08-10T14:20:00", deliveryTime: "2026-08-11T14:20:00", waitDays: 1, partnerDelivery: "Giao hàng tiết kiệm", receiver: "Công ty CP Phú Mỹ", channel: "Website", branch: "Chi nhánh trung tâm", warehouse: "Kho chính", paymentMethod: "Chuyển khoản", status: "Đã xác nhận", total: 2350000 },
    { code: "DH000004", invoiceCode: "HD000039", deliveryCode: "VD000017", time: "2026-08-10T09:00:00", createdAt: "2026-08-10T09:00:00", updatedAt: "2026-08-10T09:00:00", deliveryTime: "—", waitDays: 3, partnerDelivery: "Chưa chọn", receiver: "Nguyễn Văn An", channel: "Tại cửa hàng", branch: "Chi nhánh trung tâm", warehouse: "Kho chính", paymentMethod: "Thanh toán khi nhận hàng", status: "Phiếu tạm", total: 980000 },
    { code: "DH000003", invoiceCode: "HD000038", deliveryCode: "VD000016", time: "2026-08-09T11:15:00", createdAt: "2026-08-09T11:15:00", updatedAt: "2026-08-09T11:15:00", deliveryTime: "2026-08-09T15:15:00", waitDays: 0, partnerDelivery: "Tự giao hàng", receiver: "Trần Thị Bích", channel: "Tiktok Shop", branch: "Chi nhánh Lê Văn Sỹ", warehouse: "Kho phụ", paymentMethod: "Chuyển khoản", status: "Hoàn thành", total: 1560000 },
    { code: "DH000002", invoiceCode: "HD000037", deliveryCode: "VD000015", time: "2026-08-08T15:40:00", createdAt: "2026-08-08T15:40:00", updatedAt: "2026-08-08T15:40:00", deliveryTime: "—", waitDays: 5, partnerDelivery: "Chưa chọn", receiver: "Công ty TNHH Minh Anh", channel: "Website", branch: "Chi nhánh trung tâm", warehouse: "Kho chính", paymentMethod: "Công nợ", status: "Đã xác nhận", total: 4200000 },
    { code: "DH000001", invoiceCode: "HD000036", deliveryCode: "VD000014", time: "2026-08-07T10:00:00", createdAt: "2026-08-07T10:00:00", updatedAt: "2026-08-07T10:00:00", deliveryTime: "2026-08-08T10:00:00", waitDays: 1, partnerDelivery: "Giao hàng nhanh", receiver: "Lê Văn Cường", channel: "Facebook Fanpage", branch: "Chi nhánh trung tâm", warehouse: "Kho chính", paymentMethod: "Thanh toán khi nhận hàng", status: "Hoàn thành", total: 685000 },
  ];
  return raw.map((o, i) => ({
    ...o,
    id: `ORD-${String(i + 1).padStart(3, "0")}`,
    customerCode: CUSTOMERS[i % CUSTOMERS.length].code,
    customer: CUSTOMERS[i % CUSTOMERS.length].name,
    phone: CUSTOMERS[i % CUSTOMERS.length].phone,
    address: CUSTOMERS[i % CUSTOMERS.length].address,
    region: CUSTOMERS[i % CUSTOMERS.length].region,
    ward: CUSTOMERS[i % CUSTOMERS.length].ward,
    creator: creators[i % creators.length],
    waitDays: o.waitDays,
  }));
}

export const orders: Order[] = buildOrders();