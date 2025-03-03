/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.com', 'files.enderman.ch', 'cdn.discordapp.com', 'github-readme-stats-eight-theta.vercel.app'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;