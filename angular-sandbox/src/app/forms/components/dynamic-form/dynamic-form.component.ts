import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilderService } from '../../services/form-builder.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges { //input Array
  @Input() config: any;
  @Input() form: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  emailListData: FormArray;

  constructor(private fbService: FormBuilderService){
  }

  ngOnChanges(){
  }

  ngOnInit(): void{
    this.form = this.fbService.createFormGroup();
    const formArray = this.fbService.createFormArray();
    this.form.addControl('emailList', formArray);
    this.addInput();
    console.log(this.form);
  }

  get emailList(){
    return this.form.get('emailList') as FormArray;
  }

  addInput(){
    this.emailList.push(this.fbService.createFormControl('', Validators.required));
  }

  removeInput(index: number){
    this.emailList.removeAt(index);
  }

  trackByFn(index){
    return index;
  }

  onSubmit(){
    // console.log(this.emailList);
  }
}
