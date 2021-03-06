'use strict'
// Template version: 1.2.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',

    // Proxy
    proxyTable: {
      '/cyqq': {
        target: 'https://c.y.qq.com',
        changeOrigin: true,
        pathRewrite: {
          '^/cyqq': '', // http://localhost:9876/cyqq/xxx -> https://c.y.qq.com/xxx
        },
      },
      '/forward': {
        target: 'http://47.105.150.105',
        changeOrigin: true,
        pathRewrite: {
          '^/forward': '', // http://localhost:9876/cyqq/xxx -> https://c.y.qq.com/xxx
        },
      },
      '/bzqll': {
        target: 'https://api.bzqll.com',
        changeOrigin: true,
        pathRewrite: {
          '^/bzqll': '', // http://localhost:9876/bzqll/xxx -> https://api.bzqll.com/xxx
        },
      },

      '/mipush': {
        target: 'http://10.38.163.29:9085',
        changeOrigin: true,
        pathRewrite: {
          '^/mipush': '',
        },
      },
    },

    // Various Dev Server settings
    https: false, // by default dev-server will be served over HTTP. It can optionally be served over HTTP/2 with HTTPS
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 9876, // can be overwritten by process.env.HOST, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/awesome/vue-demo/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,

    // The urlPattern of sw-precache-webpack-plugin
    urlPattern: /(\.(png|jpe?g|gif|svg)|\.js|\.json)/,
  }
}
