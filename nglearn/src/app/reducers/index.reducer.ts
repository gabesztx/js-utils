import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCardReducer from '../reducers/card.reducer';
import * as fromStatusReducer from '../reducers/status.reducer';

export interface MainState {
  cards: fromCardReducer.IState;
  status: fromStatusReducer.IState;
}

export const reducers: ActionReducerMap<MainState> = {
  cards: fromCardReducer.reducer,
  status: fromStatusReducer.reducer,
};

const cardState = (state: MainState) => state.cards;
const statusState = (state: MainState) => state.status;

export const getCards = createSelector(cardState, fromCardReducer.getCards);

// export const getStatusState = createSelector(statusState, fromStatusReducer.getStatusState);

export const getStatusTime = createSelector(statusState, fromStatusReducer.getStatusTime);
export const getStatusIsStarted = createSelector(statusState, fromStatusReducer.getStatusIsStarted);
