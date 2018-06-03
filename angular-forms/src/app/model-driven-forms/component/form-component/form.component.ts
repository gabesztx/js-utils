import {Component} from '@angular/core';
import {FormDataModel} from '../../model/form-data-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  
  powers = ['Value 1', 'Value 2', 'Value 3', 'Value 4'];
  model = new FormDataModel(18, 'Gabesz', this.powers[0], '');
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  onResetForm() {
    this.model = new FormDataModel(18, '', '', '');
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
