const path = require('path');
const webpack = require('webpack');
const sourcePath = path.resolve(__dirname, '../src/app/typescript');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const {CheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader');

const getEntry = (env) => {
    const entry = {
        app: ['./index.ts']
    };

    if (env === 'dev') {
        Object.keys(entry).forEach((key) => {
            entry[key].unshift('webpack-hot-middleware/client?reload=true');
        });
    }

    return entry;
};

let getOutput = (env) => {
    return {
        path: path.resolve(__dirname, '../src/public/dist'),
        publicPath: '/',
        filename: env === 'prod' ? '[name]-[chunkhash].js' : '[name].js',
    }
};

let getDevTool = (isProd) => {
    return isProd ? false : 'source-map';
    // return 'source-map';
};


let getPlugin = (env) => {
    const plugin = [
        new webpack.DefinePlugin({
            __ENV__: `'${env}'`
        }),
        new HtmlWebpackPlugin({
            title: 'HtmlWebpackPlugin',
            template: 'index.html',
            inject: 'body',
            filename: 'index.html'
        }),
    ];

    /*  if (env === 'prod') {
     plugin.push(
     new webpack.optimize.UglifyJsPlugin({
     compress: {
     screw_ie8: true,
     warnings: false
     },
     comments: false
     })
     )
     }*/

    if (env === 'dev') {
        plugin.push(
            new BrowserSyncPlugin({
                    host: 'localhost',
                    port: 3000,
                    open: false,
                    proxy: 'http://localhost:5000',
                    notify: false,
                    files: ['src/public/**/*.*', '*.html'],
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
            ),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        )
    }
    return plugin;
};


module.exports = (environment) => {
    let env = environment === undefined ? 'prod' : environment;
    let isProd = env === 'prod';
    return {
        context: sourcePath,
        entry: getEntry(env),
        output: getOutput(env),
        devtool: getDevTool(isProd),
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
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                }
            ]
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        plugins: getPlugin(env),
    }
};

/*
externals: {
  jquery: 'jQuery',
  angular: 'angular',
}*/
