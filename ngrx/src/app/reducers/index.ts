import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from './router.reducer';

export interface State {
  router: fromRouter.RouterState;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.reducer,
};


// import { environment } from '../../environments/environment';
// export const metaReducers: MetaReducer<MainState>[] = !environment.production ? [] : [];
