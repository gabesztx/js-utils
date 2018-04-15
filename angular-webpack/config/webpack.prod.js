import {root} from '../helper'

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


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
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[name].[chunkhash].chunk.js'
    },
    /**
     * Mode (development or production)
     */
    mode: 'production',

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
            // exclude:  ['shared.js'],
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({template: root('src', 'public/index.html')}),
    ]
});
