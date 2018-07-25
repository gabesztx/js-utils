import { Action } from '@ngrx/store';

export const ADD_NUMBER =   'Add';
export const REMOVE_NUMBER =  'Remove';
export const ADD_ID =  'Add Id';
export const REMOVE_ID =  'Remove Id';


export class AddNumberAction implements Action {
  readonly type = ADD_NUMBER;
}

export class RemoveNumberAction implements Action {
  readonly type = REMOVE_NUMBER;
}

export class AddIdNumberAction implements Action {
  readonly type = ADD_ID;
}

export class RemoveIdNumberAction implements Action {
  readonly type = REMOVE_ID;
}


export type Actions =
  AddNumberAction |
  AddIdNumberAction |
  RemoveIdNumberAction |
  RemoveNumberAction;
