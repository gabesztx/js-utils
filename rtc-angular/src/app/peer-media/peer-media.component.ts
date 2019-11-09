import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const Peer: any;
// declare const navigator: any;

const CONFIG = {
  host: 'localhost',
  port: 9000,
  path: '/peerjs'
};

@Component({
  selector: 'app-peer-media',
  templateUrl: './peer-media.component.html',
  styleUrls: ['./peer-media.component.scss']
})
export class PeerMediaComponent implements OnInit, AfterViewInit {
  @ViewChild('videoElement', {static: false}) vidRef: ElementRef;
  video: HTMLVideoElement;
  isChrome = navigator.userAgent.indexOf('Chrome') > -1;
  constraints = {
    audio: false,
    video: true
  };
  peer: any;
  peerId: string;
  mediaConnection: any;
  dataConnection: any;
  stream: any;
  client: string;
  server: string;

  constructor() {
    this.client = 'reciever';
    this.server = 'sender';
    this.peerId = this.isChrome ? this.server : this.client;
  }

  ngAfterViewInit() {
    this.video = this.vidRef.nativeElement;
  }

  ngOnInit() {
    this.peer = new Peer(this.peerId, CONFIG);
    // Peer Event
    this.peer.on('open', (id) => {
      this.initMediaConnection();
      this.initDataConnection();
    });
    // this.peer.on('error', (err) => {});
    // this.peer.on('disconnected', () => console.log('server disconnected'));
    // this.peer.on('close', () => {});
  }

  initDataConnection() {
    if (this.peerId === 'sender') {
      // DataConnect connect to client
      this.dataConnection = this.peer.connect(this.client);
      this.dataConnection.on('data', (data) => console.log(data));
      // this.dataConnection.on('open', () => console.log('open'));
      // this.dataConnection.on('close', () => console.log('close'));
    } else {
      // DataConnect listening from server
      this.peer.on('connection', (conn) => {
        conn.on('data', (data) => {
          console.log(data);
          conn.send(`send data from client`);
        });
      });
    }
    // setTimeout(() => {}, 2000);
  }

  sendData() {
    this.dataConnection.send(`send data from server`);
  }


  initMediaConnection() {
    // Media Connect Event
    this.peer.on('call', (call) => {
      call.answer();
      call.on('stream', (mediaStream) => {
        console.log('Stream from sender', mediaStream);
        this.video.srcObject = mediaStream;
      });
    });

  }

  startMediaStream() {
    this.getMediaStream().then(() => {
      this.video.srcObject = this.stream;

      // Media Connections
      this.mediaConnection = this.peer.call(this.client, this.stream);
      this.mediaConnection.on('close', () => console.log('Close mediaConnection'));
      this.mediaConnection.on('stream', (stream) => console.log('stream for client', stream));

    });
  }

  stopMediaStream() {
    this.mediaConnection.close();
    // this.peer.disconnect();
    // this.peer.destroy();
    /* video element off */
    this.stream.getTracks().forEach((track) => {
      track.stop();
    });
    this.video.srcObject = null;
    // this.stream = null;
    // this.peerCall = null;
    // this.stopCamera();
    // this.peer.disconnect();
    // this.video.srcObject = null;
    // this.video.srcObject = this.stream; // append media stream, then start video camera or audio
    // if (!this.isFirefox) {}
  }

  handleSuccess(stream: MediaStream) {
    this.stream = stream;
    // const videoTracks = stream.getVideoTracks(); // video data
    // const audioTracks = stream.getAudioTracks(); // audio data
    // console.log('videoTracks', videoTracks);
    // console.log('audioTracks', audioTracks);
  }

  async getMediaStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.handleSuccess(stream);
    } catch (err) {
      console.log('Error Media: ', err);
    }
  }
}

// setTimeout(() => {}, 3000);
