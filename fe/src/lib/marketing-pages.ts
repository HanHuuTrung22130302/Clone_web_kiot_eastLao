export interface MarketingPageMeta {
  slug: string;
  title: string;
  subtitle: string;
  category: "solution" | "industry" | "fnb" | "health" | "hotel" | "product" | "company" | "article";
  image?: string;
  icon?: string;
}

const SOLUTION_IMG = "/images/v2/giai-phap/biz/home-biz-01.webp";
const FNB_IMG = "/images/v2/giai-phap/biz/home-biz-02.webp";
const HEALTH_IMG = "/images/v2/giai-phap/biz/home-biz-03.webp";
const HOTEL_IMG = "/images/v2/giai-phap/biz/home-biz-04.webp";
const TAP_HOA_IMG = "/images/v2/industries/tap-hoa.png";
const NHA_HANG_IMG = "/images/v2/industries/nha-hang.png";
const SALON_IMG = "/images/v2/industries/salon.png";
const KHACH_SAN_IMG = "/images/v2/industries/khach-san.png";

const SOLUTIONS: MarketingPageMeta[] = [
  {
    slug: "/cua-hang-ban-buon-ban-le",
    title: "Phần mềm bán buôn, bán lẻ",
    subtitle:
      "Quản lý bán hàng đa kênh, kho hàng, công nợ và nhân viên cho cửa hàng tạp hóa, siêu thị mini, đại lý phân phối ngay trên một phần mềm.",
    category: "solution",
    image: SOLUTION_IMG,
  },
  {
    slug: "/bar-cafe-nha-hang",
    title: "Phần mềm quản lý quán cafe, nhà hàng",
    subtitle:
      "Order chính xác, chia ca, quản lý bàn, tích hợp in bill và đồng bộ với các ứng dụng giao đồ ăn như GrabFood, ShopeeFood, Baemin.",
    category: "solution",
    image: FNB_IMG,
  },
  {
    slug: "/spa-salon-massage-nails",
    title: "Phần mềm quản lý spa, salon, nails",
    subtitle:
      "Quản lý lịch hẹn, liệu trình, hồ sơ khách hàng và doanh thu cho spa, salon tóc, nail, massage chuyên nghiệp.",
    category: "solution",
    image: HEALTH_IMG,
  },
  {
    slug: "/quan-ly-khach-san-nha-nghi",
    title: "Phần mềm quản lý khách sạn, nhà nghỉ",
    subtitle:
      "Đặt phòng, nhận/trả phòng, quản lý tình trạng buồng phòng, tích hợp Agoda, Booking.com và quản lý doanh thu lễ tân.",
    category: "solution",
    image: HOTEL_IMG,
  },
  {
    slug: "/giai-phap-giao-hang-ngay-tren-kiotviet",
    title: "Giải pháp giao hàng",
    subtitle:
      "Tạo đơn giao hàng, kết nối các hãng vận chuyển, theo dõi đơn hàng và đối soát phí giao vận ngay trên KiotViet.",
    category: "solution",
    image: SOLUTION_IMG,
  },
  {
    slug: "/giai-phap-ban-hang-tren-san-tmdt",
    title: "Giải pháp bán hàng trên sàn TMĐT",
    subtitle:
      "Đồng bộ hàng hóa, tồn kho và đơn hàng giữa KiotViet với các sàn thương mại điện tử như Shopee, Lazada, Tiki.",
    category: "solution",
    image: SOLUTION_IMG,
  },
];

const INDUSTRIES: MarketingPageMeta[] = [
  {
    slug: "/phan-mem-ban-hang-tap-hoa",
    title: "Phần mềm bán hàng tạp hóa, siêu thị mini",
    subtitle:
      "Bán hàng nhanh, kiểm soát tồn kho theo hạn sử dụng, quản lý hàng lo và nhà cung cấp cho cửa hàng tạp hóa.",
    category: "industry",
    image: TAP_HOA_IMG,
  },
  {
    slug: "/phan-mem-ban-hang-thoi-trang",
    title: "Phần mềm bán hàng thời trang",
    subtitle:
      "Quản lý màu sắc, size, thu chi và chương trình khuyến mãi cho cửa hàng quần áo, giày dép, phụ kiện.",
    category: "industry",
    image: SALON_IMG,
  },
  {
    slug: "/dien-thoai-dien-may",
    title: "Phần mềm quản lý điện thoại, điện máy",
    subtitle:
      "Quản lý hàng hóa theo IMEI/Serial, bảo hành, bảo trì và công nợ cho cửa hàng điện thoại, điện máy.",
    category: "industry",
    image: SOLUTION_IMG,
  },
  {
    slug: "/phan-mem-quan-ly-ban-hang-my-pham",
    title: "Phần mềm quản lý bán hàng mỹ phẩm",
    subtitle:
      "Quản lý lô hạn sử dụng, chương trình khách hàng thân thiết và doanh thu cho cửa hàng mỹ phẩm.",
    category: "industry",
    image: SALON_IMG,
  },
  {
    slug: "/phan-mem-quan-ly-nha-thuoc",
    title: "Phần mềm quản lý nhà thuốc",
    subtitle:
      "Quản lý thuốc theo lô, hạn dùng, kê khai giá và hỗ trợ bán hàng đúng chuẩn GPP cho nhà thuốc.",
    category: "industry",
    image: HEALTH_IMG,
  },
  {
    slug: "/nong-san-thuc-pham",
    title: "Phần mềm bán hàng nông sản, thực phẩm",
    subtitle:
      "Quản lý hàng tươi sống theo khối lượng, lô hạn sử dụng và nhà cung cấp cho cửa hàng thực phẩm sạch.",
    category: "industry",
    image: TAP_HOA_IMG,
  },
  {
    slug: "/me-be",
    title: "Phần mềm bán hàng mẹ và bé",
    subtitle:
      "Quản lý hàng hóa, lô hạn dùng, chương trình khuyến mãi và khách hàng thân thiết cho cửa hàng mẹ và bé.",
    category: "industry",
    image: SALON_IMG,
  },
  {
    slug: "/noi-that",
    title: "Phần mềm bán hàng nội thất, gia dụng",
    subtitle:
      "Quản lý hàng hóa cồng kềnh, đặt hàng, giao hàng và công nợ cho cửa hàng nội thất, gia dụng.",
    category: "industry",
    image: HOTEL_IMG,
  },
  {
    slug: "/linh-kien-may-moc",
    title: "Phần mềm quản lý xe, máy móc, linh kiện",
    subtitle:
      "Quản lý phụ tùng theo IMEI/Serial, bảo hành, sửa chữa và công nợ cho cửa hàng xe máy, máy móc.",
    category: "industry",
    image: SOLUTION_IMG,
  },
  {
    slug: "/vat-lieu-xay-dung",
    title: "Phần mềm bán hàng vật liệu xây dựng",
    subtitle:
      "Quản lý bán buôn theo khối lượng, công nợ và đơn vị tính phức tạp cho đại lý vật liệu xây dựng.",
    category: "industry",
    image: TAP_HOA_IMG,
  },
  {
    slug: "/sach-van-phong-pham",
    title: "Phần mềm bán hàng sách, văn phòng phẩm",
    subtitle:
      "Quản lý hàng hóa đa dạng, giá bán theo niên vụ và chương trình khuyến mãi cho nhà sách, văn phòng phẩm.",
    category: "industry",
    image: SOLUTION_IMG,
  },
  {
    slug: "/hoa-qua-tang",
    title: "Phần mềm bán hàng hoa, quà tặng",
    subtitle:
      "Quản lý hàng hóa theo combo, đặt hàng giao tận nơi và chương trình khuyến mãi cho cửa hàng hoa, quà tặng.",
    category: "industry",
    image: SALON_IMG,
  },
  {
    slug: "/nganh-hang-ban-le",
    title: "Giải pháp ngành hàng bán lẻ",
    subtitle:
      "Phần mềm bán hàng đa ngành nghề phù hợp cho mọi mô hình kinh doanh bán lẻ, từ cửa hàng nhỏ đến chuỗi siêu thị.",
    category: "industry",
    image: SOLUTION_IMG,
  },
  {
    slug: "/phan-mem-ban-hang-sieu-thi-mini",
    title: "Phần mềm bán hàng siêu thị mini",
    subtitle:
      "Quản lý hàng hóa theo vạch, kiểm kho nhanh, tính tiền và quản lý nhân viên cho siêu thị mini.",
    category: "industry",
    image: TAP_HOA_IMG,
  },
  {
    slug: "/nha-nghi-khach-san-homestay-villa",
    title: "Phần mềm quản lý nhà nghỉ, khách sạn, homestay, villa",
    subtitle:
      "Quản lý đặt phòng, lễ tân, buồng phòng và doanh thu cho nhà nghỉ, khách sạn, homestay, villa.",
    category: "hotel",
    image: HOTEL_IMG,
  },
];

const FNB: MarketingPageMeta[] = [
  {
    slug: "/quan-ly-quan-an",
    title: "Phần mềm quản lý quán ăn",
    subtitle:
      "Order nhanh, chia ca, quản lý bàn và tích hợp in bill, đồng bộ ứng dụng giao đồ ăn cho quán ăn.",
    category: "fnb",
    image: FNB_IMG,
  },
  {
    slug: "/quan-ly-cafe-tra-sua",
    title: "Phần mềm quản lý cafe, trà sữa",
    subtitle:
      "Quản lý thực đơn, order, khuyến mãi và chương trình khách hàng thân thiết cho quán cafe, trà sữa.",
    category: "fnb",
    image: FNB_IMG,
  },
  {
    slug: "/quan-ly-karaoke-bida",
    title: "Phần mềm quản lý karaoke, bida",
    subtitle:
      "Quản lý phòng hát, tính giờ, bàn bida và doanh thu cho dịch vụ giải trí karaoke, bida.",
    category: "fnb",
    image: FNB_IMG,
  },
  {
    slug: "/quan-ly-bar-pub-club",
    title: "Phần mềm quản lý bar, pub, club",
    subtitle:
      "Quản lý quầy bar, đặt bàn, tính tiền nhanh và kiểm soát tồn kho đồ uống cho bar, pub, club.",
    category: "fnb",
    image: FNB_IMG,
  },
  {
    slug: "/ban-hang-cang-tin-tram-dung-nghi",
    title: "Phần mềm bán hàng căng tin, trạm dừng nghỉ",
    subtitle:
      "Bán hàng nhanh, quản lý nhiều quầy và kiểm soát tồn kho cho căng tin, trạm dừng nghỉ.",
    category: "fnb",
    image: FNB_IMG,
  },
];

const HEALTH: MarketingPageMeta[] = [
  {
    slug: "/quan-ly-tham-my-vien",
    title: "Phần mềm quản lý thẩm mỹ viện",
    subtitle:
      "Quản lý lịch hẹn, liệu trình, chăm sóc khách hàng và doanh thu cho thẩm mỹ viện.",
    category: "health",
    image: HEALTH_IMG,
  },
  {
    slug: "/quan-ly-hair-salon",
    title: "Phần mềm quản lý hair salon",
    subtitle:
      "Quản lý lịch hẹn, nhân viên, doanh thu và chương trình khách hàng thân thiết cho hair salon.",
    category: "health",
    image: SALON_IMG,
  },
  {
    slug: "/quan-ly-nail-mi",
    title: "Phần mềm quản lý nail, mi",
    subtitle:
      "Quản lý lịch hẹn, dịch vụ, doanh thu theo nhân viên cho cửa hàng nail, mi.",
    category: "health",
    image: SALON_IMG,
  },
  {
    slug: "/quan-ly-phong-kham",
    title: "Phần mềm quản lý phòng khám",
    subtitle:
      "Quản lý lịch khám, hồ sơ bệnh nhân, thu phí dịch vụ cho phòng khám, phòng mạch.",
    category: "health",
    image: HEALTH_IMG,
  },
  {
    slug: "/quan-ly-spa-massage",
    title: "Phần mềm quản lý spa, massage",
    subtitle:
      "Quản lý lịch hẹn, liệu trình, nhân viên và doanh thu cho spa, massage.",
    category: "health",
    image: HEALTH_IMG,
  },
  {
    slug: "/quan-ly-gym-yoga",
    title: "Phần mềm quản lý gym, yoga, pilates",
    subtitle:
      "Quản lý gói hội viên, lịch tập, nhân viên và doanh thu cho trung tâm gym, yoga, pilates.",
    category: "health",
    image: HEALTH_IMG,
  },
];

const HOTELS: MarketingPageMeta[] = [
  {
    slug: "/quan-ly-khach-san",
    title: "Phần mềm quản lý khách sạn",
    subtitle:
      "Đặt phòng, lễ tân, buồng phòng, tích hợp OTAs và quản lý doanh thu cho khách sạn.",
    category: "hotel",
    image: KHACH_SAN_IMG,
  },
  {
    slug: "/quan-ly-homestay",
    title: "Phần mềm quản lý homestay",
    subtitle:
      "Quản lý đặt phòng online, lịch đặt phòng và doanh thu cho homestay.",
    category: "hotel",
    image: HOTEL_IMG,
  },
  {
    slug: "/quan-ly-nha-nghi",
    title: "Phần mềm quản lý nhà nghỉ",
    subtitle:
      "Quản lý đặt phòng, lễ tân và doanh thu cho nhà nghỉ.",
    category: "hotel",
    image: HOTEL_IMG,
  },
  {
    slug: "/quan-ly-nha-tro",
    title: "Phần mềm quản lý nhà trọ",
    subtitle:
      "Quản lý phòng trọ, hóa đơn điện nước, thu tiền phòng và báo cáo cho chủ nhà trọ.",
    category: "hotel",
    image: HOTEL_IMG,
  },
  {
    slug: "/quan-ly-villa",
    title: "Phần mềm quản lý villa",
    subtitle:
      "Quản lý đặt phòng, dịch vụ đi kèm và doanh thu cho villa.",
    category: "hotel",
    image: KHACH_SAN_IMG,
  },
  {
    slug: "/quan-ly-resort",
    title: "Phần mềm quản lý resort",
    subtitle:
      "Quản lý đặt phòng, dịch vụ và doanh thu cho resort.",
    category: "hotel",
    image: KHACH_SAN_IMG,
  },
  {
    slug: "/quan-ly-camping-glamping",
    title: "Phần mềm quản lý camping, glamping",
    subtitle:
      "Quản lý đặt chỗ, dịch vụ đi kèm và doanh thu cho khu camping, glamping.",
    category: "hotel",
    image: HOTEL_IMG,
  },
];

const PRODUCTS: MarketingPageMeta[] = [
  {
    slug: "/phan-mem-ke-toan",
    title: "Phần mềm kế toán KiotViet",
    subtitle:
      "Kết nối số liệu bán hàng với sổ kế toán, tự động hạch toán và lập báo cáo tài chính cho hộ kinh doanh, doanh nghiệp.",
    category: "product",
    image: SOLUTION_IMG,
  },
  {
    slug: "/hoa-don-dien-tu",
    title: "Phần mềm hóa đơn điện tử",
    subtitle:
      "Lập, phát hành và quản lý hóa đơn điện tử đúng chuẩn thông tư, kết nối trực tiếp với cơ quan thuế.",
    category: "product",
    image: SOLUTION_IMG,
  },
  {
    slug: "/thanh-toan-qr",
    title: "Giải pháp thanh toán QR",
    subtitle:
      "Nhận tiền thanh toán qua mã QR ngay tại quầy, tiền về tức thì, theo dõi giao dịch trên phần mềm.",
    category: "product",
    image: SOLUTION_IMG,
  },
  {
    slug: "/vay-von-kinh-doanh",
    title: "Giải pháp vay vốn kinh doanh",
    subtitle:
      "Vay tín chấp nhanh chóng với đa dạng gói phù hợp, kết nối trực tiếp các đối tác ngân hàng uy tín.",
    category: "product",
    image: SOLUTION_IMG,
  },
  {
    slug: "/bang-cham-cong",
    title: "Phần mềm chấm công, tính lương",
    subtitle:
      "Chấm công bằng máy chấm công, điện thoại, tính lương tự động và quản lý ca làm việc cho nhân viên.",
    category: "product",
    image: SOLUTION_IMG,
  },
];

const COMPANIES: MarketingPageMeta[] = [
  {
    slug: "/ve-ki-ot-viet",
    title: "Về KiotViet",
    subtitle:
      "KiotViet là phần mềm quản lý bán hàng của Công ty Cổ phần Công nghệ KiotViet - giải pháp bán hàng phổ biến nhất Việt Nam với hơn 300.000 khách hàng.",
    category: "company",
    image: SOLUTION_IMG,
  },
  {
    slug: "/dieu-khoan-su-dung",
    title: "Điều khoản & chính sách sử dụng",
    subtitle:
      "Các điều khoản và chính sách sử dụng dịch vụ phần mềm quản lý bán hàng KiotViet.",
    category: "company",
    image: SOLUTION_IMG,
  },
  {
    slug: "/tuyen-dung",
    title: "Tuyển dụng KiotViet",
    subtitle:
      "Cơ hội nghề nghiệp tại Công ty Cổ phần Công nghệ KiotViet - nơi làm việc năng động, chuyên nghiệp và nhiều đãi ngộ hấp dẫn.",
    category: "company",
    image: SOLUTION_IMG,
  },
  {
    slug: "/video-hdsd",
    title: "Video hướng dẫn sử dụng KiotViet",
    subtitle:
      "Xem các video hướng dẫn sử dụng phần mềm quản lý bán hàng KiotViet chi tiết từ A-Z.",
    category: "company",
    image: SOLUTION_IMG,
  },
  {
    slug: "/wiki-ki-ot-viet",
    title: "Wiki KiotViet",
    subtitle:
      "Kho kiến thức tổng hợp về phần mềm quản lý bán hàng KiotViet, mẹo sử dụng và kinh nghiệm kinh doanh.",
    category: "company",
    image: SOLUTION_IMG,
  },
  {
    slug: "/gioithieukhachhang",
    title: "Giới thiệu khách hàng",
    subtitle:
      "Giới thiệu khách hàng sử dụng KiotViet và nhận ưu đãi hấp dẫn khi họ đăng ký thành công.",
    category: "company",
    image: SOLUTION_IMG,
  },
];

export const marketingPages: MarketingPageMeta[] = [
  ...SOLUTIONS,
  ...INDUSTRIES,
  ...FNB,
  ...HEALTH,
  ...HOTELS,
  ...PRODUCTS,
  ...COMPANIES,
];

const bySlug = new Map(marketingPages.map((p) => [p.slug, p]));

export function getMarketingPage(slug: string): MarketingPageMeta | null {
  return bySlug.get(slug) || null;
}

export function relatedLinks(category: MarketingPageMeta["category"]): MarketingPageMeta[] {
  const pool =
    category === "solution"
      ? SOLUTIONS
      : category === "industry"
        ? INDUSTRIES
        : category === "fnb"
          ? FNB
          : category === "health"
            ? HEALTH
            : category === "hotel"
              ? HOTELS
              : category === "product"
                ? PRODUCTS
                : COMPANIES;
  return pool;
}

export function prettifySlug(slug: string): string {
  const clean = slug.replace(/^\/+|\/+$/g, "");
  const words = clean.split("-");
  const stop = new Set(["phan", "mem", "quan", "ly", "ban", "hang", "cua", "va", "nha", "sach", "giai", "phap", "dich", "vu", "quan-ly", "kiotviet"]);
  return words
    .map((w) => {
      if (w === "kiotviet") return "KiotViet";
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}
