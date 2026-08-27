export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const topNav: NavItem[] = [
  {
    label: "Giải pháp",
    href: "/",
    children: [
      { label: "Bán buôn, bán lẻ", href: "/cua-hang-ban-buon-ban-le" },
      { label: "Ăn uống, giải trí", href: "/bar-cafe-nha-hang" },
      { label: "Sức khỏe, làm đẹp", href: "/spa-salon-massage-nails" },
      { label: "Khách sạn, nhà nghỉ", href: "/quan-ly-khach-san-nha-nghi" },
      { label: "Giải pháp giao hàng", href: "/giai-phap-giao-hang-ngay-tren-kiotviet/" },
      { label: "Đồng bộ sàn TMĐT", href: "/giai-phap-ban-hang-tren-san-tmdt" },
    ],
  },
  {
    label: "Ngành hàng",
    href: "/",
    children: [
      { label: "Tạp hóa & Siêu thị", href: "/phan-mem-ban-hang-tap-hoa" },
      { label: "Thời trang", href: "/phan-mem-ban-hang-thoi-trang" },
      { label: "Điện thoại & Điện máy", href: "/dien-thoai-dien-may" },
      { label: "Mỹ phẩm", href: "/phan-mem-quan-ly-ban-hang-my-pham" },
      { label: "Nhà thuốc", href: "/phan-mem-quan-ly-nha-thuoc" },
      { label: "Nông sản & Thực phẩm", href: "/nong-san-thuc-pham" },
      { label: "Mẹ & Bé", href: "/me-be" },
      { label: "Nội thất & Gia dụng", href: "/noi-that" },
    ],
  },
  { label: "Phí dịch vụ", href: "/phi-dich-vu" },
  {
    label: "Khách hàng",
    href: "/khach-hang",
    children: [
      { label: "Khách hàng KiotViet", href: "/khach-hang" },
      { label: "Giới thiệu khách hàng", href: "/gioithieukhachhang" },
    ],
  },
  { label: "Hỗ trợ", href: "/ho-tro" },
  {
    label: "Tin tức",
    href: "/blog",
    children: [
      { label: "Kinh nghiệm kinh doanh", href: "/t/kinh-nghiem-kinh-doanh/" },
      { label: "Câu chuyện thành công", href: "/t/cau-chuyen-thanh-cong/" },
      { label: "Mẹo hay", href: "/t/meo-hay/" },
      { label: "Khuyến mãi", href: "/t/khuyen-mai/" },
      { label: "Tin tức về KiotViet", href: "/t/tin-tuc-ve-ki-ot-viet/" },
    ],
  },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "Doanh nghiệp",
    links: [
      { label: "Về KiotViet", href: "/ve-ki-ot-viet" },
      { label: "Khách hàng", href: "/khach-hang" },
      { label: "Điều khoản & chính sách sử dụng", href: "/dieu-khoan-su-dung" },
      { label: "Liên hệ", href: "/lien-he" },
      { label: "Tuyển dụng KiotViet", href: "/tuyen-dung" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "Video hướng dẫn sử dụng", href: "/video-hdsd" },
      { label: "Câu hỏi thường gặp", href: "/ho-tro/#faqs" },
      { label: "Wiki KiotViet", href: "/wiki-ki-ot-viet" },
      { label: "Hướng dẫn sử dụng", href: "/huong-dan-su-dung-kiotviet" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Sản phẩm",
    links: [
      { label: "Phần mềm kế toán", href: "/phan-mem-ke-toan" },
      { label: "Hoá đơn điện tử", href: "/hoa-don-dien-tu" },
      { label: "Giải pháp thanh toán QR", href: "/thanh-toan-qr" },
      { label: "Giải pháp vay vốn", href: "/vay-von-kinh-doanh" },
      { label: "Bảng chấm công", href: "/bang-cham-cong" },
    ],
  },
];

export const industries = [
  { label: "Bán buôn, bán lẻ", href: "/cua-hang-ban-buon-ban-le" },
  { label: "Ăn uống, giải trí", href: "/bar-cafe-nha-hang" },
  { label: "Sức khỏe, làm đẹp", href: "/spa-salon-massage-nails" },
  { label: "Khách sạn, nhà nghỉ", href: "/quan-ly-khach-san-nha-nghi" },
];