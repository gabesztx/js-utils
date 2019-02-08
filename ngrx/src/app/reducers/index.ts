import * as fromRouter from '@ngrx/router-store';
// import * as fromRouter from './router.reducer';
import { RouterStateUrl } from './router.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  // router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};


// import { environment } from '../../environments/environment';
// export const metaReducers: MetaReducer<MainState>[] = !environment.production ? [] : [];
