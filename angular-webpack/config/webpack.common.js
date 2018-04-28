import {root} from '../helper'


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
              /*  commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                },*/
                /*  commons: {
                     test: /[\\/]node_modules[\\/]/,
                     name: 'vendors',
                     chunks: 'all'
                 },*/
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'vendor',
                    priority: -20,
                    enforce: true
                },
            }
        }
    },
    module: {
        /**
         * Rules config
         * */
        rules: [
            /**
             * JS/ES6
             * */
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']

            },
            /**
             * File loader / Html
             **/
            {
                test: /\.html$/,
                exclude: root('src', 'public'),
                use: ['raw-loader']
            },
            {
                test: /\.(scss|css)$/,
                exclude: root('src', 'style'),
                use: ['raw-loader']

            }
        ]
    },

    /**
     * Plugins config
     * */
    plugins: []
};
