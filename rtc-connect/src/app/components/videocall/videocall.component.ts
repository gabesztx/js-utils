import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketWsService } from '../../services/socket-ws.service';

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.scss']
})
export class VideocallComponent implements OnInit {
  @ViewChild('localVideo', {static: false}) localVideoRef: ElementRef;
  @ViewChild('remoteVideo', {static: false}) removeVideoRef: ElementRef;
  mediaConstraints = {
    audio: false,
    video: true
  };
  constructor(private socketService: SocketWsService) {
  }

  ngOnInit() {
  }

  invite() {

  }
}
