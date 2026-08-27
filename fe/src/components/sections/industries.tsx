import Link from "next/link";
import { SectionTitle } from "@/components/sections/solutions";

const INDUSTRY_GROUPS = [
  {
    title: "Bán buôn, bán lẻ",
    items: [
      { label: "Tạp hóa & Siêu thị", href: "/phan-mem-ban-hang-tap-hoa" },
      { label: "Thời trang", href: "/phan-mem-ban-hang-thoi-trang" },
      { label: "Điện tử & Điện máy", href: "/dien-thoai-dien-may" },
      { label: "Vật liệu xây dựng", href: "/vat-lieu-xay-dung" },
      { label: "Nông sản & Thực phẩm", href: "/nong-san-thuc-pham" },
      { label: "Nhà thuốc", href: "/phan-mem-quan-ly-nha-thuoc" },
      { label: "Xe & máy móc", href: "/linh-kien-may-moc" },
      { label: "Mỹ phẩm", href: "/phan-mem-quan-ly-ban-hang-my-pham" },
      { label: "Nội thất & Gia dụng", href: "/noi-that" },
      { label: "Mẹ & Bé", href: "/me-be" },
      { label: "Sách & Văn phòng phẩm", href: "/sach-van-phong-pham" },
      { label: "Hoa & Quà tặng", href: "/hoa-qua-tang" },
      { label: "Khác", href: "/cua-hang-ban-buon-ban-le" },
    ],
  },
  {
    title: "Ăn uống, giải trí",
    items: [
      { label: "Quán ăn", href: "/quan-ly-quan-an" },
      { label: "Cafe, Trà sữa", href: "/quan-ly-cafe-tra-sua" },
      { label: "Karaoke, Bida", href: "/quan-ly-karaoke-bida" },
      { label: "Bar, Pub & Club", href: "/quan-ly-bar-pub-club" },
      { label: "Căng tin & Trạm dừng nghỉ", href: "/ban-hang-cang-tin-tram-dung-nghi" },
      { label: "Nhà hàng", href: "/bar-cafe-nha-hang" },
    ],
  },
  {
    title: "Sức khỏe, làm đẹp",
    items: [
      { label: "Thẩm mỹ viện", href: "/quan-ly-tham-my-vien" },
      { label: "Hair Salon", href: "/quan-ly-hair-salon" },
      { label: "Nail & Mi", href: "/quan-ly-nail-mi" },
      { label: "Phòng khám", href: "/quan-ly-phong-kham" },
      { label: "Spa & Massage", href: "/quan-ly-spa-massage" },
      { label: "Gym, Yoga & Pilates", href: "/quan-ly-gym-yoga" },
    ],
  },
  {
    title: "Khách sạn, nhà nghỉ",
    items: [
      { label: "Khách sạn", href: "/quan-ly-khach-san" },
      { label: "Homestay", href: "/quan-ly-homestay" },
      { label: "Nhà nghỉ", href: "/quan-ly-nha-nghi" },
      { label: "Nhà trọ", href: "/quan-ly-nha-tro" },
      { label: "Villa", href: "/quan-ly-villa" },
      { label: "Resort", href: "/quan-ly-resort" },
      { label: "Camping/Glamping", href: "/quan-ly-camping-glamping" },
    ],
  },
];

export function IndustriesSection() {
  return (
    <section className="bg-[#F7FAFA] py-16 sm:py-24">
      <div className="kv-container">
        <div className="mb-12 max-w-2xl">
          <SectionTitle title="Ngành hàng" />
          <p className="kv-section-title__sub">
            Chúng tôi thiết kế phần mềm quản lý bán hàng chuyên biệt cho từng ngành
            hàng
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {INDUSTRY_GROUPS.map((group) => (
            <div key={group.title} className="kv-card p-6">
              <h3 className="text-[16px] font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="/dang-ky" className="kv-btn kv-btn--primary kv-btn--md">
            Dùng thử miễn phí
          </a>
        </div>
      </div>
    </section>
  );
}