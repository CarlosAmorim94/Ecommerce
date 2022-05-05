/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['fakestoreapi.com'],
  },
  experimental: { 
    images: { 
      layoutRaw: true 
    } 
  }
}


