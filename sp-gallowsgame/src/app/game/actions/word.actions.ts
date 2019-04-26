import { Action } from '@ngrx/store';

export enum WordActionsTypes {
  LoadLetters = '[Word] Load Letters Data',
  SetActiveLetter = '[Word] Set Active Letter',
  GetLetterItem = '[Word] Get Letter Item',
}

export class LoadLetters implements Action {
  readonly type = WordActionsTypes.LoadLetters;
}

export class SetActiveItem implements Action {
  readonly type = WordActionsTypes.SetActiveLetter;
  constructor(public payload: any) {}
}

export type Actions =
  | LoadLetters
  | SetActiveItem;
