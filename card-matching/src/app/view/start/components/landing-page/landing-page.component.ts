import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromRoot from '../../../../reducers/index.reducer';
import { DeskSize } from '../../../../actions/card.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  deskSize$: Observable<number>;

  constructor(private store: Store<fromRoot.MainState>, private router: Router) {
    this.deskSize$ = this.store.pipe(select(fromRoot.getDeskSize));
  }

  ngOnInit() {
  }

  startGame() {
    // this.router.navigate(['game']);
    console.log('startGame');
  }

  changeDeskSize(value) {
    console.log('changeDesk', value);
    this.store.dispatch(new DeskSize(value));
  }
}
