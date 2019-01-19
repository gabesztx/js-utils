import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCard from './card.reducer';

export interface State {
  card: fromCard.IState;
}

export const reducers: ActionReducerMap<State> = {
  card: fromCard.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
