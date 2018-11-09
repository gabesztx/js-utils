// External imports
import { Action } from '@ngrx/store';
// Internal imports
import { type } from '../../utils';
import { Course } from '../../../models/course.model'; // TODO: Invites Model

export const ActionTypes = {
    SET_INVITES_LIST: type('Invites.SetInvitesList'),
    SELECT_INVITE: type('Invites.Select')
};

export class ListInvitesAction implements Action {
    type = ActionTypes.SET_INVITES_LIST;
    constructor(public payload: Course[]) {}
}

export class InviteSelect implements Action {
    type = ActionTypes.SELECT_INVITE;
    constructor(public payload: Course) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type InvitationsActions
    = ListInvitesAction
    | InviteSelect;

