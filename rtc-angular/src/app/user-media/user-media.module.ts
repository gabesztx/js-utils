import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicMediaComponent } from './components/basic-media/basic-media.component';
import { VideoResolutionComponent } from './components/video-resolution/video-resolution.component';



@NgModule({
  declarations: [BasicMediaComponent, VideoResolutionComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicMediaComponent, VideoResolutionComponent]
})
export class UserMediaModule { }
