import { Action } from '@ngrx/store';

export enum RouterActionTypes {
  LoadRouters = '[Router] Load Routers',
}

export class LoadRouters implements Action {
  readonly type = RouterActionTypes.LoadRouters;
}


export type RouterActions = LoadRouters;
