/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.GH_PAGES ? '/karlohs.dev_new/' : '',
  basePath: process.env.GH_PAGES ? '/karlohs.dev_new' : '',
  // keep trailingSlash to help Github Pages serve index.html files
  trailingSlash: true,
 
}

export default nextConfig