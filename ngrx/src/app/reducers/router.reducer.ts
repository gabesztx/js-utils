import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';
import * as RouterAction from '../actions/router.actions';


export interface RouterState {
  path: any[];
  params?: object;
  extras?: NavigationExtras;
}

export const initialState: RouterState = {
  path: []
};

export function reducer(state = initialState, action: Action): RouterState {
  switch (action.type) {
    /*case RouterAction.RouterActionTypes.RouteChange:
      return {
        ...state
      };*/
    default:
      return state;
  }
}
