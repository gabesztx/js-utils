import express from 'express';
import http from 'http';
import webpack from 'webpack';
import {root} from '../helper'

import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const historyApiFallback = require('connect-history-api-fallback');
const port = process.env.PORT || 8080;
const server = http.createServer(app);

const webpackDevConfig = require('../config/webpack.dev.js');
const webpackProdConfig = require('../config/webpack.prod.js');
const webpackConfigBasic = require('../config/webpack.config.js');

const runDevelop = () => {
    // const config = webpackConfigBasic;
    const config = webpackDevConfig;
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            hash: true,
            colors: true,
            entrypoints: true,
            modules: false,
            children: false,
            chunks: false,
            warnings: false,
        }
    });

    app
        .use(express.static(root('src')))
        .use(historyApiFallback())
        .use(middleware)
        .use(webpackHotMiddleware(compiler));
    server.listen(port);
};

const runProduction = () => {
    const compiler = webpack(webpackProdConfig);
    /*  const watching = compiler.watch({
              // aggregateTimeout: 300,
              poll: undefined
          },
          (err, stats) => {
              // Print watch/build result here...
              console.log(stats.toString({
                  hash: true,
                  colors: true,
                  entrypoints: true,
                  modules: false,
                  children: false,
                  chunks: false,
                  warnings: false,
              }));
              app.use(express.static(root('dist')));
              server.listen(port);
          });
          */

    compiler.run((err, stats) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('-------- Production development finished! --------');
        console.log(stats.toString({
            hash: false,
            colors: true,
            entrypoints: false,
            modules: false,
            children: false,
            chunks: false,
            warnings: false,
        }));

        app.use(express.static(root('dist')));
        server.listen(port);
    })
};

module.exports = {
    runDev: runDevelop,
    runProd: runProduction,
};