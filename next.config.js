const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native-web/dist/apis/StyleSheet/registry': path.resolve(
        __dirname,
        'src/shims/react-native-web/dist/apis/StyleSheet/registry.js'
      ),
    };
    return config;
  },

  // Export a static site to `out/` during `next build`
  output: 'export',

  // Nice with GitHub Pages for folder-style URLs
  trailingSlash: true,

  // Required for <Image> with static export
  images: { unoptimized: true },
};

module.exports = nextConfig;
