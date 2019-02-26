import { Action } from '@ngrx/store';

export const SCORE_UPDATE = '[STATUS] Score Update';
export const MATCH_UPDATE = '[STATUS] Match Update';
export const HIGHSCORE_UPDATE = '[STATUS] High Score Update';
export const RESET_STATUS = '[STATUS] Reset Status';

export class ScoreUpdate implements Action {
  readonly type = SCORE_UPDATE;
}
export class MatchUpdate implements Action {
  readonly type = MATCH_UPDATE;
}
export class ResetStatus implements Action {
  readonly type = RESET_STATUS;
}
export class HighScroreUpdate implements Action {
  readonly type = HIGHSCORE_UPDATE;
}

export type Actions =
  HighScroreUpdate |
  MatchUpdate |
  ResetStatus |
  ScoreUpdate;
