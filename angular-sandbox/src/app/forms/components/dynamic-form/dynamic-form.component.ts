import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  EMAIL_LIST = ['teszt1@test.hu', 'teszt2@test.hu', 'teszt3@test.hu'];
  emailListForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailListForm = this.fb.group({

    })
  }

  ngOnInit(): void {
  }

  createEmails(){

  }

}
