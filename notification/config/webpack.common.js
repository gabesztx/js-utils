const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/start.js'
    },

    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
       /* new HtmlWebpackPlugin({
            title: 'Production'
        })*/
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {}

};