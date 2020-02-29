import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [
    ReactiveFormComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReactiveModule {
}
