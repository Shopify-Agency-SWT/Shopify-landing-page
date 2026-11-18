import type { NextConfig } from "next";
import path from "path";

// NEXT_PUBLIC_BASE_PATH is set by the GitHub Pages workflow to "/Shopify-landing-page".
// Locally it is empty, so the site runs at http://localhost:3100/ as before.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  output: "export", // build plain static files (the `out` folder) for GitHub Pages
  basePath,
  trailingSlash: true, // /about -> /about/index.html, which GitHub Pages serves directly
  images: { loader: "custom", loaderFile: "./src/image-loader.ts" },
};

export default nextConfig;
