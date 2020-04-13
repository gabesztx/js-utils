import { Component, OnInit } from '@angular/core';
import { User, UserDataService } from "../../services/user-data.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>

  constructor(private router: Router, private userDataService: UserDataService) {
    this.users$ = this.userDataService.getUsers();
  }

  ngOnInit(): void {
    this.users$.subscribe((users) => {
      console.log('users: ', users);
    })
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/users/list', id]);
  }

}
