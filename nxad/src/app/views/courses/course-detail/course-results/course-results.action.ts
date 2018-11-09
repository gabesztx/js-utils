// External imports
import { Action } from '@ngrx/store';
// Internal imports
import { type } from '../../../../shared/utils';

export const ActionTypes = {
    SELECT_ROW: type('SelectCourseResult.SelectRow'),
};

export class SelectRow implements Action {
    type = ActionTypes.SELECT_ROW;
    constructor(public payload: any) {}
}

export type SelectCourseResultAction = SelectRow;


