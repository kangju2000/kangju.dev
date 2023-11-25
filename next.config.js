const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
})

module.exports = nextConfig
