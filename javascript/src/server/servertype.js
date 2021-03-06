import express from 'express';
import http from 'http';
import webpack from 'webpack';
// import path from 'path';

import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../config/webpack.config.typescript';

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
// const env = process.env.NODE_ENV;

export const runDevelop = (env) => {
  console.log('-------- Run development mode --------');
  const config = webpackConfig(env);
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: config.stats
  });

  app
    .use(middleware)
    .use(webpackHotMiddleware(compiler));
  server.listen(port);
};

export const runProduction = (env) => {
  console.log('-------- Production development mode --------');
  const compiler = webpack(webpackConfig(env));
  compiler.apply(new webpack.ProgressPlugin());
  compiler.run(function (err, stats) {
    console.log('-------- Production build finished --------');
  });
};

/*
 const express = require('express');
 const http = require('http');
 const app = express();
 const path = require('path');
 const port = process.env.PORT || 5000;
 const server = http.createServer(app);

 app
 .use('/', express.static(path.join(__dirname, '../public/dist')))
 .get('/', (req, res) => {
 res.sendFile('/index.html');
 });

 server.listen(port);
 */
