import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketWsService {
  url: string;
  ws: WebSocket;
  constructor() {
    this.url = environment.production ? 'wss://gabesztx.duckdns.org:3000' : 'wss://192.168.1.23:3000';
    this.ws = new WebSocket(this.url);
    this.ws.onopen = (event) => {};
    this.ws.onclose = (event) => {};
  }
}
