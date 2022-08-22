/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img.pokemondb.net',
    ],
  },
  env: {
    PUBLIC_URL: "https://samuelnicholls.github.io/pokedex",
    assetPrefix: './'
  }
}

module.exports = nextConfig
