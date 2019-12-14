import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as socketIo from 'socket.io';
import * as config from './config';


const app = express();
const server = http.createServer(app);
app.get('/', (req, res) => res.sendFile(path.join(__dirname, config.root, '/index.html')));
app.use(express.static(path.join(__dirname, config.root)));
server.listen(config.serverPort, () => {
});

/* Socket server */
// let userNumber = 0;
const io = socketIo(server);
io.on('connection', (socket: socketIo.Socket) => {
  // console.log('connection');
  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg);
  });

  socket.on('create or join', (room) => {
    // const clientsInRoom = io.sockets.adapter.rooms[room];
    // const numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;
    // if (!numClients) {
    //   socket.join(room);
    //   socket.emit('created', room, socket.id);
    // }
    // if (numClients === 1) {
    //   io.sockets.in(room).emit('join', room);
    //   socket.join(room);
    //   socket.emit('joined', room, socket.id);
    // }
  });

  socket.on('disconnecting', (data) => {
    // console.log('disconnecting');
  });
});

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
