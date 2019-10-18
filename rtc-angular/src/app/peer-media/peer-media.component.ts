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
    // video: false
  };
  peer: any;
  peerId: string;
  mediaConnection: any;
  stream: any;


  constructor() {
  }

  ngAfterViewInit() {
    this.video = this.vidRef.nativeElement;
  }


  ngOnInit() {
    // this.peerId = this.isChrome ? 'streamer' : 'clients';
    this.peerId = this.isChrome ? 'streamer' : 'clients';
    this.peer = new Peer(this.peerId, CONFIG_DEV);
    this.peer.on('open', (id) => {
    });
    this.peer.on('close', () => {
      console.log('close peer');
    });

    this.peer.on('call', (call) => {
      call.answer();
      call.on('stream', (mediaStream) => {
        console.log('stream from server:', mediaStream);
        this.video.srcObject = mediaStream;
      });
      call.on('close', () => {
        console.log('close Client media stream');
      });
      /*  this.getMediaStream().then(() => {
          // console.log('peer call', call);
          call.answer(this.stream);
          // console.log('peer answer');
          call.on('stream', (mediaStream) => {
            console.log('Stream from server:', mediaStream);
            this.video.srcObject = mediaStream;
          });
          call.on('close', () => {
            console.log('Close Client media stream');
            // this.video.srcObject = streamData;
          });
        });*/

      // setTimeout(() => {}, 3000);

    });
    this.peer.on('connection', (data) => {
      console.log('connection:', data);
    });

    this.peer.on('disconnected', () => {
      console.log('disconnect');
    });

    this.peer.on('error', (err) => {
      // console.log('Error', err);
    });
  }

  startStream() {
    // console.log('startStream');
    this.getMediaStream().then(() => {
      this.video.srcObject = this.stream;
      this.mediaConnection = this.peer.call('clients', this.stream);
      this.mediaConnection.on('stream', (stream) => {
        console.log('stream for client', stream);
        // setTimeout(() => {}, 3000);
      });
      this.mediaConnection.on('close', () => {
        console.log('close server mediaConnection');
      });
      // this.mediaConnection.close();
    });
    // console.log();
    /*  if (!this.stream) {
        console.log('go go go');
        this.getMediaStream();
      }*/
    // this.startCamera();
    // if (this.isChrome) {}
    // this.peerCall.on('open', () => {});
    // this.peerCall.on('close', () => {});
  }

  stopStream() {
    console.log('stopStream');
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

  /* startCamera() {
    console.log('startCamera');
    this.video.srcObject = this.stream; // append media stream, then start video or audio
  }
  stopCamera() {
    console.log('stopCamera');
    this.video.srcObject = null;
  }
  */
}

