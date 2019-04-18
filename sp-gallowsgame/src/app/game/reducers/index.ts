import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

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

export const getSelectedLetters = createSelector(getWordState, fromWord.gelLetters);
export const getActiveItem = createSelector(getWordState, fromWord.gelLetters);
// export const getSelectedLetters = createSelector(getWordState, fromWord.gelLetters);
