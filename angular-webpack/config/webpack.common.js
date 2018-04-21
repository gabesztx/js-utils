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
                vendor: {
                    // chunks: 'initial',
                    chunks: 'all',
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -20,
                    enforce: true
                },
                /* js: {
                     test: /\.js$/,
                     name: 'commons',
                     chunks: 'all',
                 },*/
                /* styles: {
                     name: 'styles',
                     test: /\.css$/,
                     chunks: 'all',
                     enforce: true
                 }*/
            }
        },
        // runtimeChunk: true
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
                use: ['to-string-loader', 'raw-loader']

            }
        ]
    },

    /**
     * Plugins config
     * */
    plugins: []
};
