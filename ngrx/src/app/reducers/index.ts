import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from './router.reducer';

export interface MainState {

  router: fromRouter.State;
}

export const reducers: ActionReducerMap<MainState> = {

  router: fromRouter.reducer,
};


// import { environment } from '../../environments/environment';
// export const metaReducers: MetaReducer<MainState>[] = !environment.production ? [] : [];
