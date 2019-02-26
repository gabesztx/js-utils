import * as fromRouter from '@ngrx/router-store';
import {
  ActivatedRouteSnapshot,
  Params,
  RouterStateSnapshot
} from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot) {
    const {url, root: {queryParams}} = routerState;
    let route: ActivatedRouteSnapshot = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const {params} = route;
    return {url, params, queryParams};
  }
}


/*
// import { Action } from '@ngrx/store';
// import { NavigationExtras } from '@angular/router';
// import * as RouterAction from '../actions/router.actions';
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
    /!*case RouterAction.RouterActionTypes.RouteChange:
      return {
        ...state
      };*!/
    default:
      return state;
  }
}
*/
