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
    this.remoteVideo = this.remoteVideoRef.nativeElement;
  }


  startAction() {
    // this.getStream();
    this.getStream();
    // this.localPeerConnection.createOffer(this.offerOptions)
    //   .then(this.createdOffer.bind(this))
    //   .catch((error) => console.log('offerOptions ERROR:', error));
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
    this.localVideo.srcObject = mediaStrem;
    this.localMediaStream = mediaStrem;
    this.isCallBtn = true;
    // if (this.isChrome) {}
    // this.callAction();
    // this.isCallBtn = true;
    // this.isChrome()
    // if (this.isChrome) {}
    // setTimeout(() => {}, 1000);
  }


  callAction() {
    const servers = null;

    // LocalPeerConnection
    this.localPeerConnection = new RTCPeerConnection(servers);
    this.localPeerConnection.addEventListener('icecandidate', (event) => {
      console.log('EVENT: ', 'localPeerConnection - icecandidate');
      this.handleConnection(event);
    });
    this.localPeerConnection.addEventListener('iceconnectionstatechange', (event) => {
      console.log('EVENT: ', 'localPeerConnection - iceconnectionstatechange');
    });

    // RemotePeerConnection
    this.remotePeerConnection = new RTCPeerConnection(servers);
    this.remotePeerConnection.addEventListener('icecandidate', (event) => {
      console.log('EVENT: ', 'remotePeerConnection - icecandidate');
      // this.handleConnection(event);
    });
    this.remotePeerConnection.addEventListener('iceconnectionstatechange', (event) => {
      console.log('EVENT: ', 'remotePeerConnection - iceconnectionstatechange');
    });
    this.remotePeerConnection.addEventListener('addstream', this.gotRemoteMediaStream.bind(this));


    this.localPeerConnection.addStream(this.localMediaStream);
    this.localPeerConnection.createOffer(this.offerOptions)
      .then(this.createdOffer.bind(this))
      .catch((error) => console.log('createOffer ERROR:', error));
  }

  handleConnection(event) {
    const peerConnection = event.target;
    const iceCandidate = event.candidate;
    if (iceCandidate) {
      const newIceCandidate = new RTCIceCandidate(iceCandidate);
      const otherPeer = this.getOtherPeer(peerConnection);
      // TODO: hozzáadtuk a remothoz a candidat data ( socketen ezt küldjük ajd át? )
      otherPeer.addIceCandidate(newIceCandidate)
        .then(() => {
          console.log('otherPeer addIceCandidate - DONE');
        }).catch((error) => {
        console.log('ERROR addIceCandidate:', error);
      });
    }
  }

  createdOffer(description) {
    this.localPeerConnection.setLocalDescription(description)
      .then(() => {
        console.log('localPeerConnection setLocalDescription - Done');
      }).catch((error) => console.log('setLocalDescription ERROR:', error));

    this.remotePeerConnection.setRemoteDescription(description)
      .then(() => {
        console.log('remotePeerConnection setRemoteDescription - Done');
      }).catch((error) => console.log('setRemoteDescription ERROR:', error));

    this.remotePeerConnection.createAnswer()
      .then(this.createdAnswer.bind(this))
      .catch((error) => console.log('createAnswer ERROR:', error));
  }

  createdAnswer(description) {
    this.remotePeerConnection.setLocalDescription(description)
      .then(() => {
        console.log('remotePeerConnection setLocalDescription - Done');
      }).catch((error) => console.log('remotePeerConnection setLocalDescription ERROR:', error));

    this.localPeerConnection.setRemoteDescription(description)
      .then(() => {
        console.log('localPeerConnection setRemoteDescription - Done');
      }).catch((error) => console.log('remotePeerConnection setLocalDescription ERROR:', error));
  }


  gotRemoteMediaStream(event) {
    console.log('----- gotRemoteMediaStream -----');
    const mediaStream = event.stream;
    this.remoteVideo.srcObject = mediaStream;
    this.remoteMediaStream = mediaStream;
  }

  getPeerName(peerConnection) {
    return (peerConnection === this.localPeerConnection) ? 'localPeerConnection' : 'remotePeerConnection';
  }

  getOtherPeer(peerConnection) {
    console.log(peerConnection === this.localPeerConnection);
    return (peerConnection === this.localPeerConnection) ?
      this.remotePeerConnection : this.localPeerConnection;
  }

}
