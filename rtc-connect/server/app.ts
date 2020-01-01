import * as express from 'express';
import * as https from 'https';
import * as path from 'path';
import * as config from './config';
// import { SocketWsService } from './socket-ws.service';
// import { SocketService } from './socket.service';

const app = express();
const server = https.createServer(config.httpsOption, app);
// const socket = new SocketWsService();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, config.rootPath, '/index.html')));
app.use(express.static(path.join(__dirname, config.rootPath)));
server.listen(config.serverPort, () => {
});
// socket.listen(server);


