import { Action } from '@ngrx/store';

export enum WordActionsTypes {
  LoadLetters = '[Word] Load Letters Data',
  SetActiveItem = '[Word] Set Active Item',
}

export class LoadLetters implements Action {
  readonly type = WordActionsTypes.LoadLetters;
}

export class SetActiveItem implements Action {
  readonly type = WordActionsTypes.SetActiveItem;
  constructor(public payload: any) {}
}

export type Actions =
  | LoadLetters
  | SetActiveItem;
