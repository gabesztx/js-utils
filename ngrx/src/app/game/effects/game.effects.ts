import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameActionTypes } from '../actions/game.actions';

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions) {}
  @Effect()
  loadGames$ = this.actions$.pipe(ofType(GameActionTypes.LoadGames));
}
