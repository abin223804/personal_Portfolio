import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  outputFileTracingRoot: path.join(__dirname, "./"),
  allowedDevOrigins: ["localhost:3000", "10.164.212.215:3000", "10.164.212.215"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    viewTransition: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
