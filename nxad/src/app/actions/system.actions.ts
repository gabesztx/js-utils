import { Action } from '@ngrx/store';
import { type } from '../shared/utils';

export const ActionTypes = {
    SET_SYSTEM_READYSTATE: type('System.Set.ReadyState'),
};

export class SetSystemReadyStateAction implements Action {
    type = ActionTypes.SET_SYSTEM_READYSTATE;
    constructor(public payload: boolean) { }
}

export type SystemActions = SetSystemReadyStateAction;

