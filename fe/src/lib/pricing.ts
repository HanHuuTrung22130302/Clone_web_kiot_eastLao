export interface PricingPlan {
  name: string;
  price: string;
  unit: string;
  tag?: string;
  featured?: boolean;
  desc: string;
  rows: string[];
  cta?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Gói hỗ trợ",
    price: "270.000đ",
    unit: "tháng",
    desc: "Dành cho mô hình kinh doanh nhỏ & vận hành đơn giản.",
    rows: [
      "1 chi nhánh/ tháng",
      "3 tài khoản truy cập",
      "Không giới hạn tính năng cơ bản",
      "Hỗ trợ qua tổng đài",
      "Giải pháp thanh toán Napas VietQR/ Visa/ Master",
      "Cộng vận chuyển KiotViet",
      "Bán hàng online Shopee, TikTok Shop",
      "Miễn phí Hóa đơn điện tử KiotViet Mới",
    ],
  },
  {
    name: "Gói chuyên nghiệp",
    price: "330.000đ",
    unit: "tháng",
    tag: "Phổ biến",
    featured: true,
    desc: "Dành cho mô hình kinh doanh chuyên nghiệp, mở rộng.",
    rows: [
      "Quản lý nhiều chi nhánh: 270k/ +1 chi nhánh; nhiều kho: 150k/ +1 kho",
      "Không giới hạn tài khoản truy cập",
      "Không giới hạn tính năng cơ bản",
      "Không phí khởi tạo",
      "Hỗ trợ qua tổng đài",
      "Giải pháp thanh toán Napas VietQR/ Visa/ Master",
      "Hỗ trợ liên kết các hãng vận chuyển",
      "Bán hàng online sàn TMĐT, TikTok, Facebook, Instagram, Zalo",
      "Chấm công, tính lương 15 NV/ cửa hàng",
      "Tạo website bán hàng",
      "Phân tích kinh doanh thông minh",
      "Miễn phí Hóa đơn điện tử KiotViet Mới",
      "Miễn phí Chữ ký số Mới",
      "Miễn phí Phần mềm kế toán Hộ kinh doanh Mới",
    ],
    cta: "Dùng thử ngay",
  },
  {
    name: "Gói cao cấp",
    price: "490.000đ",
    unit: "tháng",
    desc: "Dành cho mô hình kinh doanh lớn, phức tạp & cần tùy biến.",
    rows: [
      "Quản lý nhiều chi nhánh: 375k/ +1 chi nhánh; nhiều kho: 150k/ +1 kho",
      "Không giới hạn tài khoản truy cập",
      "Không giới hạn tính năng cơ bản",
      "Không phí khởi tạo",
      "Hỗ trợ qua tổng đài",
      "Giải pháp thanh toán Napas VietQR/ Visa/ Master",
      "Liên kết hãng vận chuyển & COD siêu tốc",
      "Bán hàng online sàn TMĐT, TikTok, Facebook, Instagram, Zalo",
      "Chấm công, tính lương 50 NV/ cửa hàng",
      "Tạo website bán hàng",
      "Phân tích kinh doanh thông minh với AI",
      "Hỗ trợ kết nối API",
      "Miễn phí Hóa đơn điện tử KiotViet Mới",
      "Miễn phí Chữ ký số Mới",
      "Miễn phí Phần mềm kế toán Hộ kinh doanh Mới",
    ],
  },
];

export interface PkgGroup {
  title: string;
  features: string[];
}

export const packageComparison: PkgGroup[] = [
  {
    title: "Bán hàng · Đặt hàng, Bán hàng, Trả hàng",
    features: ["Hỗ trợ", "Chuyên nghiệp", "Cao cấp"],
  },
  {
    title: "Giải pháp thanh toán Napas VietQR/ Visa/ Master",
    features: ["Hỗ trợ", "Chuyên nghiệp", "Cao cấp"],
  },
  {
    title: "Tích hợp hóa đơn điện tử",
    features: ["Hỗ trợ", "Chuyên nghiệp", "Cao cấp"],
  },
  {
    title: "Thông báo đơn hàng tự động Telegram, Zalo...",
    features: ["Hỗ trợ", "Chuyên nghiệp", "Cao cấp"],
  },
  {
    title: "Bán hàng trên sàn TMĐT: Đồng bộ sản phẩm trên Shopee, TikTok",
    features: ["-", "Chuyên nghiệp", "Cao cấp"],
  },
  {
    title: "Bán hàng trên Facebook, Instagram, Zalo",
    features: ["-", "Chuyên nghiệp", "Cao cấp"],
  },
  {
    title: "Chấm công, tính lương",
    features: ["-", "15 NV/ cửa hàng", "50 NV/ cửa hàng"],
  },
  {
    title: "Kết nối API",
    features: ["-", "-", "Cao cấp"],
  },
  {
    title: "Phân tích kinh doanh thông minh AI",
    features: ["-", "Thông minh", "AI"],
  },
];

export interface DeviceItem {
  name: string;
  price: string;
  img: string;
  note?: string;
}

export const deviceGroups: { title: string; items: DeviceItem[] }[] = [
  {
    title: "Máy bán hàng",
    items: [
      { name: "Máy bán hàng D10 Pro", price: "5.680.000đ", img: "/images/v2/phi-dich-vu/devices/pos-d10pro.webp" },
      { name: "Máy POS bán hàng model D2-Single", price: "5.990.000đ", img: "/images/v2/phi-dich-vu/devices/pos-d2single.webp" },
      { name: "Máy POS bán hàng cảm ứng KV88", price: "7.590.000đ", img: "/images/v2/phi-dich-vu/devices/pos-kv88.webp" },
      { name: "Máy POS bán hàng cảm ứng D68", price: "7.690.000đ", img: "/images/v2/phi-dich-vu/devices/pos-d68.webp" },
    ],
  },
  {
    title: "Máy in hóa đơn, mã vạch",
    items: [
      { name: "Máy in mã vạch 365B", price: "1.400.000đ", img: "/images/v2/phi-dich-vu/devices/printer-365b.webp" },
      { name: "Máy in hóa đơn KV804", price: "1.400.000đ", img: "/images/v2/phi-dich-vu/devices/printer-kv804.webp" },
      { name: "Máy in hóa đơn TP80NL", price: "1.400.000đ", img: "/images/v2/phi-dich-vu/devices/printer-tp80nl-v2.webp" },
      { name: "Máy in hóa đơn KV838", price: "1.900.000đ", img: "/images/v2/phi-dich-vu/devices/printer-kv838-v2.webp" },
    ],
  },
  {
    title: "Máy quét mã vạch",
    items: [
      { name: "Máy quét mã vạch XL-2302", price: "1.600.000đ", img: "/images/v2/phi-dich-vu/devices/scanner-xl2302.webp" },
      { name: "Máy quét mã vạch XL-6500A", price: "600.000đ", img: "/images/v2/phi-dich-vu/devices/scanner-xl6500a.webp" },
    ],
  },
  {
    title: "Thiết bị bán hàng khác",
    items: [
      { name: "Màn hình hiển thị QR - KV99", price: "490.000đ", img: "/images/v2/phi-dich-vu/devices/qr-kv99.webp", note: "Bảo hành: Liên hệ" },
      { name: "Loa thông báo thanh toán QR đồng KV66", price: "540.000đ", img: "/images/v2/phi-dich-vu/devices/speaker-kv66.webp", note: "Bảo hành: Liên hệ" },
    ],
  },
];