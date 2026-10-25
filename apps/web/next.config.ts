import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import { config } from "dotenv";

// Load the root-level .env file from the monorepo root
config({ path: path.resolve(__dirname, "../../.env") });

const withNextIntl = createNextIntlPlugin(
  "./src/i18n/request.ts"
);

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/v1/:path*',
      },
    ];
  },
};

export default withNextIntl(nextConfig);