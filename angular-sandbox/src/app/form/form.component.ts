import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public inputData: any = { model: '' };

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

  constructor(){
    /*this.myForm = new FormGroup({
      'inputData': new FormControl('Gabesztx')
    });*/
    // this.inputData = new FormControl({model: 'gabesztx'});
    // this.inputData = new FormControl('', Validators.minLength(5));
    // this.myForm = new FormGroup({
    //   'name': new FormControl('Gaben')
    // });
  }

  ngOnInit(){
  }

}
