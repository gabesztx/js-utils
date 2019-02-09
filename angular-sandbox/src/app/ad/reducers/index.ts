import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromAd from './ad.reducer';

export interface State {
  ad: fromAd.AdState;
}

export const reducers: ActionReducerMap<State> = {
  ad: fromAd.reducer,
};


// import { environment } from '../../environments/environment';
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
