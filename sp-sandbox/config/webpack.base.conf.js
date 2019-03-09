const StyleLintPlugin = require('stylelint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

process.noDeprecation = true;

module.exports = {
  module  : {
    rules : [
      {
        test    : /\.html$/,
        loader  : 'html-loader',
        options : { minimize : true }
      },
      {
        test    : /\.js?$/,
        exclude : [/node_modules/],
        loader  : 'babel-loader',
        options: {
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
        },
      },
      {
        test    : /\.(woff(2)?|eot|ttf|otf|png|jpe?g|gif|svg)$/,
        loader  : 'url-loader',
        options : {
          limit : 10000
        }
      }]
  },
  plugins : [
    // new StyleLintPlugin(),
    /*new BrowserSyncPlugin(
      // BrowserSync options
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/',
        notify: false

      },
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    )*/
  ]
};
