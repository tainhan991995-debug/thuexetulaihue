import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2_592_000,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.motor1.com" },
      { protocol: "https", hostname: "vinfasthochiminh.com" },
      { protocol: "https", hostname: "shop.vinfastauto.com" },
      { protocol: "https", hostname: "static0.carbuzzimages.com" },
      { protocol: "https", hostname: "www.carscoops.com" },
      { protocol: "https", hostname: "cmu-cdn.vinfastauto.us" },
      { protocol: "https", hostname: "imgcdn.tapchicongthuong.vn" },
      { protocol: "https", hostname: "cdn.gianhangvn.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
