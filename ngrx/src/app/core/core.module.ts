import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DropDownComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    DropDownComponent
  ]
})
export class CoreModule {
}
