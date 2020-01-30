import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketWsService } from '../../services/socket-ws.service';
import { of } from 'rxjs';

declare var Janus: any;

@Component({
  selector: 'app-janus',
  templateUrl: './janus.component.html',
  styleUrls: ['./janus.component.scss']
})

export class JanusComponent implements OnInit, AfterViewInit {
  @ViewChild('localVideo', {static: false}) localVideoRef: ElementRef;
  @ViewChild('remoteVideo', {static: false}) removeVideoRef: ElementRef;
  localVideo: HTMLVideoElement;
  remoteVideo: HTMLVideoElement;
  janus: any;
  videoCall: any;
  opaqueId = 'echotest-' + Janus.randomString(12);
  jsep: any;
  userName: string;
  callName: any;

  constructor(private socketService: SocketWsService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.localVideo = this.localVideoRef.nativeElement;
    this.remoteVideo = this.removeVideoRef.nativeElement;
    this.localVideo.muted = true;
    this.remoteVideo.muted = true;
    this.janusInit();
  }

  janusInit() {
    Janus.init({
      debug: false,
      dependencies: Janus.useDefaultDependencies(),
      callback: () => {
        this.janusCreateSeassion();
      }
    });
  }

  janusCreateSeassion() {
    this.janus = new Janus(
      {
        server: 'wss://gabesztx.duckdns.org:8989',
        success: () => {
          // console.log('------ janusCreateSeassion SUCCESS ------');
          this.janusAttach();
        },
        error: (err) => {
          console.log('error!!', err);
        },
        destroyed: () => {
          console.log('destroyed');
        },
      });
  }

  janusAttach() {
    this.janus.attach(
      {
        plugin: 'janus.plugin.videocall',
        opaqueId: this.opaqueId,
        success: (pluginHandle) => {
          this.videoCall = pluginHandle;
          // console.log('------ janusAttach SUCCESS ------');
          this.register();
        },
        error: (error) => {
          console.error('  -- Error attaching plugin...', error);
        },
        consentDialog: (on) => {
        },
        iceState: (state) => {
          console.log('iceState: ', state);
        },
        mediaState: (medium, on) => {
          console.log('mediaState', medium, on);
        },
        webrtcState: (on) => {
          console.log('webrtcState', on);
        },
        slowLink: (on) => {
          console.log('slowLink', on);
        },
        onlocalstream: (stream) => {
          console.log('onlocalstream');
          Janus.attachMediaStream(this.localVideo, stream);
        },
        onremotestream: (stream) => {
          console.log('----- onremotestream ------', stream);
          Janus.attachMediaStream(this.remoteVideo, stream);
        },
        ondataopen: (data) => {
          console.log('ondataopen', data);
        },
        ondata: (data) => {
          console.log('ondata', data);
        },
        oncleanup: () => {
          console.log('oncleanup');
        },
        onmessage: (msg, jsep) => {
          // console.log('msg: ', msg);
          // console.log('jsep: ', jsep);
          const isResult = msg.hasOwnProperty('result');
          const isError = msg.hasOwnProperty('error');
          if (isResult) {
            if (!msg.result.list) {
              // console.log('results', msg.result);
              switch (msg.result.event) {
                case 'registered':
                  console.log('EV: -- Registered --', msg.result.event);
                  break;
                case 'calling':
                  console.log('EV: -- Calling --');
                  break;
                case 'incomingcall':
                  console.log('EV: -- Incomingcall --');
                  this.janusCreateAnswer(jsep);
                  break;
                case 'accepted':
                  console.log('EV: -- Accepted --');
                  this.janusHandleRemoteJsep(jsep);
                  break;
              }
            } else {
              console.log('list:', msg.result.list);
            }
          }
          if (isError) {
            console.log('--- ERROR --- :', msg.error);
          }
        },
      }
    );
  }

  janusCreateAnswer(jsepData) {
    console.log(' - janusCreateAnswer -', jsepData);
    this.videoCall.createAnswer(
      {
        jsep: jsepData,
        media: {data: true},
        success: (jsepA: any) => {
          console.log('------ Create Answer SUCCESS ------');
          console.log(jsepA);
          this.videoCall.send({
            message: {
              request: 'accept'
            },
            jsep: jsepA
          });
        },
        error: (error) => {
        }
      });
  }

  janusHandleRemoteJsep(jsepData) {
    this.videoCall.handleRemoteJsep(
      {
        jsep: jsepData,
        media: {data: true},
        success: (jsepA: any) => {
          console.log('------ HandleRemoteJsep SUCCESS ------');
        },
        error: (error) => {
        }
      });
  }

  janusCreateOffer() {
    this.videoCall.createOffer(
      {
        media: {data: true},
        success: (jsepData: any) => {
          console.log('------ Create Offer SUCCESS ------');
          this.jsep = jsepData;
          this.videoCall.send({
            message: {
              request: 'call',
              username: this.callName
            },
            jsep: jsepData
          });
        },
        error: (error) => {
        }
      });
  }

  call() {
    this.janusCreateOffer();
  }

  list() {
    this.videoCall.send({
      message: {
        request: 'list'
      }
    });
  }

  register() {
    const randomNum = parseInt(String(Math.random() * 50), 10);
    const user = String(randomNum);
    this.userName = user;
    this.videoCall.send({
      message: {
        request: 'register',
        username: user
      }
    });
  }
}
