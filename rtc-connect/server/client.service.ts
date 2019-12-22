import { IClient } from './client.model';

export class ClientService {
  clients: IClient[];
  constructor() {
    this.clients = [];
  }
  addClient(socket) {
    this.clients.push({id: socket.id});
    // console.log('ADD', this.clients);
  }
  removeClient(socket) {
    this.clients = this.clients.filter(client => client.id !== socket.id);
    // console.log('REMOVE', this.clients);
  }

}
