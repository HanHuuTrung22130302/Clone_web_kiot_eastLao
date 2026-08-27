import Link from "next/link";
import { SectionTitle } from "@/components/sections/solutions";

const ACCOUNTING = [
  {
    title: "Kế toán hộ kinh doanh",
    desc: "Miễn phí giải pháp kế toán hộ kinh doanh",
    href: "https://phanmemketoan.kiotviet.vn/",
    img: "/images/v2/home/ketoan-card-1.webp",
  },
  {
    title: "Hoá đơn điện tử",
    desc: "Miễn phí giải pháp xuất Hoá đơn điện tử từ máy tính tiền và chữ ký số",
    href: "https://hoadondientu.kiotviet.vn/",
    img: "/images/v2/home/ketoan-card-2.webp",
  },
  {
    title: "Tư vấn thuế",
    desc: "Miễn phí hỗ trợ và tư vấn về các vấn đề tuân thủ thuế với hơn 1000 tư vấn viên trên toàn quốc",
    href: "https://hoadondientu.kiotviet.vn/",
    img: "/images/v2/home/ketoan-card-3.webp",
  },
];

const ONLINE_SOLUTIONS = [
  {
    title: "Đồng bộ sàn TMĐT và mạng xã hội",
    desc: "Tích hợp và bán hàng trên các nền tảng tất cả sàn TMĐT và mạng xã hội như Shopee, Tiktok, Facebook, Zalo,...",
    href: "/giai-phap-ban-hang-tren-san-tmdt",
    img: "/images/v2/home/online-tmdt-mxh.webp",
  },
  {
    title: "Tích hợp FoodApp",
    desc: "Tích hợp và hỗ trợ quy trình bán hàng liền mạch trên tất cả nền tảng foodapp như ShopeeFood, GrabFood,...",
    href: "/bar-cafe-nha-hang",
    img: "/images/v2/home/online-foodapp.webp",
  },
  {
    title: "Tích hợp OTA",
    desc: "Kết nối các kênh OTA như Agoda, Booking, Airbnb giúp quản lý đặt phòng và lưu trú dễ dàng",
    href: "/spa-salon-massage-nails",
    img: "/images/v2/home/online-ota.webp",
  },
  {
    title: "Tạo website bán hàng",
    desc: "Cung cấp giải pháp Emenu, Ebooking, website bán hàng cho mọi ngành hàng",
    href: "https://web.kiotviet.vn/",
    img: "/images/v2/home/online-website.webp",
  },
  {
    title: "Giải pháp giao hàng",
    desc: "Tích hợp với tất cả hãng giao hàng bao gồm giao TMĐT, giao tức thời cho ngành FnB, giao hàng nặng theo kiện giúp so sánh giá, dịch vụ các hãng...",
    href: "/giai-phap-giao-hang-ngay-tren-kiotviet/",
    img: "/images/v2/home/online-giao-hang.webp",
  },
];

const STAFF_SOLUTIONS = [
  {
    title: "Bảng chấm công",
    desc: "Quản lý chấm công nhân viên chính xác, theo dõi kiểm tra dễ dàng",
    href: "/bang-cham-cong",
    img: "/images/v2/home/nhanvien-cham-cong.webp",
  },
  {
    title: "Bảng tính lương",
    desc: "Tự động tính lương dựa trên công, phụ cấp, thưởng phạt. Xuất bảng lương chi tiết nhanh chóng",
    href: "/bang-tinh-luong",
    img: "/images/v2/home/nhanvien-tinh-luong.webp",
  },
  {
    title: "Lịch làm việc",
    desc: "Sắp xếp ca làm việc linh hoạt, phân công nhân viên theo chi nhánh, theo dõi nghỉ phép dễ dàng",
    href: "/lich-lam-viec",
    img: "/images/v2/home/nhanvien-lich-lam-viec.webp",
  },
  {
    title: "Bảng hoa hồng",
    desc: "Thiết lập chính sách hoa hồng đa dạng theo doanh số, sản phẩm. Tự động tính và báo cáo minh bạch",
    href: "/bang-hoa-hong",
    img: "/images/v2/home/nhanvien-hoa-hong.webp",
  },
];

export function AccountingSection() {
  return (
    <section className="py-16 sm:py-24" id="sol-ketoan">
      <div className="kv-container">
        <SectionTitle
          title="Giải pháp kế toán và thuế"
          subtitle="Bộ giải pháp hỗ trợ hộ kinh doanh tuân thủ quy định về kế toán và thuế dễ dàng, miễn phí"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {ACCOUNTING.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className="kv-card group flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div
                className="h-40 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[18px] font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <span className="mt-5 text-[14px] font-medium text-primary">
                  Tìm hiểu thêm &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OnlineSection() {
  return (
    <section className="bg-[#E5F0FF]/60 py-16 sm:py-24" id="sol-online">
      <div className="kv-container">
        <SectionTitle
          title="Giải pháp bán hàng Online"
          subtitle="Giải pháp tích hợp đa kênh bán hàng online từ sàn TMĐT, mạng xã hội đến giao hàng, giúp quản lý và vận hành dễ dàng."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ONLINE_SOLUTIONS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className="kv-card group flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div
                className="h-44 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[16px] font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <span className="mt-4 text-[14px] font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Tìm hiểu thêm &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StaffSection() {
  return (
    <section className="py-16 sm:py-24" id="sol-nhan-vien">
      <div className="kv-container">
        <SectionTitle
          title="Giải pháp quản lý nhân viên"
          subtitle="Bộ công cụ quản lý nhân sự toàn diện giúp chấm công, tính lương, sắp xếp ca và theo dõi hoa hồng chính xác"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STAFF_SOLUTIONS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="kv-card group flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div
                className="h-44 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[16px] font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <span className="mt-4 text-[14px] font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Tìm hiểu thêm &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}