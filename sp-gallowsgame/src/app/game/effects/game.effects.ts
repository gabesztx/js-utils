import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concatMap } from 'rxjs/operators';
import { GameActionTypes, GameActions } from '../actions/game.actions';
import { WordActionsTypes, WordActions } from '../actions/word.actions';
// import { WordsDataService } from '../../core/services/words-data.service';


@Injectable()
export class GameEffects {
  /*@Effect()
  loadGames$ = this.actions$.pipe(
    ofType(GameActionTypes.LoadData),
    // concatMap(() => EMPTY)
  );*/
/*  @Effect()
  inputHandler$ = this.actions$.pipe(
    // ofType(WordActionsTypes),
    // concatMap(() => EMPTY)
  );*/


  constructor(
    private actions$: Actions<GameActions>,
    ) {
  }
}
