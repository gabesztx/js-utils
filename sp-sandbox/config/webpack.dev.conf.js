const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.conf');

const TITLE = 'DEV - SB';

module.exports = merge(base, {
  mode    : 'development',
  // devtool : 'eval-source-map',
  devtool: 'inline-source-map',
  entry   : {
    app : path.join(__dirname, '../src/index.js')
  },
  output  : {
    filename   : 'app.js',
    publicPath : '/'
  },

  module  : {
    rules : [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
     /* {
        test : /\.(scss|css)$/,
        use  : [
          {
            loader : 'style-loader' // creates style nodes from JS strings
          },
          {
            loader  : 'css-loader', // translates CSS into CommonJS
            options : {
              sourceMap     : true,
              importLoaders : 2
            }
          },
          {
            // resolves relative paths based on the original source file.
            loader : 'resolve-url-loader'
          }
        ]
      }*/
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : 'src/index.ejs',
      favicon  : 'favicon.ico', // or use favicons-webpack-plugin
      title    : TITLE
    }),
    new webpack.DefinePlugin({
      PRODUCTION : JSON.stringify(false)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
