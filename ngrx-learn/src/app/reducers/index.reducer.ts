import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as fromControllerState from '../reducers/controller.reducer';


export interface MainState {
  controller: fromControllerState.State;
}
export const reducers: ActionReducerMap<MainState> = {
  controller: fromControllerState.reducer
};


const controllerState = (state: MainState) => state.controller;
export const getControlllerState = createSelector(controllerState, fromControllerState.getControllerState);
