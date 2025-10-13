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

  // Static export -> writes HTML to `out/` during `next build`
  output: 'export',

  // Helpful on GitHub Pages (directory-style URLs)
  trailingSlash: true,

  // Needed if you use <Image> in export mode
  images: { unoptimized: true },
};

module.exports = nextConfig;
