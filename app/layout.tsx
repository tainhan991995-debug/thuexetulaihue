import type { Metadata } from "next";
import "./globals.css";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "TRẠM NHÀ MINT",
  description: "Cho thuê xe ô tô tự lái ở Huế",
  telephone: "+84986789715",
  areaServed: "Huế, Việt Nam",
  url: "https://thuexetulaihue.vn",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thuexetulaihue.vn"),
  title: "TRẠM NHÀ MINT | Thuê xe tự lái Huế",
  description: "TRẠM NHÀ MINT cung cấp xe ô tô tự lái tại Huế. Liên hệ nhanh qua Zalo hoặc số điện thoại 0986 789 715.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "TRẠM NHÀ MINT",
    title: "TRẠM NHÀ MINT | Thuê xe tự lái Huế",
    description: "Cho thuê xe ô tô tự lái ở Huế.",
  },
  twitter: { card: "summary_large_image", title: "TRẠM NHÀ MINT | Thuê xe tự lái Huế" },
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
