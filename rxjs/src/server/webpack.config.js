const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const publicPath = '../../dist';

// module.exports = () => {
module.exports = {
    context: path.resolve(__dirname, '../app'),
    entry: {
        app: ['webpack-hot-middleware/client?reload=true', './index.js'],
    },
    output: {
        path: path.resolve(__dirname, publicPath),
        publicPath: '/',
        filename: '[name].js',
    },
    devtool: 'source-map',
    stats: {
        colors: true,
        assets: true,
        hash: false,
        timings: true,
        chunks: false,
        children: false,
        progress: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'RxJs',
            template: 'index.ejs'
        }),
        new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                open: true,
                proxy: 'http://localhost:5000',
                notify: false,
                ghostMode: {
                    scroll: true
                },
                ui: {
                    port: 3010
                }
            },
            {
                reload: false
            }
        )
    ]

};