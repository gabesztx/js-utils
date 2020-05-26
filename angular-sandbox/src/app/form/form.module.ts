import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
// import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { IcellValidatorDirective } from './directives/validator.directive';

@NgModule({
  declarations: [
    FormComponent,
    // ReactiveFormComponent,
    // DynamicFormComponent,
    CustomInputComponent,
    IcellValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule
  ]
})
export class FormModule { }
