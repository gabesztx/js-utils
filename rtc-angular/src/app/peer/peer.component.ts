import { Component, OnInit } from '@angular/core';
// import Peer from 'peerjs';

declare const Peer: any;
declare const navigator: any;
declare const InstallTrigger: any;

const CONFIG_PRODUCT = {
  host: 'gabesztx.duckdns.org',
  port: 9000,
  path: '/'
};
const CONFIG_DEV = {
  host: 'localhost',
  port: 9000,
  path: '/'
};

@Component({
  selector: 'app-peer',
  templateUrl: './peer.component.html',
  styleUrls: ['./peer.component.scss']
})
export class PeerComponent implements OnInit {
  isFirefox = typeof InstallTrigger !== 'undefined';
  peer: any;
  dataConnection: any;


  constructor() {
    const id = this.isFirefox ? 'sender' : 'receiver';
    this.peer = new Peer(id, {host: 'localhost', port: 9000, path: '/'});
  }

  ngOnInit() {
    if (!this.isFirefox) {
      // this.initReceive();
    } else {
      setTimeout(() => {
        // this.initDataConnection();
      }, 1000);
    }
  }

  /*initReceive() {
    const peer = this.peer.on('connection', (client) => {
      console.log('peer connected: ', client.peer);
      client.on('data', (data) => {
        console.log('Data from sender: ', data);
        setTimeout(() => {
          const data1 = parseInt(String(Math.random() * 1000), 10);
          client.send(data1);
        }, 1000);
      });

    });

  }

  initDataConnection() {
    const peer = this.peer.connect('receiver');
    peer.on('open', () => {
      console.log('sender is open');
    });
    setTimeout(() => {
      const data = parseInt(String(Math.random() * 1000), 10);
      peer.send(data);
    }, 1000);

    setTimeout(() => {
      const data = parseInt(String(Math.random() * 1000), 10);
      peer.send(data);
    }, 3000);

    peer.on('data', (data) => {
      console.log('Data from receiver: ', data);
    });
  }*/

  sendData() {}
}

// TODO: conn events, create reciever and sender events
/*this.conn.on('open', () => {
     console.log('connected to server', this.conn);
   });
  */
