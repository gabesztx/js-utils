import {root} from '../helper'

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    /**
     * Entry files
     */
    entry: {
        // 'app': './src/main.ts',
        // 'print': './src/print.js'
        'app': ['webpack-hot-middleware/client?reload=true', './src/main.ts']
    },

    /**
     * Output files
     */
    output: {
        path: root('dist'),
        // publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        // chunkFilename: '[id].chunk.js'
    },
    /**
     * Mode (development or production)
     */
    mode: 'development',

    /**
     * Devtool
     */
    devtool: 'inline-source-map',

    stats: 'normal',

    /**
     * Modules config
     * */
    module: {

        rules: [
            /**
             * js System import
             * */
            {
                test: /.js$/,
                parser: {
                    system: true
                }
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
             * Sass-loader include
             * */
            {
                test: /\.(scss|css)$/,
                include: root('src', 'style'),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    /**
     * Plugins config
     * */
    plugins: [
        new ContextReplacementPlugin(
            new RegExp(/angular(\\|\/)core(\\|\/)(@angular|esm5)/), root('src')
        ),

        //TODO:
        /*
        *
        * NoEmitOnErrorsPlugin -> optimization.noEmitOnErrors (on by default in production mode) ModuleConcatenationPlugin -> optimization.concatenateModules (on by default in prod mode) NamedModulesPlugin -> optimization.namedModules (on by default in dev mode)
        *
        * */
        new NamedModulesPlugin(),

        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: root('src', 'public/index.html'),
            // chunksSortMode: 'dependency'
        }),
        new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                open: true,
                proxy: 'http://localhost:8080',
                notify: false,
                files: [root('src', 'public/**/*.*')],
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
    ]
});
