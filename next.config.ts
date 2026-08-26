import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the dev-mode "N" route indicator badge. Next still surfaces
  // compile/runtime errors even with this off.
  devIndicators: false,
};

export default nextConfig;
