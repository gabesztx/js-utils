import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
  }

  ngOnInit() {
    this.socket = io(this.url);
    this.socket.on('connect', () => {
      console.log('client connected!');
      // socket.emit('news', { hello: 'world' });
      // socket.on('my other event', () => {});
    });
    this.socket.on('connect_error', (error) => {
      console.log('error: ', error);
    });
  }

}
