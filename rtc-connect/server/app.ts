import * as express from 'express';
import * as https from 'https';
import * as path from 'path';
import * as config from './config';
import * as WebSocket from 'ws';
// import { SocketService } from './socket.service';

const app = express();
const server = https.createServer(config.httpsOption, app);
// const socket = new SocketService();
const wss = new WebSocket.Server({server});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, config.rootPath, '/index.html')));
app.use(express.static(path.join(__dirname, config.rootPath)));
// socket.listen(server);

wss.on('connection', (ws: WebSocket) => {
  console.log('connection');
  // connection is up, let's add a simple simple event
  ws.on('message', (message: string) => {
    // log the received message and send it back to the client
    // console.log('received: %s', message);
    // ws.send(`Hello, you sent -> ${message}`);
  });
  // send immediatly a feedback to the incoming connection
  // ws.send('Hi there, I am a WebSocket server');
});

server.listen(config.serverPort, () => {
});
