import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameDataService } from '../services/game-data.service';
import { ICard } from '../models/card.model';
import { LOAD_CARDS, RESET_CARDS, ResetCards, SetCards } from '../actions/card.actions';
import { ResetStatus } from '../actions/status.actions';
import { switchMap, map, take, tap, startWith } from 'rxjs/operators';
import * as fromGame from '../reducers';
import { GAME_OVER, GamePage } from '../actions/controller.actions';

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions,
              private store: Store<fromGame.GameState>,
              private gameDataServices: GameDataService) {
  }

  @Effect()
  loadCards$ = this.actions$.pipe(
    ofType(LOAD_CARDS),
    switchMap(() => this.store.pipe(select(fromGame.getDeckSize)).pipe(take(1))),
    switchMap(deckSize => this.gameDataServices.loadCards(deckSize)),
    switchMap(cards => {
     return [
       new SetCards(cards),
       new GamePage(true)
     ];
    })
  );
  @Effect()
  resetCards$ = this.actions$.pipe(
    ofType(RESET_CARDS),
    switchMap(() => this.gameDataServices.loadCards()),
    switchMap(cards => {
      return [
        new ResetStatus(),
        new SetCards(cards)
      ];
    })
  );
  @Effect()
  restartGame$ = this.actions$.pipe(
    ofType(GAME_OVER),
    tap(v => this.gameDataServices.resetCards()),
    switchMap(() => {
      return [
        new ResetStatus(),
        new SetCards([]),
        new GamePage(false)
      ];
    })
  );

  /* multiple effects action v2 */
  /*@Effect()
  resetCards$ = this.actions$.pipe(
    ofType(RESET_CARDS),
    tap(v => this.store.dispatch(new ResetStatus())),
    switchMap(action => {
      return this.gameDataServices.loadCards().pipe(
        map((cards: ICard[]) => new LoadCardsCompleted(cards))
      );
    })
  );*/
}


// TODO: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#controlling-effects
//  - ofType
//  - Non-dispatching Effects
//  - Initializing effect
//  - Controlling Effects
//  - get more multiple store value

