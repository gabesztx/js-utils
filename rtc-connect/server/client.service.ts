import { IClient } from './client.model';

export class ClientService {
  clients: IClient[];
  constructor() {
    this.clients = [];
  }
  addClient(socket) {
    this.clients.push({id: socket.id});
  }
  removeClient(socket) {
    this.clients = this.clients.filter(client => client.id !== socket.id);
  }

}
