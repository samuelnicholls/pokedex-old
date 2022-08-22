/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '/',
    domains: [
      'img.pokemondb.net',
    ],
  },
  assetPrefix: isProd ? '/pokedex/' : ''
}

module.exports = nextConfig
