import { Action } from '@ngrx/store';

export enum WordActionsTypes {
  LoadLetters = '[Word] Load Letters Data',
  SetLetterValue = '[Word] Set Letter Value',
  SetLetter = '[Word] Set Letter',
  SetInputValue = '[Word] Set Input Value',
}

export class LoadLetters implements Action {
  readonly type = WordActionsTypes.LoadLetters;
}

export class SetLetterValue implements Action {
  readonly type = WordActionsTypes.SetLetterValue;
  constructor(public payload: any) {}
}
export class SetLetter implements Action {
  readonly type = WordActionsTypes.SetLetter;
  constructor(public payload: any) {}
}

export class SetInputValue implements Action {
  readonly type = WordActionsTypes.SetInputValue;
  constructor(public payload: any) {
  }
}

export type WordActions =
  | LoadLetters
  | SetLetterValue
  | SetLetter
  | SetInputValue;
