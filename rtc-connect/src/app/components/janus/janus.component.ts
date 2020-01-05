import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
  echotest: any;
  opaqueId = 'echotest-' + Janus.randomString(12);

  constructor() {

  }

  ngOnInit() {
    // console.log('JANUS', Janus);
  }

  ngAfterViewInit() {
    this.localVideo = this.localVideoRef.nativeElement;
    this.remoteVideo = this.removeVideoRef.nativeElement;
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
        server: 'https://gabesztx.duckdns.org:8089/janus',
        success: () => {
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
        plugin: 'janus.plugin.echotest',
        opaqueId: this.opaqueId,
        success: (pluginHandle) => {
          console.log('attach - success', pluginHandle);
          this.echotest = pluginHandle;
          const body = {audio: true, video: true};
          this.echotest.send({message: body});
          this.echotest.createOffer(
            {
              media: {data: true},
              success: (jsepData) => {
                // console.log('createOffer Succes: ', jsepData);
                this.echotest.send({message: body, jsep: jsepData});
              },
              error: (error) => {
              }
            });
        },
        error: (error) => {
          console.error('  -- Error attaching plugin...', error);
        },
        consentDialog: (on) => {
          // console.log('consentDialog', on);
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
        onmessage: (msg, jsepData) => {
          console.log('onmessage: ', msg, jsepData);
          if (jsepData !== undefined && jsepData !== null) {
            console.log('Handling SDP as well...', jsepData);
            this.echotest.handleRemoteJsep({jsep: jsepData});
          }
        },
        onlocalstream: (stream) => {
          console.log('onlocalstream', stream);
          this.localVideo.muted = true;
          this.localVideo.srcObject = stream;
          console.log('echotest', this.echotest);
        },
        onremotestream: (stream) => {
          console.log('onremotestream', stream);
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
      }
    );
  }
}
