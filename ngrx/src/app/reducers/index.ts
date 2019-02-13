import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router.reducer';
import * as fromUser from './user.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  user: fromUser.UserState;
  // router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  user: fromUser.reducer,
};


/**
 * Using a selector for one piece of state
 */


// export const selectCardState = (state: GameState) => state.card;
// export const selectCardCards = createSelector(selectGameState, fromCard.getCards);
// export const selectCardCards = createSelector(selectCardState, (state: any) => state);
// console.log('cardState', );

// import * as fromRouter from './router.reducer';
// import { environment } from '../../environments/environment';
// export const metaReducers: MetaReducer<MainState>[] = !environment.production ? [] : [];
