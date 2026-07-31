import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thuexetulaihue.vn"),
  title: "Trạm Nhà Mình | Thuê xe tự lái Huế",
  description: "Trạm Nhà Mình cho thuê xe ô tô tự lái tại Huế. Xe full option, bảo hiểm đầy đủ và miễn phí sạc pin theo giới thiệu.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Trạm Nhà Mình",
    title: "Trạm Nhà Mình | Thuê xe tự lái Huế",
    description: "Cho thuê xe ô tô tự lái ở Huế.",
  },
  twitter: { card: "summary_large_image", title: "Trạm Nhà Mình | Thuê xe tự lái Huế" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="font-body bg-mist text-slate-700">{children}</body>
    </html>
  );
}
