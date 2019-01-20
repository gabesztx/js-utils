import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameDataService } from '../services/game-data.service';
import { LoadCardsCompleted } from '../actions/other.actions';
import { ICard } from '../models/card.model';
import { OtherActionTypes } from '../actions/other.actions';
import { switchMap, mergeMap, map, delay } from 'rxjs/operators';
import * as fromGame from '../reducers';

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions,
              private store: Store<fromGame.GameState>,
              private gameDataServices: GameDataService) {
  }

  @Effect()
  loadCards$ = this.actions$.pipe(
    ofType(OtherActionTypes.LoadCards),
    // mergeMap(action =>
    switchMap(action =>
      this.gameDataServices.loadCards().pipe(
        map((payload: ICard[]) => new LoadCardsCompleted(payload))
      )
    )
  );
}

// TODO video alapján unsubrscibe

