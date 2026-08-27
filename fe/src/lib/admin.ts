export interface AdminMenuItem {
  label: string;
  href: string;
  icon: string;
  badge?: string;
  children?: AdminMenuItem[];
}

// Menu đối chiếu với menu thật tại hant.kiotviet.vn/man (#/DashBoard crawl).
export const adminMenu: AdminMenuItem[] = [
  { label: "Bán hàng", href: "/ban-hang", icon: "ik-basket-shopping" },
  { label: "Tổng quan", href: "/quan-ly", icon: "ik-square-chart-sparkle" },
  {
    label: "Hàng hóa",
    href: "/quan-ly/hang-hoa",
    icon: "ik-box",
    children: [
      { label: "Danh sách hàng hóa", href: "/quan-ly/hang-hoa", icon: "ik-box" },
      { label: "Thiết lập giá", href: "/quan-ly/thiet-lap-gia", icon: "ik-tags" },
      { label: "Bảo hành, bảo trì", href: "/quan-ly/bao-hanh-bao-tri", icon: "ik-shield-check" },
    ],
  },
  {
    label: "Kho hàng",
    href: "/quan-ly/kiem-kho",
    icon: "ik-boxes-stacked",
    children: [
      { label: "Kiểm kho", href: "/quan-ly/kiem-kho", icon: "ik-clipboard-check" },
      { label: "Xuất dùng nội bộ", href: "/quan-ly/xuat-dung-noi-bo", icon: "ik-arrow-up-from-box" },
      { label: "Xuất hủy", href: "/quan-ly/xuat-huy", icon: "ik-trash-can" },
    ],
  },
  {
    label: "Mua hàng",
    href: "/quan-ly/nha-cung-cap",
    icon: "ik-cart-flatbed-box-simple",
    children: [
      { label: "Nhà cung cấp", href: "/quan-ly/nha-cung-cap", icon: "ik-truck" },
      { label: "Hóa đơn đầu vào", href: "/quan-ly/hoa-don-dau-vao", icon: "ik-file-vat", badge: "Mới" },
      { label: "Nhập hàng", href: "/quan-ly/nhap-hang", icon: "ik-box-arrow-curved-right" },
      { label: "Trả hàng nhập", href: "/quan-ly/tra-hang-nhap", icon: "ik-file-arrow-curved-right" },
      { label: "Mua dịch vụ", href: "/quan-ly/mua-dich-vu", icon: "ik-briefcase-medical", badge: "Mới" },
    ],
  },
  {
    label: "Đơn hàng",
    href: "/quan-ly/don-hang",
    icon: "ik-file-lines",
    children: [
      { label: "Đặt hàng", href: "/quan-ly/don-hang", icon: "ik-file-pen" },
      { label: "Hóa đơn", href: "/quan-ly/hoa-don", icon: "ik-file-lines" },
      { label: "Trả hàng", href: "/quan-ly/tra-hang", icon: "ik-file-arrow-right-arrow-left" },
      { label: "Yêu cầu sửa chữa", href: "/quan-ly/yeu-cau-sua-chua", icon: "ik-file-wrench" },
      { label: "Đối tác giao hàng", href: "/quan-ly/doi-tac-giao-hang", icon: "ik-truck" },
      { label: "Vận đơn", href: "/quan-ly/van-don", icon: "ik-file-export" },
    ],
  },
  {
    label: "Khách hàng",
    href: "/quan-ly/khach-hang",
    icon: "ik-circle-user",
    children: [
      { label: "Danh sách khách hàng", href: "/quan-ly/khach-hang", icon: "ik-user-group" },
      { label: "Cửa hàng online trên Zalo", href: "/quan-ly/cua-hang-online-zalo", icon: "ik-zalo", badge: "Mới" },
    ],
  },
  {
    label: "Nhân viên",
    href: "/quan-ly/nhan-vien",
    icon: "ik-users",
    children: [
      { label: "Danh sách nhân viên", href: "/quan-ly/nhan-vien", icon: "ik-circle-user" },
      { label: "Lịch làm việc", href: "/quan-ly/lich-lam-viec", icon: "ik-calendar-lines" },
      { label: "Bảng chấm công", href: "/quan-ly/bang-cham-cong", icon: "ik-clipboard-check" },
      { label: "Bảng lương", href: "/quan-ly/bang-luong", icon: "ik-file-csv" },
      { label: "Bảng hoa hồng", href: "/quan-ly/bang-hoa-hong", icon: "ik-dollar-sign-plus" },
      { label: "Thiết lập nhân viên", href: "/quan-ly/thiet-lap-nhan-vien", icon: "ik-gear" },
    ],
  },
  { label: "Sổ quỹ", href: "/quan-ly/so-quy", icon: "ik-sack-dollar" },
  {
    label: "Báo cáo",
    href: "/quan-ly/bao-cao-ban-hang",
    icon: "ik-chart-pie-simple",
    children: [
      {
        label: "Phân tích",
        href: "/quan-ly/phan-tich/kinh-doanh",
        icon: "ik-chart-area",
        children: [
          { label: "Kinh doanh", href: "/quan-ly/phan-tich/kinh-doanh", icon: "ik-basket-shopping" },
          { label: "Hàng hóa", href: "/quan-ly/phan-tich/hang-hoa", icon: "ik-box" },
          { label: "Khách hàng", href: "/quan-ly/phan-tich/khach-hang", icon: "ik-circle-user" },
          { label: "Hiệu quả", href: "/quan-ly/phan-tich/hieu-qua", icon: "ik-chart-line-up" },
        ],
      },
      { label: "Cuối ngày", href: "/quan-ly/bao-cao-cuoi-ngay", icon: "ik-clock-rotate-left" },
      { label: "Bán hàng", href: "/quan-ly/bao-cao-ban-hang", icon: "ik-basket-shopping" },
      { label: "Đặt hàng", href: "/quan-ly/bao-cao-dat-hang", icon: "ik-file-pen" },
      { label: "Hàng hóa", href: "/quan-ly/bao-cao-hang-hoa", icon: "ik-box" },
      { label: "Khách hàng", href: "/quan-ly/bao-cao-khach-hang", icon: "ik-circle-user" },
      { label: "Nhà cung cấp", href: "/quan-ly/bao-cao-nha-cung-cap", icon: "ik-truck" },
      { label: "Nhân viên", href: "/quan-ly/bao-cao-nhan-vien", icon: "ik-users" },
      { label: "Kênh bán hàng", href: "/quan-ly/bao-cao-kenh-ban-hang", icon: "ik-store" },
      { label: "Tài chính", href: "/quan-ly/bao-cao-tai-chinh", icon: "ik-file-chart-column" },
    ],
  },
  { label: "Bán online", href: "/quan-ly/ban-online", icon: "ik-globe" },
  { label: "Website bán hàng", href: "/quan-ly/website", icon: "ik-laptop-mobile" },
  { label: "Thuế & Kế toán", href: "/quan-ly/thue-ke-toan", icon: "ik-file-percent" },
];

export interface AdminMenuGroup {
  title: string;
  items: AdminMenuItem[];
}

/** Nhóm cấp 2 cho menu dạng dividers ngang/dọc (đúng cấu trúc KiotViet man). */
export const adminMenuHeader = ["Bán hàng", "Tổng quan"];