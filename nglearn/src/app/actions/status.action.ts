import { Action } from '@ngrx/store';

export const START_GAME = '[Status] Start Game';
export const END_GAME = '[Status] End Game';
export const TIME_UPDATE = '[Status] Time Update';
export const SCORE_UPDATE = '[Status] Score Update';
export const MATCH_UPDATE = '[Status] Match Update';

export class StartGame implements Action {
  readonly type = START_GAME;
}
export class EndGame implements Action {
  readonly type = END_GAME;
}
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
  constructor(public payload: number) {}
}

export type Actions =
  MatchUpdate |
  TimeUpdate |
  ScoreUpdate |
  StartGame |
  EndGame;
