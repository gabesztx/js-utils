import { ActionReducerMap, createSelector } from '@ngrx/store';
import { ICard } from '../models/card.model';
import * as fromCardReducer from '../reducers/card.reducer';
import * as fromControllerReducer from '../reducers/controller.reducer';

export interface MainState {
  card: ICard[];
  // controller: fromControllerReducer.IState;
}

export const reducers: ActionReducerMap<MainState> = {
  card: fromCardReducer.reducer,
  // controller: fromControllerReducer.reducer
};

// controller: fromControllerReducer.reducer
// const controllerState = (state: MainState) => state.controller;
// export const getControlller = createSelector(controllerState, fromControllerReducer.getControllerState);

const cardState = (state: MainState) => state.card;
export const getCard = createSelector(cardState, fromCardReducer.getCardState);
