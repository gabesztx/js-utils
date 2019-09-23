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


  constructor() {
    this.peerId = this.isChrome ? 'streamer' : 'clients';
    this.peer = new Peer(this.peerId, {host: '192.168.1.14', port: 9000, path: '/'});
  }

  ngAfterViewInit() {
    this.video = this.vidRef.nativeElement;
  }


  ngOnInit() {
    // this.getMediaStream();
    console.log('getMediaStream', navigator);
    console.log('getMediaStream', navigator.mediaDevices);
    // setTimeout(() => {});
    /*this.peer.on('call', (call) => {
      // console.log('call from :', call);
      call.answer(this.stream);
      call.on('stream', (streamData) => {
        console.log('call stream:', streamData);
        this.video.srcObject = streamData;
      });
      // call.on('close', () => {});
    });*/


  }


  startStream() {
    this.startCamera();
    this.mediaConnection = this.peer.call('clients', this.stream);
    // this.mediaConnection.on('close', () => {});
  }

  stopStream() {
    this.stopCamera();
    this.mediaConnection.close();

    // this.video.srcObject = null;
    // this.video.srcObject = this.stream; // append media stream, then start video camera or audio
    // if (!this.isFirefox) {}
  }


  startCamera() {
    this.video.srcObject = this.stream; // append media stream, then start video camera or audio
    // if (!this.isFirefox) {}
  }

  stopCamera() {
    this.video.srcObject = null;
    // if (!this.isFirefox) {}
  }


  handleSuccess(stream: MediaStream) {
    console.log('stream');
    this.stream = stream;
    // const videoTracks = stream.getVideoTracks(); // video data
    // const audioTracks = stream.getAudioTracks(); // audio data
    // console.log('videoTracks', videoTracks);
    // console.log('audioTracks', audioTracks);
  }

  async getMediaStream() {

    try {

      console.log('getMediaStream', navigator.mediaDevices);
      // const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      // this.handleSuccess(stream);
    } catch (err) {
      console.log('Error Media: ', err);
    }
  }
}
