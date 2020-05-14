import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function emailValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    console.log('value: ', value);
    if (value.length > 2) {
      console.log('valid');
      return {
        'emailValidator': true
      };
    }
    console.log('nem valid');
    return null;
    // return {validEmail: true};
  };
  // if (!control.value.startsWith('https') || !control.value.includes('.io')) {
  //   return { validUrl: true };
  // }
}

// PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
// export class FormValidator {
//   constructor() { }
// }
// [Validators.required, Validators.pattern(this.PATTERN)]
