import * as SocketIo from 'socket.io';
import { ClientService } from './client.service';

export class SocketService {
  io: SocketIo.Server;
  clientService: ClientService;

  constructor() {
    this.clientService = new ClientService();
  }

  listen(server) {
    this.io = SocketIo(server);
    this.io.on('connection', (socket: SocketIo.Socket) => {
      this.clientService.addClient(socket);
      socket.on('disconnecting', () => {
        this.clientService.removeClient(socket);
      });
      socket.on('message', (message) => {
        // this.handleMessage(socket, message);
        socket.broadcast.emit('message', message);
      });

      socket.on('sandbox', (message) => {
        socket.broadcast.emit('sandbox', message);
      });
    });
  }
}

/*socket.on('message', (msg) => {
   socket.broadcast.emit('message', msg);
 });*/
