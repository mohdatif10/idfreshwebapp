import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // Default bottom-left position collides with our fixed mobile tab bar.
    position: "top-right",
  },
};

export default nextConfig;
