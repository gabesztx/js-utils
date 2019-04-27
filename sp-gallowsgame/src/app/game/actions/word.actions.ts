import { Action } from '@ngrx/store';

export enum WordActionsTypes {
  LoadLetters = '[Word] Load Letters Data',
  SetActiveLetter = '[Word] Set Active Letter',
  SetInputValue = '[Word] Set Input Value',
}

export class LoadLetters implements Action {
  readonly type = WordActionsTypes.LoadLetters;
}

export class SetActiveItem implements Action {
  readonly type = WordActionsTypes.SetActiveLetter;
  constructor(public payload: any) {
  }
}

export class SetInputValue implements Action {
  readonly type = WordActionsTypes.SetInputValue;
  constructor(public payload: string) {
  }
}

export type WordActions =
  | LoadLetters
  | SetActiveItem
  | SetInputValue;
