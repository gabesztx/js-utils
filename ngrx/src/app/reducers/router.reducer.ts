import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';


export interface RouterState {
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}

export const initialState: RouterState = {
  path: []
};

export function reducer(state = initialState, action: Action): RouterState {
  switch (action.type) {
    default:
      return state;
  }
}
