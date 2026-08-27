import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "..", "public", "images", "www.kiotviet.vn");
const DST = path.resolve(__dirname, "..", "public", "images");

const MAPPINGS = [
  // home news
  ["images/v2/home/images-v2-home-news-thanh-toan-qr.webp-34fabd82caff.webp", "v2/home/news-thanh-toan-qr.webp"],
  ["images/v2/home/images-v2-home-news-hoa-don-dien-tu.webp-5839c8eff2db.webp", "v2/home/news-hoa-don-dien-tu.webp"],
  ["images/v2/home/images-v2-home-news-cau-chuyen-thanh-cong.webp-209860a460b9.webp", "v2/home/news-cau-chuyen-thanh-cong.webp"],
  // press
  ["images/v2/home/images-v2-home-press-vnexpress.webp-4029cfbb8418.webp", "v2/home/press-vnexpress.webp"],
  ["images/v2/home/images-v2-home-press-dantri.webp-142bf3929d86.webp", "v2/home/press-dantri.webp"],
  ["images/v2/home/images-v2-home-press-dautu.webp-81083c4bc932.webp", "v2/home/press-dautu.webp"],
  ["images/v2/home/images-v2-home-press-tuoitre.webp-b28f330177f1.webp", "v2/home/press-tuoitre.webp"],
  ["images/v2/home/images-v2-home-press-vneconomy.webp-23a1a72d808e.webp", "v2/home/press-vneconomy.webp"],
  ["images/v2/home/images-v2-home-press-cafef.webp-0d634422f0cb.webp", "v2/home/press-cafef.webp"],
  // hero/pos
  ["images/v2/home/pos-retail.webp", "v2/home/pos-retail.webp"],
  ["images/v2/home/fnb-pos.webp", "v2/home/fnb-pos.webp"],
  ["images/v2/home/fnb-food1.webp", "v2/home/fnb-food1.webp"],
  ["images/v2/home/fnb-food2.webp", "v2/home/fnb-food2.webp"],
  ["images/v2/home/fnb-person.webp", "v2/home/fnb-person.webp"],
  ["images/v2/home/images-v2-home-hero-fashionable-asian.webp-6ce65dba3bdd.webp", "v2/home/hero-fashionable-asian.webp"],
  // biz gallery
  ["images/v2/giai-phap/biz/images-v2-giai-phap-biz-home-biz-01.webp-0ed63ee45b43.webp", "v2/giai-phap/biz/home-biz-01.webp"],
  ["images/v2/giai-phap/biz/images-v2-giai-phap-biz-home-biz-02.webp-e1045d2586ca.webp", "v2/giai-phap/biz/home-biz-02.webp"],
  ["images/v2/giai-phap/biz/images-v2-giai-phap-biz-home-biz-03.webp-da17c467ad96.webp", "v2/giai-phap/biz/home-biz-03.webp"],
  ["images/v2/giai-phap/biz/images-v2-giai-phap-biz-home-biz-04.webp-7b261c024e0e.webp", "v2/giai-phap/biz/home-biz-04.webp"],
  ["images/v2/giai-phap/biz/images-v2-giai-phap-biz-home-biz-05.webp-bc03c83dbf93.webp", "v2/giai-phap/biz/home-biz-05.webp"],
  ["images/v2/giai-phap/biz/images-v2-giai-phap-biz-home-biz-06.webp-f55951cd9c5d.webp", "v2/giai-phap/biz/home-biz-06.webp"],
  ["images/v2/giai-phap/biz/images-v2-giai-phap-biz-home-biz-07.webp-c19757c47067.webp", "v2/giai-phap/biz/home-biz-07.webp"],
  ["images/v2/giai-phap/biz/images-v2-giai-phap-biz-home-biz-08.webp-2b567b3dc33c.webp", "v2/giai-phap/biz/home-biz-08.webp"],
  ["images/v2/giai-phap/biz/images-v2-giai-phap-biz-home-biz-09.webp-298a697b2b1d.webp", "v2/giai-phap/biz/home-biz-09.webp"],
  // reviews
  ["images/v2/giai-phap/reviews/images-v2-giai-phap-reviews-phuong_nguyen.webp-cfee19c90c84.webp", "v2/giai-phap/reviews/phuong_nguyen.webp"],
  ["images/v2/giai-phap/reviews/images-v2-giai-phap-reviews-linh_pham.webp-c18995f787e3.webp", "v2/giai-phap/reviews/linh_pham.webp"],
  ["images/v2/giai-phap/reviews/images-v2-giai-phap-reviews-chi_hoa.webp-d2ee5ed61082.webp", "v2/giai-phap/reviews/chi_hoa.webp"],
  ["images/v2/giai-phap/reviews/images-v2-giai-phap-reviews-anh_tuan.webp-4572a022958f.webp", "v2/giai-phap/reviews/anh_tuan.webp"],
  ["images/v2/giai-phap/reviews/images-v2-giai-phap-reviews-owner_woman.webp-d7a91a210f33.webp", "v2/giai-phap/reviews/owner_woman.webp"],
];

let ok = 0;
let missing = 0;
for (const [from, to] of MAPPINGS) {
  const src = path.join(SRC, from);
  const dst = path.join(DST, to);
  if (!fs.existsSync(src)) {
    console.log("MISSING", from);
    missing++;
    continue;
  }
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
  ok++;
}
console.log(`Mapped ${ok} images, ${missing} missing.`);
fs.rmSync(SRC, { recursive: true, force: true });
console.log("Removed raw crawl dir.");