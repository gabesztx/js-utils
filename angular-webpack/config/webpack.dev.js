import {root} from '../helper'

const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
// const EvalSourceMapDevToolPlugin = require('webpack/lib/EvalSourceMapDevToolPlugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    /**
     * Entry files
     */
    entry: {
        'app': ['webpack-hot-middleware/client?reload=true', './src/main.ts']
    },

    /**
     * Output files
     */
    output: {
        path: root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        // sourceMapFilename: '[file].map'
    },
    /**
     * Mode (development or production)
     */
    mode: 'development',

    /**
     * Devtool
     */
    devtool: 'inline-source-map',

    /**
     * Modules config
     * */
    module: {

        rules: [
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
                test: /\.(scss|sass)$/,
                include: root('src', 'style'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
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
        ]
    },
    /**
     * Plugins config
     * */
    plugins: [
        /*new EvalSourceMapDevToolPlugin({
            sourceURLTemplate: '[all-loaders][resource]'
            // exclude: ['vendor.js']
        }),*/
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
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
