import type { Metadata } from "next";
import "./globals.css";
import faqs from "../data/faq.json";

const siteUrl = "https://thuexetulaihue.vn";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "TRẠM NHÀ MINT - Thuê xe tự lái Huế",
  description: "Dịch vụ thuê xe tự lái tại Huế với xe VinFast, xe điện, xe 4 chỗ và 7 chỗ theo ngày.",
  telephone: "+84986789715",
  areaServed: { "@type": "City", name: "Huế" },
  address: { "@type": "PostalAddress", addressLocality: "Huế", addressCountry: "VN" },
  sameAs: ["https://www.facebook.com/huechothuexetulai"],
  url: siteUrl,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Thuê xe tự lái Huế | TRẠM NHÀ MINT",
    description: "Thuê xe VinFast, xe điện, xe 4 chỗ và 7 chỗ theo ngày tại Huế.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="font-body bg-mist text-slate-700">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        {children}
      </body>
    </html>
  );
}
