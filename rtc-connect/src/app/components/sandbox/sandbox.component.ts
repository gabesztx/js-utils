import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements AfterViewInit {
  @ViewChild('localVideo', {static: false}) localVideoRef: ElementRef;
  // isChrome = navigator.userAgent.indexOf('Chrome') > -1;
  socket;
  socketUrl = 'http://localhost:3000';

  constructor() {
    this.socket = io(this.socketUrl);
  }

  ngAfterViewInit() {
  }

}
