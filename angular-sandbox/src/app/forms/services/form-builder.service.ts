import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private fb: FormBuilder) {
  }

  generateForm(config: any[], name: string): FormGroup {
    const formGroup = this.createFormGroup();
    const formArray = this.createFormArray();
    const formControl = config.map(val => this.createFormControl(val.formControlName, val.validation));
    formControl.forEach(control => formArray.push(control));
    formGroup.addControl(name, formArray);
    return formGroup;
  }

  createFormGroup(config = {}): FormGroup {
    return this.fb.group(config);
  }

  createFormArray(config = []): FormArray {
    return this.fb.array(config);
  }

  createFormControl(state = '', validator = null): FormControl {
    return this.fb.control(state, validator);
  }

  getFormControl() {

  }

  getFormArray() {

  }

  getFormControll() {

  }
}
