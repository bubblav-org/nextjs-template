import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — emitted to `out/` and served by Cloudflare Workers
  // Static Assets (see wrangler.jsonc). Unoptimized since the static worker
  // has no image optimization endpoint.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
