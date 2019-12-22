import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: SocketIOClient.Socket;
  url = 'http://localhost:3000';

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
}
