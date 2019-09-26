import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const Peer: any;
// declare const navigator: any;

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
    // video: false
  };
  peer: any;
  peerId: string;
  mediaConnection: any;
  stream: any;


  constructor() {}

  ngAfterViewInit() {
    this.video = this.vidRef.nativeElement;
  }


  ngOnInit() {
    this.peerId = this.isChrome ? 'streamer' : 'clients';
    this.peer = new Peer(this.peerId, {host: 'localhost', port: 9000, path: '/'});
    setTimeout(() => {
      if (!this.isChrome) {
        // this.getMediaStream();
      }
    });

    this.peer.on('call', (call) => {
      // console.log('call from :', call);
      call.answer(this.stream);
      call.on('stream', (streamData) => {
        console.log('call stream:', streamData);
        this.video.srcObject = streamData;
      });
      // call.on('close', () => {});
    });
    // this.peer.on('open', (id) => {});
    this.peer.on('close', () => {
      console.log('Peer Event: close');
    });
    this.peer.on('disconnected', () => {
      console.log('Peer Event: disconnected');
    });


  }


  startStream() {
    this.getMediaStream().then(() => {
      this.startCamera();
      this.mediaConnection = this.peer.call('clients', this.stream);
    });
    // console.log();
    /*  if (!this.stream) {
        console.log('go go go');
        this.getMediaStream();
      }*/
    // if (this.isChrome) {}
    // this.mediaConnection.on('open', () => {});
    // this.mediaConnection.on('close', () => {});
  }


  stopStream() {
    if (!this.mediaConnection) {
      return;
    }
    // console.log('stopStream');
    this.mediaConnection.close();
    this.mediaConnection = null;
    this.stopCamera();
    this.stream.getTracks().forEach((track) => {
      track.stop();
    });
    this.stream = null;
    // this.peer.disconnect();
    // this.video.srcObject = null;
    // this.video.srcObject = this.stream; // append media stream, then start video camera or audio
    // if (!this.isFirefox) {}
  }

  startCamera() {
    this.video.srcObject = this.stream; // append media stream, then start video camera or audio

  }

  stopCamera() {
    this.video.srcObject = null;
    // if (!this.isFirefox) {}
  }


  handleSuccess(stream: MediaStream) {
    console.log('go stream');
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
