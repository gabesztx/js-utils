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
  isServer = false;

  constructor(private socketService: SocketService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.video = this.videoTag.nativeElement;
    this.socketService.getMessage().subscribe((res) => {
      this.handleMessage(res);
    });
    this.socketService.getClients().subscribe((clients) => {
      if (clients.length === 1) {
        this.isServer = true;
      }
      this.createPeerConnection();

    });
  }

  createPeerConnection() {
    const iceServer = {
      iceServers: [
        {
          urls: [
            'stun:stun.stunprotocol.org',
          ],
        },
      ],
    };

    this.pc = new RTCPeerConnection(iceServer);
    this.pc.onnegotiationneeded = () => {};
    this.pc.onicecandidate = (event) => {
      if (event.candidate) {
        this.socketService.sendMessage({
          channel: 'iceCandidate',
          iceCandidate: event.candidate
        });
      }
    };
    if (this.isServer) {
      navigator
        .mediaDevices
        .getUserMedia({video: true})
        .then((localStream) => {
          // console.log('localStream', localStream);
          this.video.srcObject = localStream;
          localStream.getTracks().forEach(track => {
            this.pc.addTrack(track, localStream);
          });
        });
    }

    this.pc.ontrack = (event) => {
      console.log('onTrack', event.streams[0]);
      this.video.srcObject = event.streams[0];
      // if (!this.video.srcObject) {}
    };
  }

  async call() {
    const descOffer = await this.pc.createOffer();
    await this.pc.setLocalDescription(descOffer);
    this.socketService.sendMessage({
      channel: 'offer',
      offer: descOffer
    });
  }


  async handleMessage(message) {
    switch (message.channel) {
      case 'call':
        break;
      case 'offer':
        console.log('offer');
        await this.pc.setRemoteDescription(message.offer);
        const descAnswer = await this.pc.createAnswer();
        await this.pc.setLocalDescription(descAnswer);
        this.socketService.sendMessage({
          channel: 'answer',
          answer: descAnswer
        });
        break;
      case 'answer':
        await this.pc.setRemoteDescription(message.answer);
        console.log('answer');
        break;
      case 'iceCandidate':
        await this.pc.addIceCandidate(message.iceCandidate);
        console.log('iceCandidate');
        break;
      default:
        // console.log("unknown message", message);
        break;
    }
  }
}


