/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/Top',
      },
    ]
  },
}

module.exports = nextConfig
