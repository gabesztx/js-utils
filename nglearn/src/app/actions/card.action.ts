import { Action } from '@ngrx/store';
import { ICard } from '../models/card.model';

export const INIT_CARDS = '[CARD] Init Cards';
export const ROTATE_CARD = '[CARD] Rotate Card';
export const RESET_CARDS = '[CARD] Reset Card';

export class InitCards implements Action {
  readonly type = INIT_CARDS;
  constructor(public payload: ICard[]) {}
}

export class RotateCard implements Action {
  readonly type = ROTATE_CARD;
  constructor(public payload: ICard) {}
}

export class ResetCards implements Action {
  readonly type = RESET_CARDS;
}

export type Actions = InitCards | RotateCard | ResetCards;
