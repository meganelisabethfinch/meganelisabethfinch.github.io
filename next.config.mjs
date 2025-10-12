/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	webpack: (config) => {
		// Alias the legacy react-native-web registry path to our local shim
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			'react-native-web/dist/apis/StyleSheet/registry': path.resolve(__dirname, 'src/shims/react-native-web/dist/apis/StyleSheet/registry.js'),
		};
		return config;
	},
};

export default nextConfig;
