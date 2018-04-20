import {root} from '../helper'
import webpack from 'webpack';

// const autoprefixer = require('autoprefixer');

// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
// const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

// const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    /**
     * Entry files
     */
    entry: {
        'polyfills': './src/polyfills.ts'
    },

    /**
     * Resolve file type
     */
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },



    optimization: {
        /**
         * Split files, vendor, common, runtime files
         */
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // chunks: 'initial',
                    chunks: 'initial',
                    name: 'vendor',
                    test: /node_modules/,
                    enforce: true
                },
            }
        },
        // runtimeChunk: true
    },

    module: {
        /**
         * Rules config
         * */
        rules: [
            {
                test: /.js$/,
                // exclude: /node_modules/,
                parser: {
                    system: true
                }
            },

            /**
             * JS/ES6
             * */
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader'},
                ]

            },
            /**
             * File loader / Html
             **/
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
    },

    /**
     * Plugins config
     * */
    plugins: [
        new webpack.ContextReplacementPlugin(
            new RegExp(/angular(\\|\/)core(\\|\/)(@angular|esm5)/), root('src')
        ),

    ]
};
