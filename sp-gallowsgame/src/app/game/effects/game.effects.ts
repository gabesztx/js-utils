import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { GameActionTypes, GameActions } from '../actions/game.actions';
import { WordActionsTypes, SetLetterData, SetInputValue, SetLetter } from '../actions/word.actions';
import * as fromGame from '../reducers';
import { WordsDataService } from '../../core/services/words-data.service';
import { of } from 'rxjs';
import { concatMap, map, switchMap, take, tap } from 'rxjs/operators';


@Injectable()
export class GameEffects {
  // @Effect({dispatch: false})
  @Effect()
  loadLetterData$ = this.actions$.pipe(
    ofType(WordActionsTypes.LoadLetterData),
    switchMap(() => of(this.wordsDataService.getLetters())),
    switchMap(letter => of(new SetLetterData(letter))),
  );

  @Effect({dispatch: false})
    // @Effect()
  letterValueHandler$ = this.actions$.pipe(
    ofType(WordActionsTypes.SetLetterHandler),
    switchMap((action: any) => of(new SetInputValue(action.payload))),
    switchMap((action: any) => this.store.pipe(
      select(fromGame.getSelectLetterItem),
      map(item => [item, action.payload])
    )),
    switchMap((data: any) => this.wordsDataService.isLetterMatches(data[0], data[1])),
    // TODO: innét folytatjuk!!!!! a szerviznek ledobjuk az értéket majd megvizsgálja
    // tap(x => console.log('LOG', x)),
    /*switchMap(letter => {
      // console.log('letter', letter);
      // return of(true);
      return of(letter);
    }),*/
    // switchMap(action => this.store.pipe(select(fromGame.getSelectInputValue))),
  );
  /*@Effect()
    // tap(letter => { this.store.dispatch(new SetInputValue(letter))}),
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
    private wordsDataService: WordsDataService,
    private store: Store<fromGame.State>
  ) {
  }
}


// map((action: any) => action.payload),
// switchMap(value => {}),
// return of(new SetInputValue(value));
/*switchMap(cards => {
  return [
    new ResetStatus(),
    new SetCards(cards)
  ];
})*/
