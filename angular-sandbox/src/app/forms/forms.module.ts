import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    FormsComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
