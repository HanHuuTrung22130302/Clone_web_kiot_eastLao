export interface Employee {
  id: string;
  username: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  branch: string;
  status: "Đang làm việc" | "Nghỉ việc";
  startDate: string;
  salary: number;
  address: string;
  idNumber: string;
}

export interface PaysheetRow {
  id: string;
  code: string;
  name: string;
  daysWorked: number;
  hoursWorked: number;
  lateDays: number;
  daysOff: number;
  allowance: number;
  bonus: number;
  deduction: number;
  total: number;
}

export interface CommissionRow {
  id: string;
  code: string;
  name: string;
  sales: number;
  commissionRate: number;
  commissionAmount: number;
  orders: number;
  returnCount: number;
}

export const employees: Employee[] = [
  { id: "E001", username: "hantrung", name: "Hantrung", phone: "0908123456", email: "hantrung@gmail.com", role: "Chủ cửa hàng", branch: "Chi nhánh trung tâm", status: "Đang làm việc", startDate: "2024-10-01", salary: 0, address: "TP. HCM", idNumber: "012345678901" },
  { id: "E002", username: "quanghn", name: "Hoàng Nam Quang", phone: "0912340001", email: "quanghn@gmail.com", role: "Quản lý kho", branch: "Chi nhánh trung tâm", status: "Đang làm việc", startDate: "2024-11-15", salary: 9000000, address: "TP. HCM", idNumber: "012345678902" },
  { id: "E003", username: "hucuong", name: "Nguyễn Lê Hùng Cường", phone: "0912340002", email: "hucuong@gmail.com", role: "Thu ngân", branch: "Chi nhánh trung tâm", status: "Đang làm việc", startDate: "2024-12-01", salary: 6500000, address: "TP. HCM", idNumber: "012345678903" },
  { id: "E004", username: "thaoanh", name: "Vũ Thị Thảo Anh", phone: "0912340003", email: "thaoanh@gmail.com", role: "Nhân viên bán hàng", branch: "Chi nhánh Lê Văn Sỹ", status: "Đang làm việc", startDate: "2025-01-10", salary: 5500000, address: "TP. HCM", idNumber: "012345678904" },
  { id: "E005", username: "minhtri", name: "Trần Minh Trí", phone: "0912340004", email: "minhtri@gmail.com", role: "Nhân viên bán hàng", branch: "Chi nhánh trung tâm", status: "Đang làm việc", startDate: "2025-02-20", salary: 5500000, address: "TP. HCM", idNumber: "012345678905" },
  { id: "E006", username: "thuha", name: "Đặng Thu Hà", phone: "0912340005", email: "thuha@gmail.com", role: "Kế toán", branch: "Chi nhánh trung tâm", status: "Đang làm việc", startDate: "2025-03-05", salary: 8000000, address: "TP. HCM", idNumber: "012345678906" },
  { id: "E007", username: "hoanglong", name: "Phạm Hoàng Long", phone: "0912340006", email: "hoanglong@gmail.com", role: "Giao hàng", branch: "Chi nhánh trung tâm", status: "Đang làm việc", startDate: "2025-04-15", salary: 5000000, address: "TP. HCM", idNumber: "012345678907" },
  { id: "E008", username: "ngocmai", name: "Lê Ngọc Mai", phone: "0912340007", email: "ngocmai@gmail.com", role: "Nhân viên bán hàng", branch: "Chi nhánh Lê Văn Sỹ", status: "Nghỉ việc", startDate: "2025-05-01", salary: 5500000, address: "TP. HCM", idNumber: "012345678908" },
];

export const paysheetRows: PaysheetRow[] = [
  { id: "P001", code: "NV000001", name: "Hoàng Nam Quang", daysWorked: 26, hoursWorked: 208, lateDays: 0, daysOff: 1, allowance: 500000, bonus: 800000, deduction: 0, total: 10300000 },
  { id: "P002", code: "NV000002", name: "Nguyễn Lê Hùng Cường", daysWorked: 26, hoursWorked: 208, lateDays: 1, daysOff: 1, allowance: 400000, bonus: 500000, deduction: 50000, total: 7350000 },
  { id: "P003", code: "NV000003", name: "Vũ Thị Thảo Anh", daysWorked: 24, hoursWorked: 192, lateDays: 2, daysOff: 3, allowance: 400000, bonus: 300000, deduction: 100000, total: 6100000 },
  { id: "P004", code: "NV000004", name: "Trần Minh Trí", daysWorked: 26, hoursWorked: 208, lateDays: 0, daysOff: 1, allowance: 400000, bonus: 600000, deduction: 0, total: 6500000 },
  { id: "P005", code: "NV000005", name: "Đặng Thu Hà", daysWorked: 25, hoursWorked: 200, lateDays: 1, daysOff: 2, allowance: 500000, bonus: 400000, deduction: 0, total: 8900000 },
  { id: "P006", code: "NV000006", name: "Phạm Hoàng Long", daysWorked: 22, hoursWorked: 176, lateDays: 0, daysOff: 5, allowance: 300000, bonus: 200000, deduction: 0, total: 5500000 },
];

export const commissionRows: CommissionRow[] = [
  { id: "C001", code: "NV000001", name: "Hoàng Nam Quang", sales: 185000000, commissionRate: 1.5, commissionAmount: 2775000, orders: 320, returnCount: 5 },
  { id: "C002", code: "NV000002", name: "Nguyễn Lê Hùng Cường", sales: 162000000, commissionRate: 1.2, commissionAmount: 1944000, orders: 280, returnCount: 8 },
  { id: "C003", code: "NV000003", name: "Vũ Thị Thảo Anh", sales: 128000000, commissionRate: 1.0, commissionAmount: 1280000, orders: 210, returnCount: 3 },
  { id: "C004", code: "NV000004", name: "Trần Minh Trí", sales: 142000000, commissionRate: 1.0, commissionAmount: 1420000, orders: 235, returnCount: 6 },
];

export interface TimeSheetRow {
  id: string;
  code: string;
  name: string;
  daysWorked: number;
  hoursWorked: number;
  otHours: number;
  late: number;
  earlyLeave: number;
  absence: number;
}

export const timeSheetRows: TimeSheetRow[] = [
  { id: "T001", code: "NV000001", name: "Hoàng Nam Quang", daysWorked: 26, hoursWorked: 208, otHours: 8, late: 0, earlyLeave: 0, absence: 0 },
  { id: "T002", code: "NV000002", name: "Nguyễn Lê Hùng Cường", daysWorked: 26, hoursWorked: 208, otHours: 4, late: 1, earlyLeave: 1, absence: 0 },
  { id: "T003", code: "NV000003", name: "Vũ Thị Thảo Anh", daysWorked: 24, hoursWorked: 192, otHours: 0, late: 2, earlyLeave: 0, absence: 2 },
  { id: "T004", code: "NV000004", name: "Trần Minh Trí", daysWorked: 26, hoursWorked: 208, otHours: 6, late: 0, earlyLeave: 0, absence: 0 },
  { id: "T005", code: "NV000005", name: "Đặng Thu Hà", daysWorked: 25, hoursWorked: 200, otHours: 0, late: 1, earlyLeave: 0, absence: 1 },
  { id: "T006", code: "NV000006", name: "Phạm Hoàng Long", daysWorked: 22, hoursWorked: 176, otHours: 10, late: 0, earlyLeave: 0, absence: 4 },
];
