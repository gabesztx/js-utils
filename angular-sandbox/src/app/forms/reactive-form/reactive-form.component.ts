import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  fb = new FormGroup({
    firstName: new FormControl('', Validators.minLength(4),
    ),
    lastName: new FormControl('', Validators.required),
  });
  constructor() {
  }

  ngOnInit(): void {
    // Form valid status listener
    this.fb.valueChanges.subscribe(value => {
      // console.log('value change: ', value)
    });
    // Form input value listener
    this.fb.statusChanges.subscribe(value => {
      // console.log('status change: ', value)
    });
  }

  onChange() {}

  get firstName(){
    return this.fb.get('firstName')
  }
  get lastName(){
    return this.fb.get('lastName')
  }

  onSubmit() {
    console.log('submit');
  }

}
