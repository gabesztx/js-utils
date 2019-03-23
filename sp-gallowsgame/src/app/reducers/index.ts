import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromGame from '../game/reducers/game.reducer';

export interface State {

  game: fromGame.State;
}

export const reducers: ActionReducerMap<State> = {

  game: fromGame.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
