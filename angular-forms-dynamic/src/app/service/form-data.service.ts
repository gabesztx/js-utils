import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {FormDataModel, formData} from '../model/form-data-model';


@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  getFormData(): Observable<FormDataModel[]> {
    return of(formData); // simulate latency with delay
  }
}
