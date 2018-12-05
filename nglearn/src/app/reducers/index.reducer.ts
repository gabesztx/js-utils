import { ActionReducerMap, createSelector } from '@ngrx/store';
import { ICard } from '../models/card.model';
import * as fromCardReducer from '../reducers/card.reducer';

export interface MainState {
  cards: fromCardReducer.IState;
}

export const reducers: ActionReducerMap<MainState> = {
  cards: fromCardReducer.reducer,
};

const cardState = (state: MainState) => state.cards;
export const getCard = createSelector(cardState, fromCardReducer.getCardState);
