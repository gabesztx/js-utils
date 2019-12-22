import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: SocketIOClient.Socket;
  // url = 'http://localhost:3000';
  url = 'http://gabesztx.duckdns.org:3000';

  constructor() {
    this.socket = io(this.url);
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
