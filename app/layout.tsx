import type { Metadata } from "next";
import "./globals.css";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "Cho Thuê Tự Lái",
  description: "Cho thuê xe ô tô tự lái ở Huế",
  telephone: "+84914002141",
  areaServed: "Huế, Việt Nam",
  url: "https://thuexetulaihue.vn",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thuexetulaihue.vn"),
  title: "Cho Thuê Tự Lái | Thuê xe tự lái Huế",
  description: "Cho Thuê Tự Lái cung cấp xe ô tô tự lái tại Huế. Liên hệ nhanh qua Zalo hoặc số điện thoại 091 400 2141.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Cho Thuê Tự Lái",
    title: "Cho Thuê Tự Lái | Thuê xe tự lái Huế",
    description: "Cho thuê xe ô tô tự lái ở Huế.",
  },
  twitter: { card: "summary_large_image", title: "Cho Thuê Tự Lái | Thuê xe tự lái Huế" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="font-body bg-mist text-slate-700">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        {children}
      </body>
    </html>
  );
}
