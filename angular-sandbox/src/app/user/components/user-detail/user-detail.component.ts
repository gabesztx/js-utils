import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { User, UserDataService } from "../../services/user-data.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  // user$: Observable<User>
  // user$: Observable<any>
  user$: Observable<any>

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userDataService: UserDataService) {

  }

  ngOnInit(): void {
    /* resolve in user data */
    /*this.user$ = this.route.data.pipe(
      map(resolve => resolve.user)
    );*/

    /* get id from url and get user data */
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.userDataService.getUser(params.get('id'))
        }
      )
    )
    /*this.user$.subscribe((user) => {
      console.log('user: ', user);
    })*/
  }

  navigateToDetail() {
    this.router.navigate(['/users/list']);
  }

  ngOnDestroy(): void {
    // console.log('Destroy');
  }
}
