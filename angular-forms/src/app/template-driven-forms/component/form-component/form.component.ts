import {Component, OnInit} from '@angular/core';
import {FormModel} from '../../model/form-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  powers = ['Value 1', 'Value 2', 'Value 3', 'Value 4'];
  model = new FormModel(18, 'Gabesz', this.powers[0]);
  submitted = false;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
  }

  // get diagnostic() { return JSON.stringify(this.model); }
}
