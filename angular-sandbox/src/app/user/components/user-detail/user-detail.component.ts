import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { User, UserDataService } from "../../services/user-data.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user$: Observable<User>

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userDataService: UserDataService) {
  }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userDataService.getUser(params.get('id'))
      )
    )
    this.user$.subscribe((user) => {
      // console.log('user: ', user);
    })
  }

  navigateToDetail() {
    this.router.navigate(['/users/list']);
  }
}
