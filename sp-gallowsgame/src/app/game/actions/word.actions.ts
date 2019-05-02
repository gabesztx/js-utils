import { Action } from '@ngrx/store';

export enum WordActionsTypes {
  LoadLetterData = '[Word] Load Letter Data',
  SetLetterValue = '[Word] Set Letter Value',
  SetLetter = '[Word] Set Letter',
  SetInputValue = '[Word] Set Input Value',
}

export class LoadLetterData implements Action {
  readonly type = WordActionsTypes.LoadLetterData;
}

export class SetLetterValue implements Action {
  readonly type = WordActionsTypes.SetLetterValue;

  constructor(public payload: any) {
  }
}

export class SetLetter implements Action {
  readonly type = WordActionsTypes.SetLetter;

  constructor(public payload: any) {
  }
}

export class SetInputValue implements Action {
  readonly type = WordActionsTypes.SetInputValue;

  constructor(public payload: any) {
  }
}

export type WordActions =
  | LoadLetterData
  | SetLetterValue
  | SetLetter
  | SetInputValue;
