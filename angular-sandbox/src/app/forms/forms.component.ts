import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  config: any = {
    emailList: [
      {
        inputType: 'text',
        placeholder: 'test1@test.hu',
        validators: [Validators.required]
      },
      {
        inputType: 'text',
        placeholder: 'test2@test.hu',
        validators: [Validators.required]
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
