import { Action } from '@ngrx/store';

export const ROTATE_CARD = '[CARD] Rotate Card';

export class RotateCard implements Action {
  readonly type = ROTATE_CARD;
  constructor(public payload?: any) {}
}

export type Actions = RotateCard;
