import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
// import * as fromRouter from './router.reducer';
import * as fromRouter from '@ngrx/router-store';

export interface State {
  // router: fromRouter.RouterState;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};


// import { environment } from '../../environments/environment';
// export const metaReducers: MetaReducer<MainState>[] = !environment.production ? [] : [];
