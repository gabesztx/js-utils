import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromRoot from '../../../../reducers/index.reducer';
import { DeckSize } from '../../../../actions/card.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  deckSize$: Observable<number>;
  constructor(private store: Store<fromRoot.MainState>, private router: Router) {
    this.deckSize$ = this.store.pipe(select(fromRoot.getDeckSize));
  }

  ngOnInit() {}

  startGame() {
    this.router.navigate(['game']);
  }

  changeDeckSize(value) {
    this.store.dispatch(new DeckSize(value));
  }
}
