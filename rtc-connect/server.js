// import * as express from 'express';
// import * as http from 'http';
// import * as path from 'path';
// import * as io from 'socket.io';
// import * as config from './config';
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const root = path.join(__dirname, 'rtc-connection');
console.log('root-----: ', __dirname);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname));
server.listen(3000, () => {
  console.log('server running!');
});

/* Socket server */
// let userNumber = 0;
/*
io(server).on('connection', (socket: io.Socket) => {
  console.log('connection');
  socket.on('disconnecting', (data) => {
    console.log('disconnecting');
  });
});
*/

