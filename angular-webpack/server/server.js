import express from 'express';
import http from 'http';
import webpack from 'webpack';
import {root} from '../helper'

import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from '../config/webpack.common';

const app = express();
const historyApiFallback = require('connect-history-api-fallback');
const port = process.env.PORT || 8080;
const server = http.createServer(app);
// const webpackDCommonConfig = require('../config/webpack.common.js');
const webpackDevConfig = require('../config/webpack.dev.js');
const webpackProdConfig = require('../config/webpack.prod.js');

// return;
const runDevelop = () => {
    // console.log(webpackDevConfig);
    const config = webpackDevConfig;
    const compiler = webpack(config);

    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            hash: false,
            colors: true,
            entrypoints: true,
            modules: false,
            children: false,
            chunks: false,
        },
    });
    app
        .use(express.static(root('src')))
        .use(historyApiFallback())
        .use(middleware)
        .use(webpackHotMiddleware(compiler));
    server.listen(port);
};

const runProduction = () => {
    console.log('-------- Production development mode --------');
    const compiler = webpack(webpackProdConfig);
    const watching = compiler.watch({

        // aggregateTimeout: 300,
        poll: undefined
    }, (err, stats) => {
        // Print watch/build result here...
        console.log(stats.toString({
            hash: true,
            colors: true,
            entrypoints: false,
            modules: false,
            children: false,
            chunks: false,
            warnings: false,
        }));
    });
    /*compiler.run((err, stats) => {
        if (err) {
            console.error(err);
            return;
        }
        // console.log('-------- Production development finished! --------');
        console.log(stats.toString({
            hash: false,
            colors: true,
            entrypoints: false,
            modules: false,
            children: false,
            chunks: false,
        }));
    })*/
};

module.exports = {
    runDev: runDevelop,
    runProd: runProduction,
};
