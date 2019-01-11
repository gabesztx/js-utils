import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLanding from '../landing/reducers/landing.reducer';

export interface State {

  landing: fromLanding.State;
}

export const reducers: ActionReducerMap<State> = {

  landing: fromLanding.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
