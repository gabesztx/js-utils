import {Component, OnInit} from '@angular/core';
import {FormDataService} from '../../service/form-data.service';
import {FormDataModel} from '../../model/form-data-model';
import {Observable} from 'rxjs/index';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  formData: Observable<FormDataModel[]>;

  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.getForm();
    }, 500)

  }

  getForm() {
    this.formData = this.formDataService.getFormData();
    // this.selectedForm = this.formData;
  }

  onSubmit() {
    console.log('Submit');
  }
}
