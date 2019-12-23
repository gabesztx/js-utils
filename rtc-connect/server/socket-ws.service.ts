import * as WebSocket from 'ws';
import { ClientService } from './client.service';

export class SocketWsService {
  clientService: ClientService;
  constructor() {
    this.clientService = new ClientService();
  }

  listen(server) {
    const wss = new WebSocket.Server({server});
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
  }
}
