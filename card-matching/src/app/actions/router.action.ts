import { Action } from '@ngrx/store';

export class RouterGo implements Action {
  readonly type = '[Router] Go';

  constructor(public payload: { path: any[], queryParams?: object }) {
  }
}

export type Actions = RouterGo
