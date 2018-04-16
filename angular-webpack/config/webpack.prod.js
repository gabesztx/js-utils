import {root} from '../helper'
import webpack from 'webpack';
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common, {
    /**
     * Entry files
     */
    entry: {
        'app': ['./src/main.ts']
    },

    /**
     * Output files
     */
    output: {
        path: root('dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
        // filename: '[name].[chunkhash].bundle.js',
        // chunkFilename: '[name].[chunkhash].chunk.js'
    },
    // target: 'node',
    /**
     * Mode
     */
    mode: 'production', // development or production

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
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                ],
            }
        ]
    },
    /**
     * Plugins config
     * */
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: root(),
            verbose: true,
            dry: false
            // exclude:  ['shared.js'],
        }),
        new UglifyJsPlugin({
            // sourceMap: true
            uglifyOptions: {
                // warning: false
            }
        }),
        new HtmlWebpackPlugin({template: root('src', 'public/index.html')}),
    ]
});
