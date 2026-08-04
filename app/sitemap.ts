import type { MetadataRoute } from "next";
import { seoPages } from "../data/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://thuexetulaihue.vn";
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...seoPages.map(({ slug }) => ({ url: `${siteUrl}/${slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
