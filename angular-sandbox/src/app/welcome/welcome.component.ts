import { Component, OnInit } from '@angular/core';
import { UserDataService } from "../user/services/user-data.service";
import { DbDataService } from "../services/db-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private dbDataService: DbDataService, private userDataService: UserDataService) {
  }

  ngOnInit(): void {

  }

  getUsers() {
    console.log('getUsers');
    this.userDataService.getUsers().subscribe(
      (data) => {
        console.log('Users', data);
      })
  }


  getUser() {
    console.log('getUser');
    this.userDataService.getUser(1).subscribe(
      (data) => {
        console.log('User:', data);
      })
  }
}
