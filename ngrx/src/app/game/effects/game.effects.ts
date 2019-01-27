import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameDataService } from '../services/game-data.service';
import { ICard } from '../models/card.model';
import { LOAD_CARDS, RESET_CARDS, LoadCardsCompleted } from '../actions/card.actions';
import { switchMap, map, take } from 'rxjs/operators';
import * as fromGame from '../reducers';

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions,
              private store: Store<fromGame.GameState>,
              private gameDataServices: GameDataService) {
  }

  @Effect()
  loadCards$ = this.actions$.pipe(
    ofType(LOAD_CARDS),
    switchMap(action => this.store.pipe(select(fromGame.getDeckSize))),
    switchMap(deckSize => {
      return this.gameDataServices.loadCards(deckSize).pipe(
        // take(1),
        map((cards: ICard[]) => new LoadCardsCompleted(cards)),
      );
    })
  );

  @Effect()
  resetCards$ = this.actions$.pipe(
    ofType(RESET_CARDS),
    switchMap(action => {
      return this.gameDataServices.loadCards().pipe(
        
        /*map((cards: ICard[]) => {
          // console.log('reset cards', cards);
          return new LoadCardsCompleted(cards);
        })*/
      );
    })
  );
}
