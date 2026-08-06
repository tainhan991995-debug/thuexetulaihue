import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TRẠM NHÀ MINT - Thuê xe tự lái Huế",
    short_name: "TRẠM NHÀ MINT",
    description:
      "Thuê xe tự lái tại Huế với xe VinFast, xe điện và xe xăng theo ngày.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f5f7fb",
    theme_color: "#0D4C92",
    lang: "vi-VN",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
