import { Component, OnInit } from '@angular/core';

class UserModel {

  username: string;
  password: string;
  email: string;
  age: number;
  name: string;
}


@Component({
  selector: 'app-reflect-metadata',
  templateUrl: './reflect-metadata.component.html',
  styleUrls: ['./reflect-metadata.component.scss']
})

export class ReflectMetadataComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // console.log(@Reflect);
  }

}
