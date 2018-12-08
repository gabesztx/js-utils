import { Action } from '@ngrx/store';
import { ICard } from '../models/card.model';

export const INIT_CARDS = '[CARD] Init Cards';
export const ROTATE_CARD = '[CARD] Rotate Card';
export const RESET_CARDS = '[CARD] Reset Cards';
export const INACTIVE_CARDS = '[CARD] Inactive Cards';

export class InitCards implements Action {
  readonly type = INIT_CARDS;
  constructor(public payload: ICard[]) {}
}
export class RotateCard implements Action {
  readonly type = ROTATE_CARD;
  constructor(public payload: number) {}
}
export class ResetCards implements Action {
  readonly type = RESET_CARDS;
}
export class InactiveCards implements Action {
  readonly type = INACTIVE_CARDS;
  constructor(public payload: number) {}
}

export type Actions =
  InitCards |
  RotateCard |
  InactiveCards |
  ResetCards;
