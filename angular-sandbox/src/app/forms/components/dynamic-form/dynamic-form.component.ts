import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilderService } from '../../services/form-builder.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges { //input Array
  @Input() config: any[] = [];
  @Input() form: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  label: string;

  constructor(private fbService: FormBuilderService) {
  }

  ngOnChanges() {
    console.log('Change');
    if (this.form) {
    console.log('Form', this.form);
    }
  }

  ngOnInit(): void {
    // this.form = this.fbService.generateForm(this.config.emailList, 'emailList');
    // console.log(this.form);
    /*  this.form = this.fbService.createFormGroup();
      this.form.addControl('emailList', this.fbService.createFormArray());
      if (this.emailListData.length) {
        this.emailListData.forEach(() => this.addInput());
      }

      this.form.valueChanges.subscribe(value => {
        console.log(this.form);
      });*/
  }

  addInput() {
    // this.emailList.push(this.fbService.createFormControl());
  }

  removeInput(index: number) {
    // this.emailList.removeAt(index);
  }

  trackByFn(index) {
    return index;
  }

  onSubmit() {
    // console.log(this.emailList);
  }
}
