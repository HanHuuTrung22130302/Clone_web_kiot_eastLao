# KiotViet UI Clone

Clone giao diện website **kiotviet.vn** (pre-backend) dựng bằng **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, nội dung trích từ evidence crawl thật.

## Chạy project

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

Build production:

```bash
npm run build && npm start
```

## Các trang

| Route | Mô tả | Nguồn evidence |
| --- | --- | --- |
| `/` | Homepage: 11 section (Hero, Giải pháp, Ngành hàng, Tin tức…) | `https-www.kiotviet.vn.md` |
| `/huong-dan-su-dung-kiotviet` | Trung tâm trợ giúp (index + 60 chuyên mục) | `docs-tree.json` |
| `/huong-dan-su-dung-kiotviet/[...slug]` | 268 trang hướng dẫn chi tiết (sidebar, breadcrumb, TOC block) | `docs-content.json` (extract từ HTML crawl) |
| `/phi-dich-vu` | Bảng giá: hero — 3 gói — bảng so sánh — thiết bị — hỗ trợ | `https-www.kiotviet.vn-phi-dich-vu.md` |
| `/khach-hang` | Khách hàng tiêu biểu + câu chuyện thành công | `https-www.kiotviet.vn-khach-hang.md` |
| `/blog` | Blog phân trang 1..168 | `https-www.kiotviet.vn-blog.md` |
| `/t/[tag]` | 5 chuyên mục blog | navigation.json |
| `/dang-ky` | Form đăng ký (fullname, phone, authentication_code maxlength=4, agree) | `https-www.kiotviet.vn-dang-ky.md` |
| `/dang-nhap` | Đăng nhập tài khoản (.kiotviet.vn) | Modal login trong evidence |
| `/ho-tro` | Trung tâm hỗ trợ + FAQ | `https-www.kiotviet.vn-phi-dich-vu.md` (kv-support-card) |
| `/lien-he` | Liên hệ + map | Footer evidence |
| `/sitemap.xml` | Sitemap (static + 268 docs) | — |
| `/not-found` | Trang 404 custom | landing-page evidence (đều là 404) |

## Cấu trúc code

```
web/
├─ scripts/
│  ├─ generate-data.mjs      # routes/navigation/docs-tree/blog-posts từ manifest crawl
│  ├─ extract-docs.mjs       # trích nội dung bài viết → src/data/docs-content.json (215 trang)
│  ├─ map-images.mjs         # map ảnh crawl → public/images/v2
│  └─ inspect-*.mjs          # công cụ điều tra HTML tạm thời
├─ src/
│  ├─ app/
│  │  ├─ (marketing)/        # layout marketing + các trang thường
│  │  ├─ (docs)/             # layout docs (sidebar) + trang hướng dẫn
│  │  └─ sitemap.ts, not-found.tsx
│  ├─ components/
│  │  ├─ layouts/            # navbar (desktop dropdown + mobile drawer), footer
│  │  ├─ sections/           # 11 section homepage
│  │  ├─ docs/               # sidebar, breadcrumb, content-blocks
│  │  └─ shared/support-cards.tsx
│  ├─ data/                  # JSON data layer
│  └─ lib/                   # utils, site (nav/footer/industries), docs, pricing
└─ public/images/v2/         # asset crawl (clean-rename)
```

## Data pipeline

1. **`output/markdown/ai-rebuild-handoff/implementation_manifest.json`** — nguồn gốc: 222 routes đã crawl, mỗi route có `profile.description` + `html_path`.
2. **`scripts/generate-data.mjs`** → `src/data/*.json` (routes, navigation, docs-tree 60 section/203 trang, blog-posts).
3. **`scripts/extract-docs.mjs`** đọc file HTML crawl, tìm container `div.supportMain-content_article-wrapper`, tách blocks (heading/paragraph/list/image/quote). Trang không có HTML thật (190+) dùng fallback cấu trúc từ `profile.description`.

## Design system

- Primary `#0070F4` (`0 112 244`), nền `#F7FAFA`, hero dark `#0A2133`.
- Font: "Google Sans Flex" (fallback Inter / Segoe UI), base 14–16px.
- CSS vars HSL theo chuẩn shadcn/ui; utilities `kv-container`, `kv-btn`, `kv-input`, `kv-card` trong `globals.css`.

## Lưu ý

- Chạy `node scripts/extract-docs.mjs` và `node scripts/map-images.mjs` nếu cần tái sinh data từ crawl (yêu cầu thư mục `output/` ở cấp repo).
- Website không kết nối backend; các form dừng ở UI (submit ghi nhận state client-side).