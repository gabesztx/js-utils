// Helper: root() is defined at the bottom

const path = require('path');

const webpack = require('webpack');

// Webpack Plugins
// const ContextReplacementPlugin = webpack
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
        // path: root('dist'),
        path: '/',
        publicPath: '/',
        filename: 'js/[name].js',
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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

            },
            // Support for .ts files.
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
            },
       /*     {
                test: /\.(scss|sass)$/,
                // exclude: /node_modules/,
                loader: ExtractTextPlugin_.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            }*/
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

        new webpack.LoaderOptionsPlugin({
            options: {
                /**
                 * Apply the tslint loader as pre/postLoader
                 * Reference: https://github.com/wbuchwalter/tslint-loader
                 */
                tslint: {
                    emitErrors: false,
                    failOnHint: false
                },

                /**
                 * PostCSS
                 * Reference: https://github.com/postcss/autoprefixer-core
                 * Add vendor prefixes to your css
                 */
                 postcss: [
                     autoprefixer({
                         browsers: ['last 2 version']
                     })
                 ]
            }
        })

        // new CheckerPlugin(),
    ];


    config.devServer = {
        contentBase: './src/public',
        historyApiFallback: true,
        // quiet: false,
        stats: {
            warnings: false,
        },


    };

    return config;
}();

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
