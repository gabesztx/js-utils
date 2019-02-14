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
import * as fromBook from './book.reducer';

export interface State {
  // router: fromRouter.RouterReducerState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  user: fromUser.UserState;
  book: fromBook.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  user: fromUser.reducer,
  book: fromBook.reducer,
};


/**
 * Using a selector for one piece of state
 */


export const selectUserState = (state: State) => state.user;
export const selectUserName = createSelector(selectUserState, fromUser.getUserName);
export const selectUserId = createSelector(selectUserState, fromUser.getUserId);
// export const selectCardCards = createSelector(selectCardState, (state: any) => state);
// console.log('cardState', );

// import * as fromRouter from './router.reducer';
// import { environment } from '../../environments/environment';
// export const metaReducers: MetaReducer<MainState>[] = !environment.production ? [] : [];
