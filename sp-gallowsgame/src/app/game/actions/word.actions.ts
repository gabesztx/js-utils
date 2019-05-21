import { Action } from '@ngrx/store';

export enum WordActionsTypes {
  LoadLetterData = '[Word] Load Letter Data',
  SetInputValue = '[Word] Set Input Value',
  SetLetterHandler = '[Word] Set Letter Handler Data',
  SetLetterData = '[Word] Set Letter Data',
  SetLetter = '[Word] Set Letter',
  // SetLetterGodItem = '[Word] Set Letter God Item',
}

export class LoadLetterData implements Action {
  readonly type = WordActionsTypes.LoadLetterData;
}
export class SetLetterHandler implements Action {
  readonly type = WordActionsTypes.SetLetterHandler;
  constructor(public payload: any) {}
}
export class SetInputValue implements Action {
  readonly type = WordActionsTypes.SetInputValue;
  constructor(public payload: any) {}
}
export class SetLetterData implements Action {
  readonly type = WordActionsTypes.SetLetterData;
  constructor(public payload: any) {}
}
export class SetLetter implements Action {
  readonly type = WordActionsTypes.SetLetter;
  constructor(public payload: any) {}
}
/*
export class SetLetterGodItem implements Action {
  readonly type = WordActionsTypes.SetLetterGodItem;
  constructor(public payload: any) {}
}
*/

export type WordActions =
  | LoadLetterData
  | SetLetterHandler
  | SetLetterData
  | SetLetter
  // | SetLetterGodItem
  | SetInputValue;
