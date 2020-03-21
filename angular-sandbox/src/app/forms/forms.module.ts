import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { DynamicComponent } from './dynamic/dynamic.component';


@NgModule({
  declarations: [
    FormsComponent,
    ReactiveComponent,
    DynamicComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsRoutingModule
  ]
})
export class FormsModule {
}
