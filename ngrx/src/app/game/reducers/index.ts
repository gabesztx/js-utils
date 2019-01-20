import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';


import * as fromCard from './card.reducer';
import * as fromController from './controller.reducer';
import * as fromStatus from './status.reducer';
import * as fromOther from './other.reducer';

export interface GameState {
  card: fromCard.IState;
  controller: fromController.IState;
  status: fromStatus.IState;
  other: fromOther.IState;
}

export const reducers: ActionReducerMap<GameState> = {
  card: fromCard.reducer,
  controller: fromController.reducer,
  status: fromStatus.reducer,
  other: fromOther.reducer,
};

// Game State Selector
export const selectGameState = createFeatureSelector<GameState>('game');

// Game Card Selector
export const selectGameCardState = createSelector(selectGameState,
  (state: GameState) => state.card);
export const getDeckSize = createSelector(selectGameCardState, fromCard.getDeckSize);
export const getCards = createSelector(selectGameCardState, fromCard.getCards);
export const getOpened = createSelector(selectGameCardState, fromCard.getCardsOpen);
// ------------------------------------------------------------------------

// Game Controller Selector
export const selectGameControllerState = createSelector(selectGameState,
  (state: GameState) => state.controller);
export const getIsStarted = createSelector(selectGameControllerState, fromController.getControllerIsStarted);
export const getGamePage = createSelector(selectGameControllerState, fromController.getControllerGamePage);
// ------------------------------------------------------------------------

// Game Status Selector
export const selectGameStatusState = createSelector(selectGameState,
  (state: GameState) => state.status);
export const getMatch = createSelector(selectGameStatusState, fromStatus.getStatusMatch);
export const getScore = createSelector(selectGameStatusState, fromStatus.getStatusScore);
export const getHighScore = createSelector(selectGameStatusState, fromStatus.getStatusHighScore);
// ------------------------------------------------------------------------

// Game Other Selector
export const selectGameOtherState = createSelector(selectGameState,
  (state: GameState) => state.other);
export const getLoadCards = createSelector(selectGameOtherState, fromOther.getCards);
export const getIsLoading = createSelector(selectGameOtherState, fromOther.getIsLoading);
