import { Action } from '@ngrx/store';
export enum UserActionTypes {
  UserName = '[User] Name',
  UserId = '[User] Id',
}

export class UserName implements Action {
  readonly type = UserActionTypes.UserName;
}

export class UserId implements Action {
  readonly type = UserActionTypes.UserId;
  // constructor(public payload: ICard[]) {}
}

export type Actions =
  | UserName
  | UserId;

