import { Component, OnInit } from '@angular/core';
import Peer from 'peerjs';

// declare const Peer: any;
declare const navigator: any;
declare const InstallTrigger: any;

const CONFIG = {
  host: 'gabesztx.duckdns.org',
  port: 9000,
  path: '/app'
};

@Component({
  selector: 'app-peer',
  templateUrl: './peer.component.html',
  styleUrls: ['./peer.component.scss']
})
export class PeerComponent implements OnInit {
  peer;
  isFirefox: boolean;
  peerId: string;
  channelID1 = 'ID1';
  channelID2 = 'ID2';


  constructor() {
  }

  ngOnInit() {
    const peer = new Peer('pick-an-id');
    console.log('peer', peer);
    // this.peerId = !this.isFirefox ? this.channelID1 : this.channelID2;
    // this.isFirefox = typeof InstallTrigger !== 'undefined';
    // this.peerId = this.channelID1;
    /*    const peer = new Peer(this.peerId, CONFIG);
        console.log(peer);
        this.peer.on('connection', (conn) => {
          console.log('connection event:', conn);
          conn.on('data', (data) => {
            console.log('DATA: ', data);
          });
        });*/
    // this.peer = new Peer(this.channelID1, CONFIG);
    // this.peer.on('open', id => console.log('Event Open:' + id));
    // this.peer.on('close', id => console.log('Event Close:' + id));

    // if (this.isFirefox) {}
    // this.initConnetion(isFirefox);
    // setTimeout(() => {}, 3000);

  }

  initConnetion(isFirefox: boolean) {
    if (isFirefox) {

    }
    /*  this.peer.on('open', (id) => {
        console.log('EVENT: peer open', ' - ', id);
      });*/
  }

  connect() {
    console.log('connect');
    /*   const conn = this.peer.connect(this.peerId);
       conn.on('open', () => {
         console.log('Open: ');
       });*/
    // console.log('click', jo);
    /*setTimeout(() => {
      console.log('SEND');
      conn.send('DATA: Hello!');
    }, 2000);*/

  }

}

// this.peer.disconnect();
