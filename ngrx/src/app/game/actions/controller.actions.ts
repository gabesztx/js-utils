import { Action } from '@ngrx/store';

export const START_GAME = '[CONTROLLER] Start Game';
export const UPDATE_GAME = '[CONTROLLER] Update Game';
export const FINISH_GAME = '[CONTROLLER] Finish Game';
export const GAME_OVER = '[CONTROLLER] Game Over';
export const GAME_PAGE = '[CONTROLLER] Game Page';

export class StartGame implements Action {
  readonly type = START_GAME;
}
export class UpdateGame implements Action {
  readonly type = UPDATE_GAME;
}
export class FinishGame implements Action {
  readonly type = FINISH_GAME;
}
export class GameOver implements Action {
  readonly type = GAME_OVER;
}
export class GamePage implements Action {
  readonly type = GAME_PAGE;
  constructor(public payload: boolean) {}
}
export type Actions =
  GamePage |
  StartGame |
  UpdateGame |
  GameOver |
  FinishGame;
