import { Action } from '@ngrx/store';

export enum WordActionsTypes {
  LoadLetters = '[Word] Load Letters Data',
  SelectLetter = '[Word] Select Letter',
  SetInputValue = '[Word] Set Input Value',
}

export class LoadLetters implements Action {
  readonly type = WordActionsTypes.LoadLetters;
}

export class SelectLetter implements Action {
  readonly type = WordActionsTypes.SelectLetter;
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
  | SelectLetter
  | SetInputValue;
