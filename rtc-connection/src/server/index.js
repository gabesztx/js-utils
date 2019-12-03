const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const appPath = '../../dist/rtc-connection/';
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, appPath, '/index.html'));
});
app.use(express.static(path.join(__dirname, appPath)));

server.listen(port, () => {
  console.log('Server is runing: ', port);
});

io.on('connection', (socket) => {
  console.log('connected!');
  // socket.emit('news', { hello: 'world' });
  // socket.on('my other event', () => {});
});
