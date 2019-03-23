import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
// import * as fromGame from '../../reducers';
// import { SetDeckSize } from '../../actions/card.actions';
// import { GameEffects } from '../../effects/game.effects';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  deckSize$: Observable<number>;

  constructor(
    // private gameEffects: GameEffects,
    // private store: Store<fromGame.GameState>,
    private router: Router) {
  }

  ngOnInit() {
    // this.deckSize$ = this.store.pipe(select(fromGame.getDeckSize));
  }

  startGame() {
    // this.router.navigate(['game']);
  }

  changeDeckSize(value) {
    // this.store.dispatch(new SetDeckSize(value));
  }
}
