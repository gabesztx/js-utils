import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { GameActionTypes, GameActions } from '../actions/game.actions';


@Injectable()
export class GameEffects {


  @Effect()
  loadGames$ = this.actions$.pipe(
    ofType(GameActionTypes.LoadGames),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<GameActions>) {}

}
