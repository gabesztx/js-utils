import { Action } from '@ngrx/store';

export enum WordActionsTypes {
  LoadLetterData = '[Word] Load Letter Data',
  SetLetterData = '[Word] Set Letter Data',
  SetLetterValue = '[Word] Set Letter Value',
  SetInputValue = '[Word] Set Input Value',
}

export class LoadLetterData implements Action {
  readonly type = WordActionsTypes.LoadLetterData;
}

export class SetLetterData implements Action {
  readonly type = WordActionsTypes.SetLetterData;
  constructor(public payload: any) {}
}

export class SetLetterValue implements Action {
  readonly type = WordActionsTypes.SetLetterValue;
  constructor(public payload: any) {}
}

export class SetInputValue implements Action {
  readonly type = WordActionsTypes.SetInputValue;

  constructor(public payload: any) {
  }
}

export type WordActions =
  | LoadLetterData
  | SetLetterData
  | SetLetterValue
  | SetInputValue;
