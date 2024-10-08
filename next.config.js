const path = require('path');

module.exports = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@lib': path.join(__dirname, 'lib'),
    };
    return config;
  },
};
