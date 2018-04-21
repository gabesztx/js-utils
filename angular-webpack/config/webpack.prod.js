import {root} from '../helper'
import webpack from 'webpack';

const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
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
             * Style
             * */
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: {
                                browsers: ['last 2 versions']
                            },
                            plugins: () => [
                                autoprefixer
                            ]
                        },
                    },
                    {loader: 'sass-loader'}
                ]
            },
        ]
    },
    /**
     * Plugins config
     * */
    //TODO: ugly
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: root(),
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "'production'"
        }),
        // new OptimizeCSSAssetsPlugin({}),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',// cache: filename: "[contenthash].css"
            chunkFilename: '[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: root('src', 'public/index.html')
        }),
    ]
});
