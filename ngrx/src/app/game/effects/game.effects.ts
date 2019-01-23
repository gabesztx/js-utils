import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameDataService } from '../services/game-data.service';
import { ICard } from '../models/card.model';
import { LOAD_CARDS, LoadCardsCompleted } from '../actions/card.actions';
import { switchMap, mergeMap, map, delay, tap, startWith } from 'rxjs/operators';
import * as fromGame from '../reducers';
import { of, timer } from 'rxjs';

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions,
              private store: Store<fromGame.GameState>,
              private gameDataServices: GameDataService) {
  }

  @Effect()
  loadCards$ = this.actions$.pipe(
    ofType(LOAD_CARDS),
    // mergeMap(action =>
    tap(x1 => console.log('Load Cards')),
    // delay(3000),
    startWith(),
    tap(x1 => console.log('loaded: ', x1)),
    switchMap(action => {
        console.log('SwitchMap: ', action);
        return this.gameDataServices.loadCards().pipe(
          map((payload: ICard[]) => new LoadCardsCompleted(payload))
        );
      }
    )
  );

  /*loadCards$ = this.actions$.pipe(
    ofType(OtherActionTypes.LoadCards),
    // mergeMap(action =>
    switchMap(action =>
      this.gameDataServices.loadCards().pipe(
        map((payload: ICard[]) => new LoadCardsCompleted(payload))
      )
    )
  );*/
}

// TODO video alapján unsubrscibe

