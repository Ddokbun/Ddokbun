/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  customWorkerDir: "serviceworker",
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddokbun.com",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/welcome",
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
