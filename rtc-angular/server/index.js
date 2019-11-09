const express = require('express');
const path = require('path');
const app = express();
const index = require('http').createServer(app);
const ExpressPeerServer = require('./src').ExpressPeerServer;
const appPath = '../dist/rtc-angular/';
const port = 9000;
const options = {
  path: '/peerjs',
};

const peerserver = ExpressPeerServer(index, options);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, appPath, '/index.html'));
});
app.use(express.static(path.join(__dirname, appPath)));
app.use(options.path, peerserver);

peerserver.on('connection', (client) => {
  // console.log('connect');
});

peerserver.on('disconnect', (client) => {
  // console.log('disconnect');
});

index.listen(port, () => {
  console.log('Server is runing!');
  // console.log('Port: ', port)
});
