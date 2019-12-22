import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit, AfterViewInit {
  @ViewChild('videoTag', {static: false}) videoTag: ElementRef;

  pc: RTCPeerConnection;
  video: HTMLVideoElement;
  constraints = {video: true, audio: false};
  isCallBtn = false;

  constructor(private socketService: SocketService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.video = this.videoTag.nativeElement;
    this.socketService.getMessage().subscribe((res) => this.handleMessage(res));
    this.createPeerConnection();
  }

  createPeerConnection() {
    this.pc = new RTCPeerConnection();
    // this.pc.onnegotiationneeded = () => {};
    this.pc.onicecandidate = ({candidate}) => {
      if (candidate) {
        this.socketService.sendMessage({
          channel: 'iceCandidate',
          iceCandidate: candidate
        });
      }
    };
    this.pc.ontrack = (event) => {
      if (!this.video.srcObject) {
        this.video.srcObject = event.streams[0];
      }
    };
  }

  async createOffer() {
    try {
      const offer = await this.pc.createOffer();
      await this.setLocalDescription(offer);
      this.socketService.sendMessage({
        channel: 'offer',
        offer: this.pc.localDescription
      });
    } catch (err) {
      console.error('ERROR: createOffer');
    }
  }

  async createAnswer() {
    try {
      const answer = await this.pc.createAnswer();
      await this.setLocalDescription(answer);
      this.socketService.sendMessage({
        channel: 'answer',
        answer: this.pc.localDescription
      });
    } catch (err) {
      console.error('ERROR: createAnswer');
    }
  }

  async addIceCandidate(candidate) {
    try {
      await this.pc.addIceCandidate(candidate);
    } catch (err) {
      console.error('ERROR: addIceCandidate');
    }
  }


  async handleMessage(message) {
    switch (message.channel) {
      case 'call':
        console.log('call');
        this.createOffer();
        break;
      case 'offer':
        // console.log('offer');
        await this.setRemoteDescription(message.offer);
        this.createAnswer();
        break;
      case 'answer':
        // console.log('answer');
        await this.setRemoteDescription(message.answer);
        break;
      case 'iceCandidate':
        // console.log('iceCandidate');
        this.addIceCandidate(message.iceCandidate);
        break;
      default:
        break;
    }
  }

  call() {
    this.handleMessage({channel: 'call'});
  }

  async start() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      stream.getTracks().forEach(track => {
        this.pc.addTrack(track, stream);
      });
      this.isCallBtn = true;
      this.video.srcObject = stream;
    } catch (err) {
      console.error(err);
    }
  }

  async setLocalDescription(desc) {
    return await this.pc.setLocalDescription(desc);
  }

  async setRemoteDescription(desc) {
    return await this.pc.setRemoteDescription(desc);
  }

}

// isChrome = navigator.userAgent.indexOf('Chrome') > -1;
