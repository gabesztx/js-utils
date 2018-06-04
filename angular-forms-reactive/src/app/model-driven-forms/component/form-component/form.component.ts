import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormDataModel} from '../../model/form-data-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  myform: FormGroup;
  langs: string[] = [
    'Magyar',
    'Angol',
    'Német',
  ];

  // submitted = false;
  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
      ]),
      locale: new FormControl(this.langs[0]),
    });

  }

  onSubmitClick() {
    // this.submitted = true;
    console.log('Submit: ');
    // console.log(this.model);
  }
}
