import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromGame from './game.reducer';

export interface State {

  game: fromGame.State;
}

export const reducers: ActionReducerMap<State> = {

  game: fromGame.reducer,
};
