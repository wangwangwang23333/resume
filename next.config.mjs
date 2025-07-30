import { withGeist } from "geist/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/resume' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/resume/' : '',
};

export default withGeist(nextConfig);
