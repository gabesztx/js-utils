import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  socket: SocketIOClient.Socket;
  url: string;
  option = {secure: true, reconnect: true, rejectUnauthorized: false};

  constructor() {
    this.url = environment.production ?
      'https://gabesztx.duckdns.org:3000' :
      'https://192.168.1.23:3000';
    this.socket = io(this.url, this.option);
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  getMessage() {
    return new Observable<any>(observer => {
      this.socket.on('message', (data) => observer.next(data));
    });
  }
  getClients() {
    return new Observable<any>(observer => {
      this.socket.on('clients', (data) => observer.next(data));
    });
  }
}
