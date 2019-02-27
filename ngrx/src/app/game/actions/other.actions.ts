import { Action } from '@ngrx/store';
import { ICard } from '../models/card.model';

export enum OtherActionTypes {
  LoadCards = '[Other] Load Cards',
  LoadCardsCompleted = '[Other] Load Cards Completed',
}

export class LoadCards implements Action {
  readonly type = OtherActionTypes.LoadCards;
}

export class LoadCardsCompleted implements Action {
  readonly type = OtherActionTypes.LoadCardsCompleted;
  constructor(public payload: ICard[]) {
  }
}

export type Actions =
  | LoadCards
  | LoadCardsCompleted;
