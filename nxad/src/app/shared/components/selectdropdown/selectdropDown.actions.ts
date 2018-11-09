// External imports
import { Action } from '@ngrx/store';
// Internal imports
import { type } from '../../utils';

export const ActionTypes = {
    ADD: type('DropDownSelect.Add'),
    REMOVE: type('DropDownSelect.Remove')
};

export class DropDownAdd implements Action {
    type = ActionTypes.ADD;
    constructor(public payload: any) {}
}

export class DropDownRemove implements Action {
    type = ActionTypes.REMOVE;
    constructor(public payload: any) {}
}
export type SelectdropDownActions
    = DropDownAdd
    | DropDownRemove;

