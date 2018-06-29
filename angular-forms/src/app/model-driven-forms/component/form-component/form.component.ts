import {Component} from '@angular/core';
import {FormDataModel} from '../../model/form-data-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  langs = ['Magyar', 'Angol', 'Német'];
  model = new FormDataModel('', '', this.langs[0]);
  // submitted = false;

  onSubmit(form: any) {
    // this.submitted = true;
    console.log('FormData: ', form);
    // console.log(this.model);
  }

/*  onResetForm() {
    console.log('reset');
    this.model = new FormDataModel('', '', this.langs[0]);
    this.submitted = false;
  }*/

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
