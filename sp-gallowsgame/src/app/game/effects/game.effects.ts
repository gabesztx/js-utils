import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { GameActionTypes, GameActions } from '../actions/game.actions';
import { WordActionsTypes, WordActions, SetInputValue } from '../actions/word.actions';
import { of } from 'rxjs';
import { concatMap, map, switchMap, tap } from 'rxjs/operators';
import * as fromGame from '../reducers';

// import { WordsDataService } from '../../core/services/words-data.service';


@Injectable()
export class GameEffects {
  @Effect({dispatch: false})
    // @Effect()
  loadLetterData$ = this.actions$.pipe(
    ofType(WordActionsTypes.LoadLetterData),
    switchMap(value => {
      console.log('switchMap', value);
      return of(true);
    })
    // tap(val => console.log('Log:', val)),
    // map((action: any) => action.payload),
    // switchMap(value => {}),
    // return of(new SetInputValue(value));
    /*switchMap(cards => {
      return [
        new ResetStatus(),
        new SetCards(cards)
      ];
    })*/
  );

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
    private store: Store<fromGame.State>
  ) {
  }
}
