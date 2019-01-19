import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  declarations: [
    HeaderComponent,
    DropDownComponent,

  ],
  exports: [
    HeaderComponent,
    DropDownComponent
  ]
})
export class CoreModule {
}
