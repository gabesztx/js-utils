const webpack = require('webpack');
const path = require('path');
const ngcWebpack = require('ngc-webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const {CheckerPlugin} = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ENV = process.env.NODE_ENV;
console.log('ENV VARIBLE: ', root('./src/public'));

const isProduction = ENV === 'production';
module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {

        path: root('./src/public'),
        // publicPath: isProduction ? '/' : 'http://localhost:8080/',
        // publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    target: 'node',
    mode: 'development',
    devtool: 'inline-source-map',

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.ts', '.html']
    },
    module: {
        rules: [
            {
                test: /.js$/,
                parser: {
                    system: true
                }
            },
            // Typescript
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                // loader: 'awesome-typescript-loader',
                use: '@ngtools/webpack' // production
            },

            // Templates
            {
                test: /\.html$/,
                // exclude: root('./src/public'),
                use: [
                    {
                        loader: 'raw-loader'
                    }
                ]
            },

            // index file
            /*          {
                          test: /index.html$/i,
                          use: [
                              {
                                  loader: 'file-loader',
                                  options: {
                                      name: '[name].[ext]'
                                  }
                              }
                          ]
                      },*/

            // main application .less file
            /*   {
                   test: /app\.less$/i,
                   use: [
                       {
                           loader: 'file-loader',
                           options: {
                               name: 'assets/[name].css'
                           }

                       },
                       {
                           loader: 'less-loader',
                       }
                   ]
               }*/
        ]
    },
    plugins: [
        new ngcWebpack.NgcWebpackPlugin({
            tsConfigPath: './tsconfig.json',
            mainPath: './src/index.ts'
        }),
        new webpack.DefinePlugin({
            // PRODUCTION: JSON.stringify(ENV === 'production'),
            BUILDTIMESTAMP: JSON.stringify(Date.now()),
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'dependency'
        }),
        /* new webpack.optimize.UglifyJsPlugin({
             sourceMap: true,
             mangle: {keep_fnames: true}
         }),*/
        // new CheckerPlugin()
        /* new CopyWebpackPlugin([
             {
                 from: './src/assets/images',
                 to: './assets/images',
                 toType: 'dir'
             },
             {
                 from: './src/assets/shim',
                 to: './assets',
                 toType: 'dir'
             }
         ]),*/
    ],
    devServer: {
        contentBase: './src/public',
        // port: 9000
        // historyApiFallback: true,
        // quiet: true,
        // stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
    }
};

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

// console.log('rooot', root('src/public'));