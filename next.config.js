const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const debug = process.env.NODE_ENV !== 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // Important: return the modified config
    return config;
  } /*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */,
};
