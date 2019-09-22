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
  peerId = this.isFirefox ? 'client1' : 'server';
  peer: any;
  // browser = this.isFirefox ? 'Firefox: ' : 'Chrome: ';
  conn: any;


  constructor() {
    this.peer = new Peer(this.peerId, {host: 'localhost', port: 9000, path: '/'});
  }

  ngOnInit() {
    if (!this.isFirefox) {
      this.onCreateConnection();
    } else {
      this.onJoinConnection();
    }
  }

  onCreateConnection() {
    this.peer.on('connection', (conn) => {
      console.log('peer connected: ', conn);
      conn.on('data', (data) => {
        console.log('data', data);
        const reData = parseInt(String(Math.random() * 1000), 10);
        setTimeout(() => {
          conn.send(reData);
        }, 1000);
      });

    });
  }

  onJoinConnection() {
    setTimeout(() => {
      this.conn = this.peer.connect('server');
      this.conn.on('data', (data) => {
        console.log('re data: ', data);
      });
    }, 1000);
  }

  onSendData() {
    const data = parseInt(String(Math.random() * 1000), 10);
    this.conn.send(data);
  }
}

// TODO: conn events, create reciever and sender events
/*this.conn.on('open', () => {
     console.log('connected to server', this.conn);
   });
  */
