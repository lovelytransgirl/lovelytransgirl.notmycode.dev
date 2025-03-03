/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.com', 'files.enderman.ch', 'cdn.discordapp.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;