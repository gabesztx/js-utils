const StyleLintPlugin = require('stylelint-webpack-plugin');

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
    new StyleLintPlugin()
  ]
};
