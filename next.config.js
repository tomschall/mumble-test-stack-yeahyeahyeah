// next.config.js
const withTwin = require('./withTwin.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cas-fee-advanced-ocvdad.zitadel.cloud' },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/qwacker-api-prod-data/**',
      },
    ],
  },
};

module.exports = nextConfig;

// Twin config: must included AFTER nextConfig
module.exports = withTwin({
  reactStrictMode: true, // < Recommended by Next
});
