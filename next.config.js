/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/resume' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/resume/' : '',
}

module.exports = nextConfig
