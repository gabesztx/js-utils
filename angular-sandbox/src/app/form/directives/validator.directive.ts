import { Directive, Input, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { Indexable } from '../interfaces/Indexable';

@Directive({
  selector: '[icellValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IcellValidatorDirective),
      multi: true
    }],
})
export class IcellValidatorDirective implements Validator, OnChanges {
  @Input() validators: any;

  private validatorFn: ValidatorFn | null = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void{
    const change = changes['validators'];
    const validatorKeys = _.isObject(this.validators) ? Object.keys(this.validators) : [];
    if (validatorKeys.length > 0 && change) {
      const composites: Array<ValidatorFn> = [];
      validatorKeys.forEach((validator: any) => {
        if (Validators[validator]) {
          composites.push(Validators[validator](this.validators[validator]));
        } else {
          composites.push(this.getValidator(this.validators[validator], validator));
        }
      });
      this.validatorFn = Validators.compose(composites);
    } else {
      this.validatorFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): Indexable | null{
    // tslint:disable-next-line: no-non-null-assertion
    return this!.validatorFn!(control);
  }

  getValidator(func: Function, errKey: string): ValidatorFn{
    return (control: AbstractControl): Indexable | null => {
      const value = control.value;
      const result = func(value);

      const retValue = {[errKey]: result};

      return !result ? null : retValue;
    };
  }
}
