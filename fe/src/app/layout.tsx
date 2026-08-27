import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KiotViet - Phần mềm quản lý bán hàng Phổ Biến Nhất",
    template: "%s | KiotViet",
  },
  description:
    "Phần mềm quản lý bán hàng phổ biến nhất. Hơn 300.000 nhà kinh doanh đang sử dụng để quản lý cửa hàng hằng ngày. Dùng thử miễn phí ngay.",
  keywords: ["KiotViet", "phần mềm quản lý bán hàng", "POS", "bán hàng"],
  icons: {
    icon: "/images/v2/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/css/kv-icon-kit.css" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}