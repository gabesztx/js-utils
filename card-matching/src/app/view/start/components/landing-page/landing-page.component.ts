import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from "@angular/router";
import * as fromRoot from '../../../../reducers/index.reducer';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private store: Store<fromRoot.MainState>, private router: Router) {
    // this.router.navigate(['game']);
    // this.store.dispatch()
  }

  ngOnInit() {
    // setTimeout(() => {}, 2000)
  }

}
