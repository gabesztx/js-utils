import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicMediaComponent } from './components/basic-media/basic-media.component';



@NgModule({
  declarations: [BasicMediaComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicMediaComponent]
})
export class UserMediaModule { }
