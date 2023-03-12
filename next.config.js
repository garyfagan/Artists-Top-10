/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_AUTH_ENDPOINT: process.env.SPOTIFY_AUTH_ENDPOINT,
    SPOTIFY_RESPONSE_TYPE: process.env.SPOTIFY_RESPONSE_TYPE,
    SPOTIFY_REDIRECT_URI: process.env.SPOTIFY_REDIRECT_URI,
  },
}

module.exports = nextConfig
