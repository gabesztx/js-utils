const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.scss',
    output: {
        filename: '[name].css',
        path: path.resolve(__dirname, 'dist/css')
    },
    plugins: [
        /**
         * Delete dist folder when start new build
         */
        new CleanWebpackPlugin(['dist']),
        /**
         * Style file create
         */
        new ExtractTextPlugin({
            filename: '[name].css',
        }),
        /**
         * Style minimalize
         */
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        /**
         * Style copy origin files to dist folder
         */
        new CopyWebpackPlugin([{
            from: 'src',
            to: '../scss',
            ignore: ['*.ejs']
        }])
    ],
    module: {
        rules: [
            /**
             * Use scss or css loader + use autoprefixer
             */
            {
                test: /\.(scss|css)$/,
                loader:
                ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'sass-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')(),
                                ]
                            }
                        }
                    ]
                })
            },

            /**
             * Use file loader what import current style files
             */
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]' // use origin file name
                            // name: '[hash].[ext]' // rename file name to generate hash number
                        }
                    }
                ]
            },
        ]
    }
};