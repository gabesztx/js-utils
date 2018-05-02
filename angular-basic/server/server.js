import express from 'express';
import http from 'http';
import {root} from '../helper'
const app = express();
const port = process.env.PORT || 8080;
const server = http.createServer(app);

const runProduction = () => {
  console.log('run server');
  app.use(express.static(root('dist')));
  server.listen(port);
};

module.exports = {
    runProd: runProduction,
};
