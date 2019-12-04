import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import { Socket } from './socket';

const app = express();
const root = '../../dist/rtc-connection/';
const port = process.env.PORT || 5000;
const server = http.createServer(app);
const socket =  new Socket();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, root, '/index.html')));
app.use(express.static(path.join(__dirname, root)));


server.listen(port, () => {});


// /* Socket server */
// const io = require('socket.io')(server);
// io.on('connection', (socket) => {
//   console.log('connection');
//   // console.log(socket);
// });


/*
import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import {} from './socket/';

export class App {
  private app: express.Application;
  private root = path.join(path.resolve(__dirname, '../../dist/rtc-connection/'));
  public server: http.Server;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.routes();
  }

  private routes() {
    this.app.get('/', (req, res) => res.sendFile(path.join(__dirname, this.root, '/index.html')));
    this.app.use(express.static(path.join(__dirname, this.root)));
  }

  public listen(port: number) {
    this.server.listen(port, () => console.log(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`));
    this.server.on('error', error => console.log('Error server: ', error));
  }
}
*/
