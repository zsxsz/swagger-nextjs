/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  distDir: 'out'
}

export default nextConfig