import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basic-media',
  templateUrl: './basic-media.component.html',
  styleUrls: ['./basic-media.component.scss']
})
export class BasicMediaComponent implements AfterViewInit {
  @ViewChild('videoElement', {static: false}) vidRef: ElementRef;
  video: HTMLVideoElement;
  constraints = {
    audio: false,
    video: true
  };

  constructor() {
  }

  ngAfterViewInit() {
    this.video = this.vidRef.nativeElement;
  }

  handleSuccess(stream: MediaStream) {
    // (window as any).stream = stream;
    this.video.srcObject = stream; // append media stream, then start video camera or audio
    const videoTracks = stream.getVideoTracks(); // video data
    const audioTracks = stream.getAudioTracks(); // audio data
    console.log('videoTracks', videoTracks);
    console.log('audioTracks', audioTracks);
  }

  async getMedia() {
    try {
      console.log('navigator', navigator.mediaDevices);
      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.handleSuccess(stream);
    } catch (err) {
      console.log('Error Media: ', err);
    }
  }

  startCamera() {
    this.getMedia();
  }

}
