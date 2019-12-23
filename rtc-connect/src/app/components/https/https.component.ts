import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.scss']
})
export class HttpsComponent implements OnInit {

  // constructor() {}
  constructor(private wsSocketService:) {
  }

  ngOnInit() {
    const socket = new WebSocket('wss://192.168.1.23:3000');
    // this.socketService.getSandBox().subscribe((msg) => {
    //   console.log('Get Socket Msg: ', msg);
    // });
  }

  send() {
    // const data = 'Hello' + ' - ' + Math.random() * 1000;
    // this.socketService.sendSandBox(data);
  }

}
