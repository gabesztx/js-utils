import express from 'express';
import http from 'http';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.config';

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);


export const startDevelep = () =>{
  console.log('-- Start Dev Server --');
  const config = webpackConfig;
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