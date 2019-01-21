import { Action } from '@ngrx/store';
import { ICard } from '../models/card.model';

export const LOAD_CARDS = '[CARD] Load Cards';
export const LOAD_CARDS_COMPLETED = '[CARD] Load Cards Completed';
export const CURRENT_CARD_ID = '[CARD] Current Id Card';
export const ROTATE_CARD = '[CARD] Rotate Card';
export const ISOPEN_CARD = '[CARD] IsOpen Card';
export const RESET_CARDS = '[CARD] Reset Cards';
export const INACTIVE_CARDS = '[CARD] Inactive Cards';
export const DECK_SIZE = '[CARD] Deck Size';
export const OPENED_CARD_ADD = '[CARD] Opened Card add';
export const OPENED_CARD_RESET = '[CARD] Opened Card reset';

export class LoadCards implements Action {
  readonly type = LOAD_CARDS;
}
export class LoadCardsCompleted implements Action {
  readonly type = LOAD_CARDS_COMPLETED;
  constructor(public payload: ICard[]) {}
}
export class RotateCard implements Action {
  readonly type = ROTATE_CARD;
  constructor(public payload: ICard) {}
}
export class ResetCards implements Action {
  readonly type = RESET_CARDS;
}
export class IsOpenCard implements Action {
  readonly type = ISOPEN_CARD;
  constructor(public payload: any) {}
}
export class InactiveCards implements Action {
  readonly type = INACTIVE_CARDS;
  constructor(public payload: ICard) {}
}
export class DeckSize implements Action {
  readonly type = DECK_SIZE;
  constructor(public payload: number) {}
}
export class OpenedCardAdd implements Action {
  readonly type = OPENED_CARD_ADD;
  constructor(public payload: ICard) {}
}
export class OpenedCardReset implements Action {
  readonly type = OPENED_CARD_RESET;
  constructor(public payload: ICard[]) {}
}
export class CurrentCardId implements Action {
  readonly type = CURRENT_CARD_ID;
  constructor(public payload: number) {}
}

export type Actions =
  OpenedCardAdd |
  OpenedCardReset |
  CurrentCardId |
  DeckSize |
  LoadCards |
  LoadCardsCompleted |
  RotateCard |
  IsOpenCard |
  InactiveCards |
  ResetCards;
