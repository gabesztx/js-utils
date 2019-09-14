import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-resolution',
  templateUrl: './video-resolution.component.html',
  styleUrls: ['./video-resolution.component.scss']
})
export class VideoResolutionComponent implements AfterViewInit {
  @ViewChild('videoElement', {static: false}) vidRef: ElementRef;
  video: HTMLVideoElement;
  mediaStream: any;
  mediaDevice: MediaDevices;

  constraints = {
    audio: false,
    video: {width: 320, height: 240}
  };

  constructor() {
  }

  ngAfterViewInit() {
    this.video = this.vidRef.nativeElement;
    this.mediaDevice = navigator.mediaDevices;
  }

  getMedia() {
    this.mediaDevice
      .getUserMedia(this.constraints)
      .then((media: MediaStream) => {
        this.mediaStream = media;
        this.startVideo();
      })
      .catch(e => console.log('Error: ', e));
  }

  changeVideoResolution(w: number, h: number) {
    this.constraints.video = {width: w, height: h};
    if (this.mediaStream) {
      this.stopVideo();
    }
    this.getMedia();
  }


  startVideo() {
    this.video.srcObject = this.mediaStream;
  }

  stopVideo() {
    this.getAllMediaStream().forEach((track: MediaStreamTrack) => {
      track.stop();
    });
  }

  getAllMediaStream(): Array<MediaStreamTrack> {
    return this.mediaStream.getTracks();  // get MediaStreamTracks ( audio, video )
  }

}

// this.mediaStream.oninactive = () => {}; // stream Event: END
