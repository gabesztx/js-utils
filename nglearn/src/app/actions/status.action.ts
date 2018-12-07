import { Action } from '@ngrx/store';

export const TIME_UPDATE = '[Status] Time Update';
export const SCORE_UPDATE = '[Status] Score Update';
export const MATCH_UPDATE = '[Status] Match Update';
export const RESET_STATUS = '[Status] Reset Status';

export class TimeUpdate implements Action {
  readonly type = TIME_UPDATE;
  constructor(public payload: number) {}
}
export class ScoreUpdate implements Action {
  readonly type = SCORE_UPDATE;
  constructor(public payload: number) {}
}
export class MatchUpdate implements Action {
  readonly type = MATCH_UPDATE;
}
export class ResetStatus implements Action {
  readonly type = RESET_STATUS;
}

export type Actions =
  MatchUpdate |
  TimeUpdate |
  ResetStatus |
  ScoreUpdate;
