import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-peerconnection',
  templateUrl: './peerconnection.component.html',
  styleUrls: ['./peerconnection.component.scss']
})
export class PeerconnectionComponent implements AfterViewInit {
  @ViewChild('localVideo', {static: false}) localVideoRef: ElementRef;
  url = 'http://localhost:3000';
  socket;
  isChrome = navigator.userAgent.indexOf('Chrome') > -1;
  localVideo: HTMLVideoElement;
  localMediaStream: MediaStream;
  remoteMediaStream: MediaStream;
  pc: RTCPeerConnection | any;

  constraints = {
    video: true,
    audio: false,
  };

  configuration = {
    iceServers: [{urls: 'stuns:stun.example.org'}]
  };

  constructor() {
    this.socket = io(this.url);
    this.socket.on('message', async ({desc, candidate}) => {
      try {
        if (desc) {
          if (desc.type === 'offer') {
            // Bob sets the description Alice sent him as the remote description using setRemoteDescription()
            await this.pc.setRemoteDescription(desc);
            console.log('GET OFFER');
            /*const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
            stream.getTracks().forEach((track) => {
              this.pc.addTrack(track, stream);
            });*/

            // Create Answer
            await this.pc.setLocalDescription(await this.pc.createAnswer());
            console.log('CREATED ANSWER');
            this.socket.emit('message', {desc: this.pc.localDescription});
          } else if (desc.type === 'answer') {
            await this.pc.setRemoteDescription(desc);
            console.log('GET ANSWER');
          } else {
            console.log('Unsupported SDP type.');
          }

        } else if (candidate) {
          await this.pc.addIceCandidate(candidate);
          console.log('CANDIDATE');
        }
      } catch (err) {
        console.error('ERROR SOCKET MESSAGE: ', err);
      }
    });
  }

  ngAfterViewInit() {
    this.localVideo = this.localVideoRef.nativeElement;
    this.pc = new RTCPeerConnection();
    this.pc.onicecandidate = ({candidate}) => {
      console.log('SEND CANDITATE');
      this.socket.emit('message', {candidate}); // optimal?
    };
    this.pc.onnegotiationneeded = async () => {
      try {
        // Alice runs the RTCPeerConnection createOffer() method.
        // The return from this of this is passed an RTCSessionDescription: Alice's local session description.
        await this.pc.setLocalDescription(await this.pc.createOffer());
        console.log('CREATED OFFER');
        // In the callback, Alice sets the local description using setLocalDescription() and then sends this session description to Bob via their signaling channel.
        this.socket.emit('message', {desc: this.pc.localDescription});
      } catch (err) {
        console.error(err);
      }
    };

    this.pc.ontrack = (event) => {
      // don't set srcObject again if it is already set.
      if (this.localVideo.srcObject) {
        return;
      }
      console.log('RTC TRACK EVENT');
      this.localVideo.srcObject = event.streams[0];
    };
  }

  async start() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      stream.getTracks().forEach((track) => {
        this.pc.addTrack(track, stream);
      });
      // this.localMediaStream = stream;
      this.localVideo.srcObject = stream;
    } catch (err) {
      console.error(err);
    }
  }


  /*
  async getStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.gotLocalMediaStream(stream);
    } catch (err) {
      console.log('Error Stream: ', err);
    }
  }

  gotLocalMediaStream(mediaStrem: MediaStream) {
    this.localMediaStream = mediaStrem;
    if (this.isChrome) {
      this.localVideo.srcObject = mediaStrem;
    }
    this.createPeerConnection();
  }

  doCall() {
    this.pc.createOffer(
      this.setLocalAndSendMessage.bind(this),
      event => console.log('createOffer error: ', event));
  }

  doAnswer() {
    this.pc.createAnswer().then(
      this.setLocalAndSendMessage.bind(this),
      event => console.log('createAnswer error: ', event)
    );
  }

  setLocalAndSendMessage(sessionDescription) {
    this.pc.setLocalDescription(sessionDescription);
    this.sendMessage(sessionDescription);
  }

  createPeerConnection() {
    try {
      this.pc = new RTCPeerConnection(null);
      this.pc.addEventListener('icecandidate', this.handleIceCandidate.bind(this));
      this.pc.addEventListener('addstream', this.handleRemoteStreamAdded.bind(this));
      // this.pc.addEventListener('removestream', this.handleRemoteStreamRemoved.bind(this));
      // this.pc.onremovestream = this.handleRemoteStreamRemoved.bind(this);
      this.pc.addStream(this.localMediaStream);
      console.log('Created RTCPeerConnnection');
    } catch (e) {
      console.log('Failed to create PeerConnection, exception: ' + e.message);
      alert('Cannot create RTCPeerConnection object.');
      return;
    }
  }

  handleIceCandidate(event) {
    if (event.candidate) {
      const data = {
        type: 'candidate',
        label: event.candidate.sdpMLineIndex,
        id: event.candidate.sdpMid,
        candidate: event.candidate.candidate
      };
      this.sendMessage(data);
    } else {
      console.log('End of candidates.');
    }
  }

  handleRemoteStreamAdded(event) {
    console.log('handleRemoteStreamAdded');
    this.remoteMediaStream = event.stream;
    this.localVideo.srcObject = this.remoteMediaStream;
  }

  handleRemoteStreamRemoved(event) {
    console.log('Remote stream removed. Event: ', event);
  }

  sendMessage(message) {
    this.socket.emit('message', message);
  }
  */
}


/*
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-peerconnection',
  templateUrl: './peerconnection.component.html',
  styleUrls: ['./peerconnection.component.scss']
})
export class PeerconnectionComponent implements AfterViewInit {
  @ViewChild('localVideo', {static: false}) localVideoRef: ElementRef;

  url = 'http://localhost:3000';

  localVideo: HTMLVideoElement;
  localMediaStream: MediaStream;
  remoteMediaStream: MediaStream;

  pc: RTCPeerConnection | any;

  socket;
  constraints = {
    video: true
  };

  isChrome = navigator.userAgent.indexOf('Chrome') > -1;

  constructor() {
    this.socket = io(this.url);
    this.socket.on('message', (message) => {
      if (message.type === 'offer') {
        console.log('Message: ', 'offer');
        this.pc.setRemoteDescription(new RTCSessionDescription(message));
        this.doAnswer();
      }
      if (message.type === 'answer') {
        console.log('Message: ', 'answer');
        this.pc.setRemoteDescription(new RTCSessionDescription(message));
      }
      if (message.type === 'candidate') {
        console.log('Message: ', 'candidate');
        const candidate = new RTCIceCandidate({
          sdpMLineIndex: message.label,
          candidate: message.candidate
        });
        this.pc.addIceCandidate(candidate);
      }
    });
  }


  ngAfterViewInit() {
    this.localVideo = this.localVideoRef.nativeElement;
    this.getStream();
  }

  async getStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.gotLocalMediaStream(stream);
    } catch (err) {
      console.log('Error Stream: ', err);
    }
  }

  gotLocalMediaStream(mediaStrem: MediaStream) {
    this.localMediaStream = mediaStrem;
    if (this.isChrome) {
      this.localVideo.srcObject = mediaStrem;
    }
    this.createPeerConnection();
  }

  doCall() {
    this.pc.createOffer(
      this.setLocalAndSendMessage.bind(this),
      event => console.log('createOffer error: ', event));
  }

  doAnswer() {
    this.pc.createAnswer().then(
      this.setLocalAndSendMessage.bind(this),
      event => console.log('createAnswer error: ', event)
    );
  }

  setLocalAndSendMessage(sessionDescription) {
    this.pc.setLocalDescription(sessionDescription);
    this.sendMessage(sessionDescription);
  }

  createPeerConnection() {
    try {
      this.pc = new RTCPeerConnection(null);
      this.pc.addEventListener('icecandidate', this.handleIceCandidate.bind(this));
      this.pc.addEventListener('addstream', this.handleRemoteStreamAdded.bind(this));
      // this.pc.addEventListener('removestream', this.handleRemoteStreamRemoved.bind(this));
      // this.pc.onremovestream = this.handleRemoteStreamRemoved.bind(this);
      this.pc.addStream(this.localMediaStream);
      console.log('Created RTCPeerConnnection');
    } catch (e) {
      console.log('Failed to create PeerConnection, exception: ' + e.message);
      alert('Cannot create RTCPeerConnection object.');
      return;
    }
  }

  handleIceCandidate(event) {
    if (event.candidate) {
      const data = {
        type: 'candidate',
        label: event.candidate.sdpMLineIndex,
        id: event.candidate.sdpMid,
        candidate: event.candidate.candidate
      };
      this.sendMessage(data);
    } else {
      console.log('End of candidates.');
    }
  }

  handleRemoteStreamAdded(event) {
    console.log('handleRemoteStreamAdded');
    this.remoteMediaStream = event.stream;
    this.localVideo.srcObject = this.remoteMediaStream;
  }

  handleRemoteStreamRemoved(event) {
    console.log('Remote stream removed. Event: ', event);
  }

  sendMessage(message) {
    this.socket.emit('message', message);
  }
}
*/
