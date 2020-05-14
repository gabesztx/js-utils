import { Component, ElementRef, forwardRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ]
})
export class CustomInputComponent implements OnInit, OnChanges, ControlValueAccessor {
  private _model: any;
  @ViewChild('input') public input;
  @ViewChild('inputModel') public inputModel;
  @Input() public required: boolean;
  @Input() public validators;

  @Input()
  public get model(){
    return this._model;
  }

  public set model(value){
    this._model = value;
    if (this.propagateChanges) {
      this.propagateChanges(this._model);
    }
  }

  public propagateChanges: (x: any) => void;
  public propagateTouch: (x: any) => void;

  constructor(private el: ElementRef){
    this.model = {};
  }

  ngOnChanges(changes: SimpleChanges){
    if (this.propagateChanges) {
      this.propagateChanges(this._model);
    }
  }

  ngOnInit(): void{
  }

  registerOnChange(fn: any): void{
    this.propagateChanges = (value: any) => {
      if (this.input) {
        value.input = this.input.nativeElement;
      }
      value.inputModel = this.inputModel;
      fn(value);
    };
  }

  registerOnTouched(fn: any): void{
    this.propagateTouch = fn;
  }

  writeValue(obj: any): void{
    if (obj) {
      this.model = obj;
    }
  }

  validate(c: FormControl | any){
    if (this.el.nativeElement.querySelectorAll('.ng-invalid').length > 0 || (c.value && !c.value.inputModel.valid)) {
      if (c.value && c.value.inputModel) {
        const err = c.value && c.value.inputModel.errors;
        const validation = c.value && !c.value.inputModel.valid ? err : null;
        // console.log('validate', validation);
        return validation;
      }
    }
    return null;
  }

  updateNgModel($event){
    if (!$event.target) {
      this.model.model = $event;
      this.model = this.model;
      console.log(this.inputModel.valid);
    }
    // this.model = this.model;
    // console.log('updateNgModel', $event);
  }

}
