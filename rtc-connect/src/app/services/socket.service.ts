import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: SocketIOClient.Socket;
  url: string;
  option =  { secure: true, reconnect: true, rejectUnauthorized : false };
  constructor() {
    this.url = environment.production ? 'https://gabesztx.duckdns.org:3000' : 'http://localhost:3000';
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

  sendSandBox(data) {
    this.socket.emit('sandbox', data);
  }

  getSandBox() {
    return new Observable<any>(observer => {
      this.socket.on('sandbox', (data) => observer.next(data));
    });
  }
}
