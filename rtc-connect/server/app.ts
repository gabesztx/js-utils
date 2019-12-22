import * as express from 'express';
import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';
import { SocketService } from './socket.service';

const app = express();

// const options = {
//   key: fs.readFileSync('/etc/letsencrypt/live/gabesztx.duckdns.org/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/gabesztx.duckdns.org/cert.pem'),
//   ca: fs.readFileSync('/etc/letsencrypt/live/gabesztx.duckdns.org/chain.pem'),
// };
// console.log(options);
// const server = https.createServer(options, app);
const server = http.createServer(app);
const socket = new SocketService();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, config.root, '/index.html')));
app.use(express.static(path.join(__dirname, config.root)));
server.listen(config.serverPort, () => {});
socket.listen(server);
