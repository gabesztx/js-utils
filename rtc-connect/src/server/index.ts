// import * as fs from 'fs';
import * as express from 'express';
import * as http from 'http';
import * as path from 'path';

const app = express();
const server = http.createServer(app);

const appPath = '../../dist/rtc-connection/';
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, appPath, '/index.html'));
});
app.use(express.static(path.join(__dirname, appPath)));

server.listen(port, () => {
});

/* Socket server */
const io = require('socket.io')(server);
io.on('connection', (socket) => {
  console.log('----- connection ------');
  // console.log(socket);
});
