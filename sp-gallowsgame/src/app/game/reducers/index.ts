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

