/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Portfolio-main',
  images: { unoptimized: true },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
