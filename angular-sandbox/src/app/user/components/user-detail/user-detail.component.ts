import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserDataService } from '../../services/user-data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user$: Observable<User>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userDataService: UserDataService) {

  }

  ngOnInit(): void {
    // id from resolve
    /*
    this.user$ = this.route.data.pipe(
      map(resolve => resolve.user)
    );
    */

    // id from route param
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.userDataService.getUser(params.get('id'));
        }
      )
    );
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
