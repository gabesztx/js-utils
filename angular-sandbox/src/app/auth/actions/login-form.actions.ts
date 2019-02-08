import { Action } from '@ngrx/store';

export enum LoginFormActionTypes {
  LoadLoginForms = '[LoginForm] Load LoginForms'
}

export class LoadLoginForms implements Action {
  readonly type = LoginFormActionTypes.LoadLoginForms;
}

export type LoginFormActions = LoadLoginForms;
