import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { siteUrl, sitewideBusinessSchema } from "../data/structured-data";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Thuê xe tự lái Huế | VinFast, xe điện, 4–7 chỗ",
  description: "Thuê xe tự lái Huế với xe VinFast, xe điện, xe 4 chỗ và 7 chỗ. Thuê xe theo ngày, giao xe tận nơi Huế và xác nhận lịch tại sân bay Phú Bài.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "TRẠM NHÀ MINT - Thuê xe tự lái Huế",
    title: "Thuê xe tự lái Huế | VinFast, xe điện, 4–7 chỗ",
    description: "Thuê xe theo ngày tại Huế với xe VinFast, xe điện cùng lựa chọn 4 chỗ và 7 chỗ.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "TRẠM NHÀ MINT - Thuê xe tự lái Huế" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thuê xe tự lái Huế | TRẠM NHÀ MINT",
    description: "Thuê xe VinFast, xe điện, xe 4 chỗ và 7 chỗ theo ngày tại Huế.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} scroll-smooth`}>
      <body className="font-body bg-mist text-slate-700">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitewideBusinessSchema) }} />
        {children}
      </body>
    </html>
  );
}
