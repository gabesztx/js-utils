import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { routerReducer, RouterReducerState, } from '@ngrx/router-store';
import { RouterStateUrl } from '../shared/utils';

import * as fromCardReducer from '../reducers/card.reducer';
import * as fromStatusReducer from '../reducers/status.reducer';
import * as fromControllerReducer from '../reducers/controller.reducer';

export interface MainState {
  // router?: RouterReducerState<RouterStateUrl>;
  cards: fromCardReducer.IState;
  status: fromStatusReducer.IState;
  controller: fromControllerReducer.IState;
}

export const reducers: ActionReducerMap<MainState> = {
  // router: routerReducer,
  cards: fromCardReducer.reducer,
  status: fromStatusReducer.reducer,
  controller: fromControllerReducer.reducer,
};

const cardState = (state: MainState) => state.cards;
const statusState = (state: MainState) => state.status;
const controllerState = (state: MainState) => state.controller;
// const routerState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

// export const getRouter = createSelector(routerState, state => state.state);
export const getCards = createSelector(cardState, fromCardReducer.getCards);
export const getMatch = createSelector(statusState, fromStatusReducer.getStatusMatch);
export const getScore = createSelector(statusState, fromStatusReducer.getStatusScore);
export const getHighScore = createSelector(statusState, fromStatusReducer.getStatusHighScore);

export const getIsStarted = createSelector(controllerState, fromControllerReducer.getControllerIsStarted);
export const getStartPage = createSelector(controllerState, fromControllerReducer.getControllerStartPage);
export const getGamePage = createSelector(controllerState, fromControllerReducer.getControllerGamePage);

