import { Action } from '@ngrx/store';
import { ICard } from '../models/card.model';

export const INIT_CARDS = '[CARD] Init Cards';
export const ROTATE_CARD = '[CARD] Rotate Card';
export const RESET_CARDS = '[CARD] Reset Cards';
export const STEP_CARDS = '[CARD] Step Cards';

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
export class StepCards implements Action {
  readonly type = STEP_CARDS;
}

export type Actions =
  StepCards |
  InitCards |
  RotateCard |
  ResetCards;
