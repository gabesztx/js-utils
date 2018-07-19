import { Action } from '@ngrx/store';

export const ADD_NUMBER =   'Add';
export const REMOVE_NUMBER =  'Remove';


export class AddNumberAction implements Action {
  readonly type = ADD_NUMBER;
}

export class RemoveNumberAction implements Action {
  readonly type = REMOVE_NUMBER;
}


export type Actions = AddNumberAction | RemoveNumberAction;
