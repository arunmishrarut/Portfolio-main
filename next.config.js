/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Portfolio-main', 
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
