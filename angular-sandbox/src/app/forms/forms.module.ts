import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { DynamicComponent } from './dynamic/dynamic.component';

import { HttpService } from './services/http.service';


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
  ],
  providers: [HttpService],
})
export class FormsModule {
}
