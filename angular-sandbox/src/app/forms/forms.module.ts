import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { InputFieldComponent } from './components/input-field/input-field.component';

@NgModule({
  declarations: [
    FormsComponent,
    ReactiveFormComponent,
    DynamicFormComponent,
    InputFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
