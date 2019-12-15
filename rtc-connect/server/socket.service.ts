import * as socketIo from 'socket.io';

export class SocketService {
  io: socketIo.Server;
  constructor(server) {
    this.io = socketIo(server);
    this.io.on('connection', (socket: socketIo.Socket) => {
      // console.log('socket id', socket.id);
      // console.log('rooms', socket.rooms);
      // console.log('client', socket.client);
      socket.on('disconnecting', (data) => {
        console.log('disconnecting');
      });
    });
  }
}

/*export const init = () => {};
export const destroy = () => {};*/
