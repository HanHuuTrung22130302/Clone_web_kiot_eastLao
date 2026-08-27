import { MapPin, Quote } from "lucide-react";
import { SupportCards } from "@/components/shared/support-cards";

export const metadata = {
  title: "Khách hàng KiotViet - Hơn 300.000 nhà bán hàng tin dùng",
  description:
    "Hân hạnh phục vụ hàng nghìn khách hàng mới mỗi tháng. Xem câu chuyện thành công của các chủ cửa hàng đang sử dụng phần mềm quản lý bán hàng KiotViet.",
};

const CUSTOMERS = [
  {
    name: "3 Gai quán",
    story: "Thành công đến từ 3 yếu tố",
    address: "C02, 518 Võ Văn Kiệt, P. Cầu Kho, Quận 1, TP. Hồ Chí Minh",
    industry: "F&B",
  },
  {
    name: "Salon làm đẹp",
    story: "Cô sinh viên 20 tuổi mở salon làm đẹp riêng, đón 30-40 lượt khách mỗi ngày",
    address: "Khu trung tâm thương mại Huyndai, Hà Đông, Hà Nội",
    industry: "Làm đẹp",
  },
  {
    name: "Thời trang CHIVARO",
    story: "Đẳng cấp cho một chàng trai lịch lãm",
    address: "19 Tây Sơn, Đống Đa, Hà Nội",
    industry: "Thời trang",
  },
  {
    name: "FAST 24H",
    story: "Cửa hàng tiện ích phục vụ mọi nhu cầu khách hàng",
    address: "93 Nguyễn Khuyến, Đống Đa, Hà Nội",
    industry: "Tiện ích",
  },
  {
    name: "Bá Minh Silk",
    story: "Sứ mệnh làm mới sản phẩm lụa tơ tằm truyền thống",
    address: "Ngõ 10 Nguyễn Văn Huyên, Cầu Giấy, Hà Nội",
    industry: "Thời trang",
  },
  {
    name: "Kim Ngân Store",
    story: "Thiên đường thời trang dành cho phái đẹp tại Đồng Tháp",
    address: "Số 39 Nguyễn Sinh Sắc, TP Sa Đéc, tỉnh Đồng Tháp",
    industry: "Thời trang",
  },
  {
    name: "Lily shop",
    story: "Cửa hàng mỹ phẩm nhỏ với chiến lược kinh doanh thông minh",
    address: "33 Hàng Thùng, Hoàn Kiếm, Hà Nội",
    industry: "Mỹ phẩm",
  },
  {
    name: "Rio Coffee",
    story: "Không gian cà phê Sài Gòn đặc trưng",
    address: "91 Mạc Thị Bưởi, Quận 1, Hồ Chí Minh",
    industry: "F&B",
  },
  {
    name: "TQQ",
    story: "Đẳng cấp thời trang Việt",
    address: "156 Tôn Đức Thắng, Đống Đa, Hà Nội",
    industry: "Thời trang",
  },
  {
    name: "VIETFLAG",
    story: "Nhà sản xuất lá cờ hàng đầu Việt Nam",
    address: "168/16 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP. Hồ Chí Minh",
    industry: "Sản xuất",
  },
  {
    name: "COCO DIVA",
    story: "Giày Việt Nam xuất khẩu",
    address: "456 Nguyễn Văn Luông, Quận 6, TP. Hồ Chí Minh",
    industry: "Thời trang",
  },
  {
    name: "Hồng Hải",
    story: "Đại lý kim khí, điện nước - Kinh doanh là hành trình học hỏi không ngừng",
    address: "Kiot 13-14 chợ Thái Hà, Đống Đa, Hà Nội",
    industry: "Vật liệu",
  },
  {
    name: "QUÁN BIA CONTAINER NO.15",
    story: "Bia tươi đậm đà hương vị Việt",
    address: "15 Trần Khánh Dư, Hoàn Kiếm, Hà Nội",
    industry: "F&B",
  },
  {
    name: "VTC",
    story: "Truyền hình của người Việt",
    address: "65 Lạc Trung, Hai Bà Trưng, Hà Nội",
    industry: "Truyền thông",
  },
  {
    name: "Bếp Mây",
    story: "Tiệm đồ ăn homemade ngon khó cưỡng",
    address: "Số 59 ngõ Láng Trung, Đống Đa, Hà Nội",
    industry: "F&B",
  },
  {
    name: "Văn phòng phẩm Tiến Dũng",
    story: "Mang đến chất lượng tốt nhất cho khách hàng",
    address: "Kiot số 4, Trần Quang Diệu, Đống Đa, Hà Nội",
    industry: "Văn phòng phẩm",
  },
  {
    name: "Nhà thuốc Thân Thiện",
    story: "Đẩy mạnh bán thuốc online nhờ hỗ trợ từ phần mềm quản lý",
    address: "Số 10 ngõ 68/39, đường Cầu Giấy, Hà Nội",
    industry: "Nhà thuốc",
  },
  {
    name: "NANnKABAB",
    story: "Nhà hàng ẩm thực Trung Đông độc đáo",
    address: "49 Xuân Diệu, Tây Hồ, Hà Nội",
    industry: "F&B",
  },
  {
    name: "MY WINE Store",
    story: "My wine like my wife",
    address: "91 Quang Trung, Phan Rang-Tháp Chàm, tỉnh Ninh Thuận",
    industry: "F&B",
  },
  {
    name: "DOMY.VN",
    story: "Siêu thị HÀNG NHẬP chính hãng",
    address: "35 Tân Hải, P.13, Q. Tân Bình, Hồ Chí Minh",
    industry: "Siêu thị",
  },
];

export default function KhachHangPage() {
  return (
    <>
      <section className="bg-[#0A2133] text-white">
        <div className="kv-container grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <h1 className="text-[28px] font-semibold leading-[1.2] sm:text-[36px]">
              Hân hạnh phục vụ thêm{" "}
              <span className="text-[#6FB4FF]">hàng nghìn khách hàng</span>{" "}
              mới mỗi tháng
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
              Hơn 300.000 nhà bán hàng trên toàn quốc đang sử dụng KiotViet để
              quản lý và phát triển kinh doanh mỗi ngày.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div>
                <p className="text-[32px] font-bold text-white">300.000+</p>
                <p className="text-[13px] text-white/60">Cửa hàng sử dụng</p>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <p className="text-[32px] font-bold text-white">63</p>
                <p className="text-[13px] text-white/60">Tỉnh thành phủ sóng</p>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <p className="text-[32px] font-bold text-white">4.9★</p>
                <p className="text-[13px] text-white/60">Đánh giá người dùng</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/v2/khach-hang-hero.webp"
                alt="Khách hàng KiotViet"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="kv-section bg-muted/40">
        <div className="kv-container">
          <div className="text-center">
            <h2 className="kv-section-title__h">Câu chuyện thành công</h2>
            <p className="kv-section-title__sub">
              Những chủ cửa hàng kinh doanh hiệu quả cùng KiotViet
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CUSTOMERS.map((c) => (
              <div
                key={c.name + c.address}
                className="kv-card flex flex-col p-6 transition-shadow hover:shadow-lg"
              >
                <Quote className="h-6 w-6 text-primary/30" />
                <h3 className="mt-3 text-[16px] font-semibold text-foreground">
                  {c.name}
                </h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-foreground/75">
                  {c.story}
                </p>
                <div className="mt-4 border-t pt-3">
                  <p className="flex items-start gap-1.5 text-[12px] text-muted-foreground">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {c.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SupportCards />
    </>
  );
}