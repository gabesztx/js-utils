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

/*const runProduction = (env) => {
    console.log('-------- Production development mode --------');
    const compiler = webpack(webpackConfig(env));
    compiler.apply(new webpack.ProgressPlugin());
    compiler.run(function (err, stats) {
        console.log('-------- Production build finished --------');
    });
};*/

module.exports = {
    runDev: runDevelop,
    // runProd: runProduction,
};
