import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { siteUrl, sitewideBusinessSchema } from "../data/structured-data";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["400"],
  display: "optional",
  preload: true,
  adjustFontFallback: true,
  variable: "--font-be-vietnam-pro",
});

const lora = Lora({
  subsets: ["vietnamese"],
  weight: ["600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Thuê xe tự lái Huế | Xe điện tự lái & xe xăng tự lái",
  description:
    "Thuê xe tự lái Huế với xe điện tự lái VinFast và xe xăng tự lái 4–7 chỗ. Giá theo ngày, giao xe tận nơi và xác nhận lịch tại sân bay Phú Bài.",
  keywords: [
    "thuê xe tự lái Huế",
    "xe điện tự lái",
    "xe xăng tự lái",
    "thuê xe VinFast Huế",
    "thuê xe 4 chỗ Huế",
    "thuê xe 7 chỗ Huế",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "TRẠM NHÀ MINT - Thuê xe tự lái Huế",
    title: "Thuê xe tự lái Huế | Xe điện tự lái & xe xăng tự lái",
    description:
      "Thuê xe theo ngày tại Huế với xe điện tự lái VinFast, xe xăng tự lái cùng lựa chọn 4–7 chỗ.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TRẠM NHÀ MINT - Thuê xe tự lái Huế",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thuê xe tự lái Huế | TRẠM NHÀ MINT",
    description:
      "Thuê xe điện tự lái VinFast, xe xăng tự lái cùng lựa chọn 4–7 chỗ theo ngày tại Huế.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/favicon-96.png", type: "image/png", sizes: "96x96" }],
    shortcut: ["/favicon-96.png"],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${lora.variable} scroll-smooth`}>
      <body className="font-body bg-mist text-slate-700">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sitewideBusinessSchema),
          }}
        />

        {children}

        <GoogleAnalytics gaId="G-QDHC6ZZQ5D" />
      </body>
    </html>
  );
}
