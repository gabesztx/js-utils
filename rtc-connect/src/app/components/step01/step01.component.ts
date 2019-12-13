import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step01',
  templateUrl: './step01.component.html',
  styleUrls: ['./step01.component.scss']
})
export class Step01Component implements AfterViewInit {
  @ViewChild('localVideo', {static: false}) localVideoRef: ElementRef;
  @ViewChild('remoteVideo', {static: false}) remoteVideoRef: ElementRef;

  localVideo: HTMLVideoElement;
  remoteVideo: HTMLVideoElement;

  localMediaStream: MediaStream;
  remoteMediaStream: MediaStream;

  localPeerConnection: RTCPeerConnection | any;
  remotePeerConnection: RTCPeerConnection | any;

  mediaStreamConstraints = {
    video: true,
  };
  offerOptions = {
    offerToReceiveVideo: 1,
  };
  isCallBtn = false;
  isChrome = navigator.userAgent.indexOf('Chrome') > -1;

  ngAfterViewInit() {
    this.localVideo = this.localVideoRef.nativeElement;
    // this.remoteVideo = this.remoteVideoRef.nativeElement;
    this.getStream();
  }

  async getStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(this.mediaStreamConstraints);
      this.gotLocalMediaStream(stream);
    } catch (err) {
      console.log('Error Stream: ', err);
    }
  }

  gotLocalMediaStream(mediaStrem: MediaStream) {
    this.localMediaStream = mediaStrem;
    console.log('gotLocalMediaStream');
    if (this.isChrome) {
      this.isCallBtn = true;
    }
    this.callAction();
    // this.isCallBtn = true;
    // this.isChrome()
    // if (this.isChrome) {}
    // this.localVideo.srcObject = mediaStrem;
    // setTimeout(() => {}, 1000);
  }


  startAction() {
    // this.getStream();
    this.localPeerConnection.createOffer(this.offerOptions)
      .then(this.createdOffer.bind(this))
      .catch((error) => console.log('offerOptions ERROR:', error));
  }

  callAction() {
    console.log('callAction');
    const servers = null;

    // localPeerConnection
    this.localPeerConnection = new RTCPeerConnection(servers);
    this.localPeerConnection.addEventListener('icecandidate', (event) => {
      console.log('event: ', 'icecandidate');
      // this.handleConnection(event);
    });
    this.localPeerConnection.addStream(this.localMediaStream);
    // this.localPeerConnection.addEventListener('iceconnectionstatechange', this.handleConnectionChange);

    // remotePeerConnection
    // this.remotePeerConnection = new RTCPeerConnection(servers);
    // this.remotePeerConnection.addEventListener('icecandidate', this.handleConnection);
    // this.remotePeerConnection.addEventListener('iceconnectionstatechange', this.handleConnectionChange);
    // this.remotePeerConnection.addEventListener('addstream', this.gotRemoteMediaStream);
    if (this.isChrome) {

    }
  }

  createdOffer(description) {
    console.log('createdOffer');
    // console.log('localPeerConnection: ', this.localPeerConnection);
    this.localPeerConnection.setLocalDescription(description).then(() => {
      this.setLocalDescriptionSuccess(this.localPeerConnection);
    }).catch((error) => console.log('setLocalDescription ERROR:', error));

  }

  setLocalDescriptionSuccess(peerConnection) {
    // console.log('setLocalDescriptionSuccess');
    // const peerName = this.getPeerName(peerConnection);
    // console.log('peerName', peerName);
    // console.log('setLocalDescriptionSuccess', );
  }


  gotRemoteMediaStream(event) {
    console.log('gotRemoteMediaStream');
    const mediaStream = event.stream;
  }


  handleConnection(event) {
    const peerConnection = event.target;
    const iceCandidate = event.candidate;
    console.log('handleConnection');
    // console.log('peerConnection', peerConnection);
    // console.log('iceCandidate', iceCandidate);
    // if (iceCandidate) {
    //   console.log('NEW NEW');
    // }
  }

  handleConnectionChange(event) {
    console.log('handleConnectionChange', event);
  }

  getPeerName(peerConnection) {
    return (peerConnection === this.localPeerConnection) ? 'localPeerConnection' : 'remotePeerConnection';
  }


}

/*  hdConstraints = {
    video: {
      width: {
        min: 1280
      },
      height: {
        min: 720
      }
    }
  };*/
