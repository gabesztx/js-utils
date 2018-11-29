import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as fromControllerReducer from '../reducers/controller.reducer';

export interface MainState {
  controller: fromControllerReducer.IState;
}

export const reducers: ActionReducerMap<MainState> = {
  controller: fromControllerReducer.reducer
};

const controllerState = (state: MainState) => state.controller;
export const getControlller = createSelector(controllerState, fromControllerReducer.getControllerState);
