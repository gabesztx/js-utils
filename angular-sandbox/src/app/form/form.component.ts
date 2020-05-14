import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public inputValue: any = { model: '' };

  validators = {
    error1: (value) => {
      return value !== 'XXX'
        ? null
        : {
          valid: false,
          reason: 'Az érték nem lehet XXX!',
        };
    },
    error2: (value) => {
      return (value && (<string>value).length > 3) || value === ''
        ? null
        : {
          valid: false,
          reason: 'Az értek kevesebb mind 4 karakter!',
        };
    },
  };

  constructor() {
  }

  ngOnInit() {
  }

}
