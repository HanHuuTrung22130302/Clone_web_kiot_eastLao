export interface PurchaseOrder {
  id: string;
  code: string;
  createdAt: string;
  time: string;
  supplierCode: string;
  supplier: string;
  branch: string;
  creator: string;
  importer: string;
  note: string;
  status: "Phiếu tạm" | "Đã xác nhận" | "Đã nhập hàng" | "Đã hủy";
  qty: number;
  itemCount: number;
  totalItems: number;
  discount: number;
  total: number;
}

export const purchaseOrderStatuses = ["Phiếu tạm", "Đã xác nhận", "Đã nhập hàng", "Đã hủy"] as const;

export const purchaseOrders: PurchaseOrder[] = [
  { id: "PO001", code: "PN000012", createdAt: "2026-08-13T09:00:00", time: "09:00", supplierCode: "NCC000001", supplier: "Công ty TNHH Việt Hưng", branch: "Chi nhánh trung tâm", creator: "hantrung", importer: "quanghn", note: "Nhập đồ uống tuần", status: "Phiếu tạm", qty: 120, itemCount: 5, totalItems: 12800000, discount: 200000, total: 12600000 },
  { id: "PO002", code: "PN000011", createdAt: "2026-08-12T15:00:00", time: "15:00", supplierCode: "NCC000009", supplier: "Phân phối điện thoại Hoàng Nam", branch: "Chi nhánh trung tâm", creator: "quanghn", importer: "quanghn", note: "Nhập điện thoại + phụ kiện", status: "Đã nhập hàng", qty: 30, itemCount: 4, totalItems: 42000000, discount: 500000, total: 41500000 },
  { id: "PO003", code: "PN000010", createdAt: "2026-08-10T10:30:00", time: "10:30", supplierCode: "NCC000006", supplier: "Kho gạo Bến Tre", branch: "Chi nhánh trung tâm", creator: "hucuong", importer: "quanghn", note: "Nhập gạo ST25", status: "Đã nhập hàng", qty: 40, itemCount: 1, totalItems: 6000000, discount: 0, total: 6000000 },
  { id: "PO004", code: "PN000009", createdAt: "2026-08-08T09:00:00", time: "09:00", supplierCode: "NCC000008", supplier: "Công ty TNHH Mỹ phẩm N.V.", branch: "Chi nhánh trung tâm", creator: "hantrung", importer: "quanghn", note: "Nhập mỹ phẩm", status: "Đã xác nhận", qty: 60, itemCount: 6, totalItems: 18500000, discount: 300000, total: 18200000 },
  { id: "PO005", code: "PN000008", createdAt: "2026-08-05T14:00:00", time: "14:00", supplierCode: "NCC000005", supplier: "Công ty CP Phân phối Sài Gòn", branch: "Chi nhánh Lê Văn Sỹ", creator: "quanghn", importer: "hucuong", note: "Nhập nước ngọt", status: "Đã nhập hàng", qty: 96, itemCount: 3, totalItems: 9600000, discount: 0, total: 9600000 },
  { id: "PO006", code: "PN000007", createdAt: "2026-08-01T11:00:00", time: "11:00", supplierCode: "NCC000003", supplier: "Công ty TNHH An Thịnh", branch: "Chi nhánh trung tâm", creator: "hucuong", importer: "quanghn", note: "Nhập bánh kẹo", status: "Đã hủy", qty: 0, itemCount: 0, totalItems: 0, discount: 0, total: 0 },
  { id: "PO007", code: "PN000006", createdAt: "2026-07-28T09:30:00", time: "09:30", supplierCode: "NCC000002", supplier: "Cửa hàng Phan Thành", branch: "Chi nhánh trung tâm", creator: "hantrung", importer: "quanghn", note: "Nhập đồ gia dụng", status: "Đã nhập hàng", qty: 45, itemCount: 7, totalItems: 12000000, discount: 100000, total: 11900000 },
  { id: "PO008", code: "PN000005", createdAt: "2026-07-25T15:00:00", time: "15:00", supplierCode: "NCC000007", supplier: "Công ty TNHH Thiết bị điện Nghiêm", branch: "Chi nhánh trung tâm", creator: "quanghn", importer: "hucuong", note: "Nhập quạt, thiết bị", status: "Đã nhập hàng", qty: 20, itemCount: 3, totalItems: 8900000, discount: 0, total: 8900000 },
];

export interface PurchaseReturn {
  id: string;
  code: string;
  purchaseCode: string;
  createdAt: string;
  time: string;
  supplierCode: string;
  supplier: string;
  branch: string;
  returner: string;
  creator: string;
  note: string;
  qty: number;
  itemCount: number;
  totalItems: number;
  discount: number;
  supplierPays: number;
  supplierPaid: number;
  status: "Phiếu tạm" | "Đã xác nhận" | "Đã hủy";
}

export const purchaseReturns: PurchaseReturn[] = [
  { id: "PR001", code: "THN000005", purchaseCode: "PN000011", createdAt: "2026-08-12T16:00:00", time: "16:00", supplierCode: "NCC000009", supplier: "Phân phối điện thoại Hoàng Nam", branch: "Chi nhánh trung tâm", returner: "quanghn", creator: "quanghn", note: "Trả 2 máy lỗi", status: "Đã xác nhận", qty: 2, itemCount: 1, totalItems: 5400000, discount: 0, supplierPays: 5400000, supplierPaid: 0 },
  { id: "PR002", code: "THN000004", purchaseCode: "PN000009", createdAt: "2026-08-09T10:00:00", time: "10:00", supplierCode: "NCC000008", supplier: "Công ty TNHH Mỹ phẩm N.V.", branch: "Chi nhánh trung tâm", returner: "hantrung", creator: "hantrung", note: "Mỹ phẩm gần hạn", status: "Phiếu tạm", qty: 5, itemCount: 2, totalItems: 950000, discount: 0, supplierPays: 950000, supplierPaid: 0 },
  { id: "PR003", code: "THN000003", purchaseCode: "PN000005", createdAt: "2026-08-01T09:00:00", time: "09:00", supplierCode: "NCC000007", supplier: "Công ty TNHH Thiết bị điện Nghiêm", branch: "Chi nhánh trung tâm", returner: "quanghn", creator: "hucuong", note: "Quạt lỗi", status: "Đã hủy", qty: 0, itemCount: 0, totalItems: 0, discount: 0, supplierPays: 0, supplierPaid: 0 },
  { id: "PR004", code: "THN000002", purchaseCode: "PN000006", createdAt: "2026-07-29T14:00:00", time: "14:00", supplierCode: "NCC000002", supplier: "Cửa hàng Phan Thành", branch: "Chi nhánh trung tâm", returner: "hantrung", creator: "hantrung", note: "Chảo bong chống dính", status: "Đã xác nhận", qty: 2, itemCount: 1, totalItems: 560000, discount: 0, supplierPays: 560000, supplierPaid: 560000 },
];

export interface PurchaseEInvoice {
  id: string;
  code: string;
  createdAt: string;
  supplierCode: string;
  supplier: string;
  amount: number;
  tax: number;
  total: number;
  status: "Đã khớp" | "Chưa khớp";
}

export const purchaseEInvoices: PurchaseEInvoice[] = [
  { id: "PE001", code: "HĐV000008", createdAt: "2026-08-13T08:30:00", supplierCode: "NCC000001", supplier: "Công ty TNHH Việt Hưng", amount: 12800000, tax: 0, total: 12800000, status: "Đã khớp" },
  { id: "PE002", code: "HĐV000007", createdAt: "2026-08-12T09:00:00", supplierCode: "NCC000009", supplier: "Phân phối điện thoại Hoàng Nam", amount: 42000000, tax: 0, total: 42000000, status: "Chưa khớp" },
  { id: "PE003", code: "HĐV000006", createdAt: "2026-08-05T10:00:00", supplierCode: "NCC000005", supplier: "Công ty CP Phân phối Sài Gòn", amount: 9600000, tax: 0, total: 9600000, status: "Đã khớp" },
  { id: "PE004", code: "HĐV000005", createdAt: "2026-07-28T11:00:00", supplierCode: "NCC000002", supplier: "Cửa hàng Phan Thành", amount: 12000000, tax: 0, total: 12000000, status: "Đã khớp" },
  { id: "PE005", code: "HĐV000004", createdAt: "2026-07-20T09:30:00", supplierCode: "NCC000003", supplier: "Công ty TNHH An Thịnh", amount: 8500000, tax: 0, total: 8500000, status: "Chưa khớp" },
];

export interface ServicePurchase {
  id: string;
  code: string;
  createdAt: string;
  supplierCode: string;
  supplier: string;
  branch: string;
  creator: string;
  note: string;
  amount: number;
  status: "Phiếu tạm" | "Đã xác nhận" | "Đã hủy";
}

export const servicePurchases: ServicePurchase[] = [
  { id: "SP001", code: "MDV000004", createdAt: "2026-08-12T09:30:00", supplierCode: "NCC000001", supplier: "Công ty TNHH Việt Hưng", branch: "Chi nhánh trung tâm", creator: "hantrung", note: "Dịch vụ vệ sinh kho tháng 8", amount: 1500000, status: "Đã xác nhận" },
  { id: "SP002", code: "MDV000003", createdAt: "2026-08-05T14:00:00", supplierCode: "NCC000003", supplier: "Công ty TNHH An Thịnh", branch: "Chi nhánh trung tâm", creator: "quanghn", note: "Vận chuyển hàng hóa", amount: 800000, status: "Phiếu tạm" },
  { id: "SP003", code: "MDV000002", createdAt: "2026-07-25T10:00:00", supplierCode: "NCC000007", supplier: "Công ty TNHH Thiết bị điện Nghiêm", branch: "Chi nhánh trung tâm", creator: "hucuong", note: "Bảo trì camera tháng 7", amount: 600000, status: "Đã xác nhận" },
  { id: "SP004", code: "MDV000001", createdAt: "2026-07-10T09:00:00", supplierCode: "NCC000002", supplier: "Cửa hàng Phan Thành", branch: "Chi nhánh Lê Văn Sỹ", creator: "hantrung", note: "Dịch vụ lắp đặt kệ", amount: 1200000, status: "Đã hủy" },
];
