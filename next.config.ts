import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/reborn",
  images: { unoptimized: true },
  output: "export",  // <=== enables static exports
};

export default nextConfig;
