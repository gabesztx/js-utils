import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

// import * as fromRoot from '../../reducers';
import * as fromCard from './card.reducer';

// import * as fromCard from '../actions/card.actions';


export interface GameState {
  card: fromCard.IState;
}

/*
export interface State extends fromRoot.State {
  game: GameState;
}*/
export const reducers: ActionReducerMap<GameState> = {
  card: fromCard.reducer,
};

// Game State Selector
export const selectGameState = createFeatureSelector<GameState>('game');

// Game Card State Selector
export const selectGameCardState = createSelector(selectGameState,
  (state: GameState) => state.card);
export const getDeckSize = createSelector(selectGameCardState, fromCard.getDeckSize);
export const getCards = createSelector(selectGameCardState, fromCard.getCards);

