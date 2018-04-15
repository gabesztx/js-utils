import {root} from '../helper'
import webpack from 'webpack';

const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
// const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function makeWebpackConfig() {

    const config = {};
    /**
     * Mode (development or production)
     */
    config.mode = 'development';

    /**
     * Devtool (development or production)
     */
    config.devtool = 'source-map';

    /**
     * Entry files
     */
    config.entry = {
        'polyfills': './src/polyfills.ts',
        'app': ['webpack-hot-middleware/client?reload=true', './src/main.ts']
        // 'app': ['./src/main.ts'],
        // 'vendor': './src/vendor.ts'
    };

    /**
     * Output files
     */
    config.output = {
        path: root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash].js',
    };

    /**
     * Resolve file type
     */
    config.resolve = {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    };

    /**
     * Split files, vendor, common, runtime files
     */
    config.optimization = {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: /node_modules/,
                    enforce: true
                },
            }
        },
        // runtimeChunk: true

    };


    config.module = {
        /**
         * Rules config
         * */
        rules: [
            {
                test: /.js$/,
                // exclude: root('src', 'server'),
                parser: {
                    system: true
                }
            },

            /**
             * Sass-loader include
             * */
            {
                test: /\.(scss|sass)$/,
                include: root('src', 'style'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },

            /**
             * JS/ES6
             * */
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

            },

            /**
             * TypeScript
             * */
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: [
                    '@angularclass/hmr-loader',
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                ],
            },


            /**
             * File loader / Sass
             * */
            {
                test: /\.(scss|sass)$/,
                exclude: root('src', 'style'),
                use: [
                    {loader: 'raw-loader'}
                ]

            },
            /**
             * File loader / Html
             * */
            {
                test: /\.html$/,
                exclude: root('src', 'public'),
                use: [
                    {loader: 'raw-loader'}
                ]
            },
            /*{
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }*/
        ]
    };

    /**
     * Plugins config
     * */
    config.plugins = [

        new webpack.ContextReplacementPlugin(
            new RegExp(/angular(\\|\/)core(\\|\/)(@angular|esm5)/),
            root('src')
        ),

        new HtmlWebpackPlugin({
            template: root('src', 'public/index.html'),
            chunksSortMode: 'dependency'
            // chunksSortMode: 'none'
        }),

        new NamedModulesPlugin(),

        new HotModuleReplacementPlugin(),

        new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                open: true,
                proxy: 'http://localhost:8080',
                notify: false,
                files: [root('src', 'public') + '/**/*.*'],
                // files: ['src/public/**/*.*'],
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
        )
    ];

    return config;
}();

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