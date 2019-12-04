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
      console.log('client: connect');
    });
    this.socket.on('event', (data) => {
      console.log('client: event: ', data);
    });
    this.socket.on('disconnect', () => {
      console.log('client: disconnect');
    });
  }

}
