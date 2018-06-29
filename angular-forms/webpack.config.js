const {exec} = require('child_process');
const process = exec('npm run prod');
console.log('--------------- BUILD ANGULAR CLI ------------------------');
process.on('close', (done) => {
  console.log('DONE', done);
  exec('npm start');
})

/*
const path = require('path');
// const merge = require('webpack-merge');
const webpack = require('webpack');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {AngularCompilerPlugin} = require('@ngtools/webpack');

/!*const {
  PATHS,
  PARAMS
} = require('./helpers.js');*!/

const devMode = process.env.NODE_ENV === 'development';
const rootPath = path.resolve();
const projectPath= path.resolve('src');
console.log('DEVMODE', devMode);
let entry = {
  'polyfills': path.join(projectPath, 'polyfills.ts'),
  'main': path.join(projectPath, 'main.ts'),
  //'style': path.join(projectPath, 'styles.scss')
};

module.exports = {
  context: rootPath,
  target: 'web',
  entry,
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [projectPath, path.resolve('node_modules')],
  },
  mode: process.env.NODE_ENV,
  // stats: 'errors-only',
  module: {
    rules: [{
      test: /\.ts$/,
      loader: '@ngtools/webpack',
      exclude: [/\.(spec|e2e)\.ts$/, /node_modules/],
    },
      {
        test: /\.ts$/,
        loader: 'null-loader',
        include: [/\.(spec|e2e)\.ts$/],
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
        }],
      },
     /!* {
        test: /\.(eot|woff|woff2|ttf|png|jpg|gif|svg|ico)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          context: PATHS.assets,
          name: '[path][name].[ext]'
        },
      },*!/
  /!*    {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
        exclude: [
          path.join(PATHS.projectPath),
          path.join(PATHS.src, 'common'),
        ],
      },
      {
        test: /\.css$/,
        include: [
          path.join(PATHS.projectPath),
          path.join(PATHS.src, 'common'),
          path.join(PATHS.src, 'common-bill')
        ],
        use: [{
          loader: "raw-loader" // creates style nodes from JS strings
        }],
      },*!/
      {
        test: /\.(scss|sass)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
        exclude: [
          path.join(projectPath),
          // path.join(PATHS.src, 'common'),
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: "raw-loader" // creates style nodes from JS strings
        },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              sourceMap: true
            }
          }
        ],
        include: [
          path.join(projectPath),
          // path.join(PATHS.src, 'common'),
          // path.join(PATHS.src, 'common-bill')
        ],
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new webpack.IgnorePlugin(/vertx/),
    new ProgressPlugin(),
    new AngularCompilerPlugin({
      platform: 0,
      entryModule: path.join(projectPath, 'app/app.module#AppModule'),
      sourceMap: true,
      tsConfigPath: path.join(rootPath, 'tsconfig.json'),
      skipCodeGeneration: true,
    })
  ]
};
*/
