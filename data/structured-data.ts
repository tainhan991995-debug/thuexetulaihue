export const siteUrl = "https://thuexetulaihue.vn";

const businessId = `${siteUrl}/#auto-rental`;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const logoId = `${siteUrl}/#logo`;
const primaryImageId = `${siteUrl}/#primaryimage`;

export type SchemaFaq = { question: string; answer: string };
export type BreadcrumbItem = { name: string; path?: string };

export const sitewideBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "TRẠM NHÀ MINT",
      alternateName: "Trạm Nhà Mint - Cho thuê xe tự lái Huế",
      url: siteUrl,
      logo: { "@id": logoId },
      image: { "@id": primaryImageId },
      description: "Dịch vụ thuê xe tự lái tại Huế với xe VinFast, xe điện, xe 4 chỗ và 7 chỗ theo ngày.",
      sameAs: ["https://www.facebook.com/huechothuexetulai", "https://zalo.me/0986789715"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+84986789715",
        contactType: "customer service",
        availableLanguage: ["vi"],
        url: "https://zalo.me/0986789715",
      },
    },
    {
      "@type": ["AutoRental", "LocalBusiness"],
      "@id": businessId,
      name: "TRẠM NHÀ MINT - Thuê xe tự lái Huế",
      image: { "@id": primaryImageId },
      logo: { "@id": logoId },
      url: siteUrl,
      telephone: "+84986789715",
      priceRange: "550.000đ–1.800.000đ/ngày",
      description: "Thuê xe tự lái theo ngày tại Huế với xe điện VinFast và xe xăng; liên hệ để xác nhận lịch xe và phương án giao nhận.",
      address: { "@type": "PostalAddress", addressLocality: "Huế", addressCountry: "VN" },
      areaServed: { "@type": "City", name: "Huế" },
      hasMap: "https://www.google.com/maps/search/?api=1&query=Tr%E1%BA%A1m%20Nh%C3%A0%20Mint%20-%20Cho%20thu%C3%AA%20xe%20%C3%B4%20t%C3%B4%20t%E1%BB%B1%20l%C3%A1i%2C%20Hu%E1%BA%BF",
      parentOrganization: { "@id": organizationId },
      sameAs: ["https://www.facebook.com/huechothuexetulai", "https://zalo.me/0986789715"],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "TRẠM NHÀ MINT - Thuê xe tự lái Huế",
      alternateName: "TRẠM NHÀ MINT",
      inLanguage: "vi-VN",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "ImageObject",
      "@id": logoId,
      url: `${siteUrl}/images/logo.png`,
      contentUrl: `${siteUrl}/images/logo.png`,
      caption: "Logo TRẠM NHÀ MINT",
    },
    {
      "@type": "ImageObject",
      "@id": primaryImageId,
      url: `${siteUrl}/og.png`,
      contentUrl: `${siteUrl}/og.png`,
      width: 1200,
      height: 630,
      caption: "TRẠM NHÀ MINT - Thuê xe tự lái Huế",
    },
  ],
};

export function createBreadcrumbSchema(items: BreadcrumbItem[], path: string) {
  const url = `${siteUrl}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: `${siteUrl}${item.path}` } : {}),
    })),
  };
}

export function createFaqPageSchema(faqs: SchemaFaq[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}${path}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function createWebPageSchema({ name, description, path, image = "/og.png" }: { name: string; description: string; path: string; image?: string }) {
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "vi-VN",
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    primaryImageOfPage: { "@type": "ImageObject", url: imageUrl, contentUrl: imageUrl },
    breadcrumb: { "@id": `${url}#breadcrumb` },
  };
}

export function createArticleSchema({ headline, description, path, image, imageAlt, datePublished }: { headline: string; description: string; path: string; image: string; imageAlt: string; datePublished: string }) {
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    image: { "@type": "ImageObject", url: imageUrl, contentUrl: imageUrl, caption: imageAlt },
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    datePublished,
    dateModified: datePublished,
    inLanguage: "vi-VN",
  };
}
