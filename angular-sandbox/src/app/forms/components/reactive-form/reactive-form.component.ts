import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
    }),
    emails: new FormArray([
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
    ]),
  });

  constructor(){
  }

  ngOnInit(): void{
    // Form values change
    this.profileForm.valueChanges.subscribe(value => {
      console.log('value change: ', value);
    });
    // Form validation change
    this.profileForm.statusChanges.subscribe(value => {
      console.log('status change: ', value);
    });

  }

  get name(){
    return this.profileForm.get('name');
  }

  get emails(){
    return this.profileForm.get('emails') as FormArray;;
  }

  get address(){
    return this.profileForm.get('address');
  }

  updateProfile(){
    this.profileForm.patchValue({
      name: 'Nancy',
      email: 'lofasz@test.hu',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit(){
    this.updateProfile();
  }
}
