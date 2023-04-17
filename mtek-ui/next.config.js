/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/upload/**",
      },
      {
        protocol: "https",
        hostname: "xn--j1ads8b.xn--p1ai",
        port: "",
        pathname: "/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
