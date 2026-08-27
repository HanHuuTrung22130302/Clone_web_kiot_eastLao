export interface CashFlow {
  id: string;
  code: string;
  time: string;
  type: "Thu" | "Chi";
  category: string;
  note: string;
  amount: number;
  branch: string;
  creator: string;
}

export const cashFlows: CashFlow[] = [
  { id: "CF001", code: "THU000012", time: "2026-08-13T09:50:00", type: "Thu", category: "Thu tiền bán hàng", note: "Thu tiền hóa đơn HD000048", amount: 165000, branch: "Chi nhánh trung tâm", creator: "hantrung" },
  { id: "CF002", code: "CHI000015", time: "2026-08-13T09:00:00", type: "Chi", category: "Chi mua hàng", note: "Thanh toán nhà cung cấp NCC000001", amount: 25000000, branch: "Chi nhánh trung tâm", creator: "hantrung" },
  { id: "CF003", code: "THU000011", time: "2026-08-12T16:30:00", type: "Thu", category: "Thu tiền bán hàng", note: "Thu tiền hóa đơn HD000043", amount: 2400000, branch: "Chi nhánh trung tâm", creator: "hantrung" },
  { id: "CF004", code: "CHI000014", time: "2026-08-12T10:00:00", type: "Chi", category: "Chi phí vận chuyển", note: "Cước giao hàng GHN tuần", amount: 450000, branch: "Chi nhánh trung tâm", creator: "quanghn" },
  { id: "CF005", code: "CHI000013", time: "2026-08-11T17:00:00", type: "Chi", category: "Chi phí khác", note: "Tiền điện, nước cửa hàng", amount: 1850000, branch: "Chi nhánh trung tâm", creator: "thuha" },
  { id: "CF006", code: "THU000010", time: "2026-08-11T09:30:00", type: "Thu", category: "Thu tiền bán hàng", note: "Thu tiền hóa đơn HD000039", amount: 720000, branch: "Chi nhánh trung tâm", creator: "hucuong" },
  { id: "CF007", code: "CHI000012", time: "2026-08-10T15:00:00", type: "Chi", category: "Trả lương", note: "Lương nhân viên tháng 7", amount: 42000000, branch: "Chi nhánh trung tâm", creator: "thuha" },
  { id: "CF008", code: "THU000009", time: "2026-08-10T11:00:00", type: "Thu", category: "Thu công nợ", note: "Thu nợ khách Công ty CP Phú Mỹ", amount: 15000000, branch: "Chi nhánh trung tâm", creator: "hantrung" },
  { id: "CF009", code: "CHI000011", time: "2026-08-09T09:30:00", type: "Chi", category: "Chi mua hàng", note: "Nhập gạo NCC000006", amount: 12000000, branch: "Chi nhánh trung tâm", creator: "quanghn" },
  { id: "CF010", code: "THU000008", time: "2026-08-08T14:00:00", type: "Thu", category: "Thu tiền bán hàng", note: "Thu tiền hóa đơn HD000034", amount: 4100000, branch: "Chi nhánh Lê Văn Sỹ", creator: "hucuong" },
  { id: "CF011", code: "CHI000010", time: "2026-08-07T10:00:00", type: "Chi", category: "Chi phí khác", note: "Thuê mặt bằng", amount: 15000000, branch: "Chi nhánh trung tâm", creator: "thuha" },
  { id: "CF012", code: "THU000007", time: "2026-08-06T16:00:00", type: "Thu", category: "Thu khác", note: "Thu từ website bán hàng", amount: 5200000, branch: "Chi nhánh trung tâm", creator: "hantrung" },
];

export const cashFlowCategories = ["Thu tiền bán hàng", "Thu công nợ", "Thu khác", "Chi mua hàng", "Chi phí vận chuyển", "Trả lương", "Chi phí khác"];
