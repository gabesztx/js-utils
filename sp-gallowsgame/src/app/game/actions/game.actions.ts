import { Action } from '@ngrx/store';

export enum GameActionTypes {
  LoadData = '[Game] Load Word Data',
}

export class LoadData implements Action {
  readonly type = GameActionTypes.LoadData;
}


export type GameActions = LoadData;
