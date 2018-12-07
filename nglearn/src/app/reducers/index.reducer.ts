import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCardReducer from '../reducers/card.reducer';
import * as fromStatusReducer from '../reducers/status.reducer';
import * as fromControllerReducer from '../reducers/controller.reducer';

export interface MainState {
  cards: fromCardReducer.IState;
  status: fromStatusReducer.IState;
  controller: fromControllerReducer.IState;
}
export const reducers: ActionReducerMap<MainState> = {
  cards: fromCardReducer.reducer,
  status: fromStatusReducer.reducer,
  controller: fromControllerReducer.reducer,
};
const cardState = (state: MainState) => state.cards;
const statusState = (state: MainState) => state.status;
const controllerState = (state: MainState) => state.controller;

export const getCards = createSelector(cardState, fromCardReducer.getCards);

export const getTime = createSelector(statusState, fromStatusReducer.getStatusTime);
export const getMatch = createSelector(statusState, fromStatusReducer.getStatusMatch);

export const getIsStarted = createSelector(controllerState, fromControllerReducer.getControllerIsStarted);
export const getIsFinished = createSelector(controllerState, fromControllerReducer.getControllerIsFinished);

