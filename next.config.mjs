/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: [
      'img.pokemondb.net',
    ],
  },
  assetPrefix: './',
}

module.exports = nextConfig
