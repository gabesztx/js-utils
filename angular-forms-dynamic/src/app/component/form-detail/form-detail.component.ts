import {Component, Input, OnChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {FormDataService} from '../../service/form-data.service';
import {FormDataModel} from '../../model/form-data-model';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnChanges {
  @Input() formDetialData: FormDataModel;
  formDetial: FormGroup;

  constructor(private fb: FormBuilder,
              private formDataService: FormDataService) {
    this.initForm();
  }

  ngOnChanges() {

  }

  initForm() {
    this.formDetial = this.fb.group({
      name: '',
      email: '',
      locale: ''
    });
  }

}
