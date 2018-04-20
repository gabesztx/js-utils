import {root} from '../helper'
import webpack from 'webpack';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[id].[hash].chunk.js'
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
            },
            /**
             * Sass-loader include
             * */
            {
                test: /\.(scss|sass)$/,
                // include: root('src', 'style'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',

                ]

           /*     loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'postcss-loader'},
                        {loader: 'sass-loader'},

                    ]
                })*/
            },
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
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),

        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),

/*
        new ExtractTextPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
*/

/*        new UglifyJsPlugin({
            // sourceMap: true

            uglifyOptions: {
                // mangle: {keep_fnames: true},
               /!* compress: {
                    unused: false
                },*!/
                /!*
                warning: false,
                output: {
                    comments: false,
                    beautify: false
                }*!/
            },
        }),*/
        new HtmlWebpackPlugin({template: root('src', 'public/index.html')}),
    ]
});
