import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
    })
  });
  constructor() {
  }

  ngOnInit(): void {
    // Form valid status listener
    console.log(this.userForm);
    this.userForm.valueChanges.subscribe(value => {
      // console.log('value change: ', value)
    });
    // Form input value listener
    this.userForm.statusChanges.subscribe(value => {
      // console.log('status change: ', value)
    });
  }

  onChange() {}

  get firstName(){
    return this.userForm.get('firstName')
  }
  get lastName(){
    return this.userForm.get('lastName')
  }

  onSubmit() {
    console.log('submit');
  }

}
