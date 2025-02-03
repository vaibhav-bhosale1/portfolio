import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // If you're using Next.js 13+ with `app/` directory
  },
};

export default nextConfig;
