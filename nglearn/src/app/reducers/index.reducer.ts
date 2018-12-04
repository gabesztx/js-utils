import { ActionReducerMap, createSelector } from '@ngrx/store';
import { ICard } from '../models/card.model';
import * as fromCardReducer from '../reducers/card.reducer';

export interface MainState {
  card: ICard[];
}

export const reducers: ActionReducerMap<MainState> = {
  card: fromCardReducer.reducer,
};

const cardState = (state: MainState) => state.card;
export const getCard = createSelector(cardState, fromCardReducer.getCardState);
