import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import * as fromOther from '../../reducers';
import { DeckSize } from '../../actions/card.actions';
import { GameEffects } from '../../effects/game.effects';
import { LoadCards } from '../../actions/other.actions';
import { LoadCardsCompleted } from '../../actions/other.actions';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  deckSize$: Observable<number>;
  // loadCardsCompleted: Observable<any>;
  // loadCards: Observable<boolean>;

  constructor(private store: Store<fromGame.GameState>,
              private router: Router) {
  }

  ngOnInit() {
    this.deckSize$ = this.store.pipe(select(fromGame.getDeckSize));
    // this.loadCardsCompleted = this.store.pipe(select(fromGame.getLoadCards));
    // this.loadCards = this.store.pipe(select(fromGame.getIsLoading));
  }

  startGame() {
    // console.log('START');
    // this.store.dispatch(new LoadCards());
  }
  changeDeckSize(value) {
    this.store.dispatch(new DeckSize(value));
  }
}


// this.loadCards = this.store.pipe(select(fromOther.getIsLoading));
// this.loadCardsCompleted = this.store.pipe(select(fromOther.getLoadCards));
/*this.loadCards.subscribe(
  value => {
    console.log('Loading status: ', value);
  }
);*/

/*this.gameEffects.loadCards$
  .pipe(
    filter(action => {
      return true;
    })
  ).subscribe(
    value => {
      console.log('res effects value', value);
    }
  );*/

/*this.loadCardsCompleted.subscribe(
  res => {
    console.log('Load Cards Complete: ', res)
  }
);*/

// private gameEffects: GameEffects,
// this.router.navigate(['game']);
// this.gameDataService.resetCards();
// setTimeout(() => {}, 2000);
/*data.subscribe(
      val => {
        console.log('val', val);
      }
    )*/
