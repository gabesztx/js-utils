import {root} from '../helper'
import webpack from 'webpack';

const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        // filename: '[name].bundle.js',
        // chunkFilename: '[name].chunk.js'
    },
    // target: 'web',
    /**
     * Mode
     */
    mode: 'production', // development or production
    optimization: {
         // runtimeChunk: true,
       /* minimizer: [
            new UglifyJsPlugin({
                // cache: false,
                uglifyOptions: {
                    // compress: false,
                    output: {
                        // ecma: 8,
                        // comments: false,
                        beautify: false, // minim file
                    },
                    // compress: true,
                    // comments: false,
                    // mangle: false,
                    // toplevel: false,
                    // keep_classnames: true, // <-- doesn't exist, I guess. It's in harmony branch
                    // keep_fnames: true //
                }
            })
        ]*/
    },
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
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(['dist'], {
            root: root(),
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "'production'"
        }),
        // new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',// cache: filename: "[contenthash].css"
            // chunkFilename: '[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: root('src', 'public/index.html')
        }),
    ]
});
