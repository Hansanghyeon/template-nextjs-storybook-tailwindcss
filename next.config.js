/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.imweb.me'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
