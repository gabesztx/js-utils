import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromGame from './game.reducer';
import * as fromWord from './word.reducer';

export interface GameState {
  game: fromGame.State;
  word: fromWord.State;
}

export interface State extends fromRoot.State {
  game: GameState;
}

export const reducers: ActionReducerMap<GameState, any> = {
  game: fromGame.reducer,
  word: fromWord.reducer,
};

export const getGameState = createFeatureSelector<State, GameState>('game');
export const getWordState = createSelector(getGameState, state => state.word);
export const getSelectLetters = createSelector(getWordState, fromWord.getLetters);
// export const getSelectLetterId = createSelector(getWordState, fromWord.getLetterId);

/*export const getSelectLetterItem = createSelector(
  getSelectLetters,
  getSelectLetterId,
  (letters, id) => {
    // if (id !== null) {
    //   return [letters[id]];
    // }
    // console.log('ID');
    if (id !== null) {
      console.log('id', id);
      return id;
    }
  }
);*/
// export const getActiveItem = createSelector(getWordState, fromWord.gelLetters);
// export const getSelectedLetters = createSelector(getWordState, fromWord.gelLetters);


/*
export const selectGetBookItem = createSelector(
  selectBookState,
  selectTimerCounter,
  (book, counter) => {
    console.log('select - book', book);
    console.log('select - counter', counter);
    return counter;
    // return state.book;
  });*/
