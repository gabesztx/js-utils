import { Action } from '@ngrx/store';

export const ADD_COUNTER = '[Controller] Add Counter';
export const REMOVE_COUNTER = '[Controller] Remove Counter';

export class AddCounter implements Action {
  readonly type = ADD_COUNTER;
  // constructor(public payload?: number) {}
}

export class RemoveCounter implements Action {
  readonly type = REMOVE_COUNTER;
  // constructor(public payload?: number) {}
}

export type Actions =
  AddCounter |
  RemoveCounter;
