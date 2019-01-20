import { Action } from '@ngrx/store';

export enum OtherActionTypes {
  LoadCards = '[Other] Load Cards',
  LoadCardsCompleted = '[Other] Load Cards Completed',
}

export class LoadCards implements Action {
  readonly type = OtherActionTypes.LoadCards;
}

export class LoadCardsCompleted implements Action {
  readonly type = OtherActionTypes.LoadCardsCompleted;
  constructor(public payload: any) {}
}

export type Actions =
  | LoadCards
  | LoadCardsCompleted;
