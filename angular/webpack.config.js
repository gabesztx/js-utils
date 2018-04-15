// Helper: root() is defined at the bottom

const path = require('path');

const webpack = require('webpack');

// Webpack Plugins
// const ContextReplacementPlugin = webpack
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('style/[name].css');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
const ENV = process.env.npm_lifecycle_event;
const isTestWatch = ENV === 'test-watch';
const isTest = ENV === 'test' || isTestWatch;
const isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {
    /**
     * Config
     * Reference: http://webpack.github.io/docs/configuration.html
     * This is the object where all configuration gets set
     */
    const config = {};

    /* mode value */
    config.mode = 'development';
    // config.mode = 'production';


    /**
     * Devtool
     * Reference: http://webpack.github.io/docs/configuration.html#devtool
     * Type of sourcemap to use per build type
     */
    config.devtool = 'source-map';

    /**
     * Entry
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     */
    config.entry = {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': ['webpack-hot-middleware/client?reload=true', './src/main.ts']
    };

    config.output = {
        path: root('dist'),
        // path: '/',
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    };

    config.optimization = {
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
    };

    config.resolve = {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    };


    config.module = {
        rules: [
            {
                test: /.js$/,
                parser: {
                    system: true
                }
            },
            {
                test: /\.(scss|sass)$/,
                exclude: root('src', 'app'),
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }, /*{
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => {
                            return [
                                require('autoprefixer')()
                            ];
                        }
                    }

                }*/]
            },

            {
                test: /\.(scss|sass)$/,
                exclude: root('src', 'style'),
                use: [{
                    loader: 'raw-loader'
                },
                    /* {
                         loader: 'postcss-loader',
                         options: {
                             plugins: () => {
                                 return [
                                     require('autoprefixer')()
                                 ];
                             },
                             sourceMap: true
                         }

                     },*/
                ]
            },

            /* {
                 test: /\.scss$/,
                 exclude: root('src', 'style'),
                 loader: 'raw-loader!sass-loader'
             },*/
            /*  {
                  test: /\.css$/,
                  use: [
                      {loader: 'style-loader'},
                      {loader: 'css-loader'},
                  ],
              },*/
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: [
                    '@angularclass/hmr-loader',
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                ],
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: root('src', 'public')
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    };

    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    config.plugins = [

        new webpack.ContextReplacementPlugin(
            new RegExp(/angular(\\|\/)core(\\|\/)(@angular|esm5)/),
            root('src')
        ),

        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            chunksSortMode: 'dependency'
            // chunksSortMode: 'none'
        }),

        new NamedModulesPlugin(),
        new LoaderOptionsPlugin({
            debug: true,
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['last 2 version']
                    })
                ]
            }
        }),

        new webpack.HotModuleReplacementPlugin(),

        new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                open: true,
                proxy: 'http://localhost:8080',
                notify: false,
                files: ['src/public/**/*.*'],
                ghostMode: {
                    scroll: true
                },
                ui: {
                    port: 3010
                }
            },
            {
                reload: false
            }
        ),


        /*new webpack.LoaderOptionsPlugin({
            options: {
                /!**
                 * Apply the tslint loader as pre/postLoader
                 * Reference: https://github.com/wbuchwalter/tslint-loader
                 *!/
            /!*    tslint: {
                    emitErrors: false,
                    failOnHint: false
                },
*!/
                /!**
                 * PostCSS
                 * Reference: https://github.com/postcss/autoprefixer-core
                 * Add vendor prefixes to your css
                 *!/
                 postcss: [
                     autoprefixer({
                         browsers: ['last 2 version']
                     })
                 ]
            }
        })*/

        // new CheckerPlugin(),
    ];

    return config;
}();

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
