import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketWsService } from '../../services/socket-ws.service';

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.scss']
})
export class VideocallComponent implements OnInit, AfterViewInit {
  @ViewChild('localVideo', {static: false}) localVideoRef: ElementRef;
  @ViewChild('remoteVideo', {static: false}) removeVideoRef: ElementRef;
  myName: string;
  mediaConstraints = {
    audio: true,
    video: true
  };
  pc: RTCPeerConnection | any;
  localVideo: HTMLVideoElement;
  remoteVideo: HTMLVideoElement;
  localStream: MediaStream;
  remoteStream: MediaStream;
  isStart = true;
  isCamera = true;

  constructor(private socketService: SocketWsService) {
    this.myName = 'Peer-' + parseInt(String(Math.random() * 100), 10);
  }

  ngOnInit() {
    this.socketService.ws.onmessage = (msg) => {
      const message = JSON.parse(msg.data);
      switch (message.type) {
        case 'video-offer':
          console.log('get: video-offer');
          this.handleVideoOfferMsg(message);
          break;
        case 'video-answer':
          console.log('get: video-answer');
          this.handleVideoAnswerMsg(message);
          break;
        case 'new-ice-candidate':
          console.log('get: new-ice-candidate');
          this.handleNewICECandidateMsg(message);
          break;
        case 'videoOff':
          // console.log('HANG UP')
          break;
        case 'hang-up':
          // console.log('HANG UP');
          this.closeVideoCall();
          break;
      }
    };
  }

  ngAfterViewInit() {
    this.localVideo = this.localVideoRef.nativeElement;
    this.remoteVideo = this.removeVideoRef.nativeElement;
  }

  invite() {
    this.isStart = false;
    this.createPeerConnection();
    navigator.mediaDevices.getUserMedia(this.mediaConstraints)
      .then((localStream) => {
        this.localVideo.srcObject = localStream;
        this.localStream = localStream;
        localStream.getTracks().forEach(track => this.pc.addTrack(track, localStream));
      }).catch((e) => {
      this.closeVideoCall();
    });
  }

  addCamera() {
    // navigator.mediaDevices.getUserMedia(this.mediaConstraints).then((stream) => {
    //   this.localStream = stream;
    //   this.localVideo.srcObject = stream;
    //   stream.getTracks().forEach(track => this.pc.addTrack(track, stream));
    // });
  }
  stopCamera() {
    // console.log('stopCamera');
    // this.localStream.getTracks().forEach(track => track.stop());
    // this.localStream = null;
    // this.localVideo.srcObject = null;
  }

  hangUp() {
    this.closeVideoCall();
    this.sendToServer({
      name: this.myName,
      target: '-',
      type: 'hang-up',
    });
  }

  createPeerConnection() {
    this.pc = new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.stunprotocol.org'
        }
      ]
    });
    this.pc.onicecandidate = this.handleICECandidateEvent.bind(this);
    this.pc.ontrack = this.handleTrackEvent.bind(this);
    this.pc.onnegotiationneeded = this.handleNegotiationNeededEvent.bind(this);
    this.pc.onremovetrack = this.handleRemoveTrackEvent.bind(this);
    this.pc.oniceconnectionstatechange = this.handleICEConnectionStateChangeEvent.bind(this);
    this.pc.onicegatheringstatechange = this.handleICEGatheringStateChangeEvent.bind(this);
    this.pc.onsignalingstatechange = this.handleSignalingStateChangeEvent.bind(this);
  }

  // PC EVENT HANDLER -------------
  handleICECandidateEvent(event) {
    // console.log('--- EVENT ---: handleICECandidateEvent');
    if (event.candidate) {
      this.sendToServer({
        target: '-',
        type: 'new-ice-candidate',
        candidate: event.candidate
      });
      // target: this.userName, TODO: other client name
    }
  }

  handleTrackEvent(event) {
    console.log('--- EVENT ---: handleTrackEvent');
    if (!this.remoteVideo.srcObject) {
      this.remoteStream = event.streams[0];
      this.remoteVideo.srcObject = event.streams[0];
    }
  }

  handleNegotiationNeededEvent() {
    console.log('--- EVENT ---: handleNegotiationNeededEvent');
    this.pc.createOffer()
      .then((offer) => {
        return this.pc.setLocalDescription(offer);
      })
      .then(() => {
        this.sendToServer({
          name: this.myName,
          target: '-',
          type: 'video-offer',
          sdp: this.pc.localDescription
        });
      })
      .catch((e) => {
      });
  }

  handleRemoveTrackEvent() {
    console.log('--- EVENT ---: handleRemoveTrackEvent');
  }

  handleICEConnectionStateChangeEvent() {
    console.log('--- EVENT ---: handleICEConnectionStateChangeEvent');
    switch (this.pc.iceConnectionState) {
      case 'closed':
      case 'failed':
      case 'disconnected':
        console.log('handleICEConnectionStateChangeEvent: disconnected');
        this.closeVideoCall();
        break;
    }
  }

  handleICEGatheringStateChangeEvent() {
  }

  handleSignalingStateChangeEvent() {
    console.log('--- EVENT ---: handleSignalingStateChangeEvent');
    switch (this.pc.signalingState) {
      case 'closed':
        console.log('handleSignalingStateChangeEvent: closed');
        this.closeVideoCall();
        break;
    }
  }

  // --------------------------------------------


  handleVideoOfferMsg(msg) {
    console.log('--- EVENT ---: handleVideoOfferMsg');
    if (!this.pc) {
      this.createPeerConnection();
    }
    const desc = new RTCSessionDescription(msg.sdp);
    this.pc.setRemoteDescription(desc)
      .then(() => {
        return navigator.mediaDevices.getUserMedia(this.mediaConstraints);
      })
      .then((stream) => {
        this.localStream = stream;
        this.localVideo.srcObject = stream;
        stream.getTracks().forEach(track => this.pc.addTrack(track, stream));
      })
      .then(() => {
        return this.pc.createAnswer();
      })
      .then((answer) => {
        return this.pc.setLocalDescription(answer);
      })
      .then(() => {
        this.isStart = false;
        this.sendToServer({
          name: this.myName,
          target: '-',
          type: 'video-answer',
          sdp: this.pc.localDescription
        });
      })
      .catch((e) => {
      });
  }

  handleVideoAnswerMsg(msg) {
    const desc = new RTCSessionDescription(msg.sdp);
    this.pc.setRemoteDescription(desc).then(() => {
      console.log('Answer done!');
    });
  }

  handleNewICECandidateMsg(msg) {
    const candidate = new RTCIceCandidate(msg.candidate);
    this.pc.addIceCandidate(candidate).catch(() => {
    });
  }

  sendToServer(msg) {
    const msgJSON = JSON.stringify(msg);
    this.socketService.ws.send(msgJSON);
  }


  closeVideoCall() {
    console.log('closeVideoCall');
    if (this.pc) {
      this.pc.ontrack = null;
      this.pc.onremovetrack = null;
      this.pc.onremovestream = null;
      this.pc.onicecandidate = null;
      this.pc.oniceconnectionstatechange = null;
      this.pc.onsignalingstatechange = null;
      this.pc.onicegatheringstatechange = null;
      this.pc.onnegotiationneeded = null;

      if (this.remoteStream) {
        this.remoteStream.getTracks().forEach(track => track.stop());
        this.remoteStream = null;
      }
      if (this.localStream) {
        this.localStream.getTracks().forEach(track => track.stop());
        this.localStream = null;
      }
      this.pc.close();
      this.pc = null;
    }
    this.localVideo.srcObject = null;
    this.remoteVideo.srcObject = null;
    this.isStart = true;
    // targetUsername = null;
  }
}
