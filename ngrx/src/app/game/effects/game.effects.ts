import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameDataService } from '../services/game-data.service';
import { ICard } from '../models/card.model';
import { LOAD_CARDS, LoadCardsCompleted } from '../actions/card.actions';
import { switchMap, map } from 'rxjs/operators';
import * as fromGame from '../reducers';

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions,
              private store: Store<fromGame.GameState>,
              private gameDataServices: GameDataService) {}
  @Effect()
  loadCards$ = this.actions$.pipe(
    ofType(LOAD_CARDS),
    switchMap(action => this.store.pipe(select(fromGame.getDeckSize))),
    switchMap(deckSize => {
      return this.gameDataServices.loadCards(deckSize).pipe(
        map((payload: ICard[]) => {
          return new LoadCardsCompleted(payload);
        }),
      );
    })
  );
}
