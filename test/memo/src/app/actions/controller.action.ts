import { Action } from '@ngrx/store';

export const START_GAME = '[Status] Start Game';
export const UPDATE_GAME = '[Status] Update Game';
export const FINISH_GAME = '[Status] Finish Game';

export class StartGame implements Action {
  readonly type = START_GAME;
}

export class UpdateGame implements Action {
  readonly type = UPDATE_GAME;
}

export class FinishGame implements Action {
  readonly type = FINISH_GAME;
}

export type Actions =
  StartGame |
  UpdateGame |
  FinishGame;
