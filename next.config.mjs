/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  distDir: 'out',
};

// 检查 geist 是否可用，如果不可用则跳过
let config = nextConfig;
try {
  const { withGeist } = await import('geist');
  config = withGeist(nextConfig);
} catch (error) {
  console.warn('Geist 字体库未正确安装，跳过字体优化配置');
}

export default config;
