import { Action } from '@ngrx/store';

export enum TimeActionTypes {
  Counter = '[Time] Counter',
  AddCounter = '[Time] Add Counter',

}

export class Counter implements Action {
  readonly type = TimeActionTypes.Counter;
  // constructor(public payload: number) {}
}

export class AddCounter implements Action {
  readonly type = TimeActionTypes.AddCounter;
  constructor(public payload?: number) {
  }
}


export type Actions =
  Counter |
  AddCounter;
