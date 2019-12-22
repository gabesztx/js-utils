import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as config from './config';
// import { SocketService } from './socket.service';

const app = express();
const server = http.createServer(app);
// const socket = new SocketService();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, config.root, '/index.html')));
app.use(express.static(path.join(__dirname, config.root)));

server.listen(config.serverPort, () => {});
// socket.listen(server);
