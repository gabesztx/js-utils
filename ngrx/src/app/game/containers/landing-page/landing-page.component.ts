import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import * as fromOther from '../../reducers';

import { DeckSize } from '../../actions/card.actions';
import { LoadCards } from '../../actions/other.actions';
import { LoadCardsCompleted } from '../../actions/other.actions';
import { Observable } from 'rxjs';
import { GameDataService } from '../../services/game-data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  deckSize$: Observable<number>;
  loadCards: Observable<boolean>;
  loadCardsCompleted: Observable<any>;

  constructor(private store: Store<fromGame.GameState>,
              private gameDataServices: GameDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.deckSize$ = this.store.pipe(select(fromGame.getDeckSize));
    // this.loadCards = this.store.pipe(select(fromOther.getIsLoading));
    // this.loadCardsCompleted = this.store.pipe(select(fromOther.getLoadCards));
    /*this.loadCards.subscribe(
      value => {
        console.log('Loading status: ', value);
      }
    );*/
    /* this.loadCardsCompleted.subscribe(
       value => {
         console.log('Load Cards Complete: ', value);
       }
     );*/
  }

  startGame() {
    // this.store.dispatch(new LoadCards());
    // console.log(this.gameDataServices.loadCards());
    // const data = this.gameDataServices.loadCards();

  }

  changeDeckSize(value) {
    // this.store.dispatch(new DeckSize(value));
  }
}

// this.router.navigate(['game']);
// this.gameDataService.resetCards();
// setTimeout(() => {}, 2000);
/*data.subscribe(
      val => {
        console.log('val', val);
      }
    )*/
