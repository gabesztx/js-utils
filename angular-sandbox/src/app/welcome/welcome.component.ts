import { Component, OnInit } from '@angular/core';
import { UserDataService } from "../user/services/user-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private userDataService: UserDataService) {
  }

  ngOnInit(): void {

  }

  getData() {
    console.log('Click!');
    this.userDataService.getUsers().subscribe(
      (data) => {
        console.log('Done!', data);
      })
  }
}
