import { Injectable } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  formArray: FormArray;

  constructor(private fb: FormBuilder){
  }

  generateForm(config: any[], name: string): FormGroup{
    const formGroup = this.createFormGroup();
    this.formArray = this.createFormArray();
    const formControl = config.map(val => this.createFormControl(val.formControlName, val.validation));
    formControl.forEach(control => this.formArray.push(control));
    formGroup.addControl(name, this.formArray);
    return formGroup;
  }

  createFormGroup(config = {}): FormGroup{
    return this.fb.group(config);
  }

  createFormArray(config = []): FormArray{
    return this.fb.array(config) as FormArray;
  }

  createFormControl(state = '', validator = null): FormControl{
    return this.fb.control(state, validator);
  }

  getFormControl(){

  }

  getFormArray(): FormArray{
    return this.formArray;
  }

}
