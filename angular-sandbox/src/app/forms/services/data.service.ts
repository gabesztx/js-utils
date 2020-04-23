import { Injectable } from '@angular/core';
import { InputBase } from '../models/input-base';
import { InputField } from '../models/input-field';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getEmailInput() {
    let emails: InputBase<string>[] = [
      new InputField({
        key: 'firstName',
        label: 'First name',
        value: 'teszt1@test.hu',
      }),
    ];

    return of(emails);
  }
}
