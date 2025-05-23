// next.config.js

// Use require for CommonJS compatibility in .js config files
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin(
  // Provide the path to your i18n configuration file
  './i18n.ts' // Make sure this file exists in the root
);

/** @type {import('next').NextConfig} */ // JSDoc type hint is okay
const nextConfig = {
  // Your other Next.js config options go here
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.met.no',
        port: '',
        pathname: '/images/weathericons/**', // Allow images specifically from this path
      },
    ],
  },
};

// Use module.exports for CommonJS
module.exports = withNextIntl(nextConfig);

