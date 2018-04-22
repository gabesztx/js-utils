import {root} from '../helper'

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
module.exports = {
    entry: {
        // app: ['webpack-hot-middleware/client?reload=true', root('src', 'index.js')]
        main: ['webpack-hot-middleware/client?reload=true', root('src', 'index.js')]
        // main: [root('src', 'index.js')]
    },
    output: {
        path: root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        // filename: 'main.js',
        // chunkFilename: '[id].chunk.js'
    },
    mode: 'none',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [

            {
                test: /\.html$/,
                exclude: root('src', 'public'),
                use: ['raw-loader']
            }
        ]
    },

    /**
     * Plugins config
     * */
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: root('src', 'public/main.html'),
        }),
        new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                open: true,
                proxy: 'http://localhost:8080',
                notify: false,
                files: [root('src', 'public/**/*.*')],
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
