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
server.listen(config.serverPort, () => {
});
// socket.listen(server);

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      if (ws !== client && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
  // ws.on('close', () => {});
});


