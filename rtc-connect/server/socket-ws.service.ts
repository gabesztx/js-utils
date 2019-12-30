import * as WebSocket from 'ws';
import { ClientService } from './client.service';

export class SocketWsService {
  clientService: ClientService;
  clientNum = 0;

  constructor() {
    this.clientService = new ClientService();
  }

  listen(server) {
    const wss = new WebSocket.Server({server});
    wss.on('connection', (ws: WebSocket) => {
      ws.on('message', (message: any) => {
        const msg = JSON.parse(message);
        if (msg.type === 'connect') {
          this.clientNum++;
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              const data = JSON.stringify({
                type: 'connect',
                num: this.clientNum
              });
              client.send(data);
            }
          });
          return;
        }
        wss.clients.forEach((client) => {
          if (ws !== client && client.readyState === WebSocket.OPEN) {
            client.send(message);
          }
        });
      });
      ws.on('close', () => {
        console.log('disconnect client');
        this.clientNum--;
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            const data = JSON.stringify({
              type: 'disconnect',
              num: this.clientNum
            });
            client.send(data);
          }
        });
      });
    });
  }
}
