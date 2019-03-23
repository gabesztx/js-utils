import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromGame from './game.reducer';
import * as fromRoot from '../../reducers';

export interface GameState {
  game: fromGame.State;
}

export interface State extends fromRoot.State {
  game: GameState;
}

export const reducers: ActionReducerMap<GameState, any> = {
  game: fromGame.reducer,
};

