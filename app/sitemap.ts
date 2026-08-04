import type { MetadataRoute } from "next";
import { blogPosts } from "../data/blog-posts";
import { seoPages } from "../data/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://thuexetulaihue.vn";
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...seoPages.map(({ slug }) => ({ url: `${siteUrl}/${slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...blogPosts.map(({ slug }) => ({ url: `${siteUrl}/blog/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
