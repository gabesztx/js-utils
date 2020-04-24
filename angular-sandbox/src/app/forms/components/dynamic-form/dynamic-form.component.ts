import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  emailListData = ['teszt1@test.hu', 'teszt2@test.hu'];
  form: FormGroup;
  // emailListData = [];

  get emailList() {
    return this.form.get('emailList') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createGroup();
    this.form.addControl('emailList', this.createArray());
    if (this.emailListData.length) {
      this.emailListData.forEach(() => this.addEmail());
    }
    // console.log(this.form);
  }

  createGroup(): FormGroup {
    return this.fb.group({});
  }

  createControl(): FormControl {
    return this.fb.control('', Validators.required);
  }

  createArray(): FormArray {
    return this.fb.array([]);
  }

  addEmail() {
    this.emailList.push(this.createControl());
  }

  onSubmit() {
    console.log(this.emailList);
  }
}
