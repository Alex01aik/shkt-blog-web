/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    async rewrites() {
    return [
      {
        source: '/',
        destination: '/pages/home',
      },
      {
        source: '/:path*',
        destination: '/pages/:path*',
      },
    ];
  },
}

module.exports = nextConfig
