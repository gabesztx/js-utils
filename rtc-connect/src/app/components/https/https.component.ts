import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.scss']
})
export class HttpsComponent implements OnInit {
  ws: WebSocket;

  // constructor() {}
  constructor() {
  }

  ngOnInit() {
    this.connect();
    // this.socketService.getSandBox().subscribe((msg) => {
    //   console.log('Get Socket Msg: ', msg);
    // });
  }

  connect() {
    // this.ws = new WebSocket('wss://192.168.1.23:3000');
    this.ws = new WebSocket('wss://gabesztx.duckdns.org:3000');
    this.ws.onopen = (event) => {
      console.log('WS: Open');
    };
    this.ws.onclose = (event) => {
      console.log('WS: Close');
      this.ws = null;
      setTimeout(() => {
        this.connect();
      }, 1500);
    };
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('WS: Message: ', data);
    };
  }

  send() {
    const msg = {
      channel: 'message',
      data: 'Hello' + ' - ' + Math.random() * 1000
    };
    this.ws.send(JSON.stringify(msg));
  }

}
