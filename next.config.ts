import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use "src/styles/abstracts/_variables.scss" as *;
                  @use "src/styles/abstracts/_mixin.scss" as *;
                  `,
  },
  output: 'standalone',
};

export default nextConfig;
