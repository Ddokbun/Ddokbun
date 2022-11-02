/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
