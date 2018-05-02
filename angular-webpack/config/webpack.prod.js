import {root} from '../helper'
import webpack from 'webpack';

const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
        chunkFilename: '[name].[hash].chunk.js',
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
        minimizer: [
            new UglifyJsPlugin({
                // sourceMap: true,
                // extractComments: true,
                uglifyOptions: {
                    // ecma:5,
                    compress: {
                        // drop_console:true // delete console.log
                    },
                    output: {
                        // ecma: 5,
                        comments: false,
                        beautify: false, // minim file
                    },
                   /* mangle: {
                        keep_fnames: true
                    }*/
                }
                // cache: true,
                // parallel: true, // Use multi-process parallel running to improve the build speed
                // sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
            /*new UglifyJsPlugin({
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
            })*/
        ]
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
        /*     new webpack.optimize.AggressiveSplittingPlugin(
                 {
                     minSize: 30000, //Byte, split point. Default: 30720
                     maxSize: 50000, //Byte, maxsize of per file. Default: 51200
                     chunkOverhead: 0, //Default: 0
                     entryChunkMultiplicator: 1, //Default: 1
                 }
             ),*/
        new webpack.DefinePlugin({
            // 'process.env.NODE_ENV': "'production'"
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',// cache: filename: "[contenthash].css"
            // chunkFilename: '[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: root('src', 'public/index.html')
        }),
    ]
});
