// External imports
import { Action } from '@ngrx/store';
// Internal imports
import { type } from '../../utils';
import { UserInvitation } from '../../../models/user-invitation.model';

export const ActionTypes = {
    SET_USER_INVITATION_LIST: type('UserInvitations.SetList'),
    SELECT_USER_INVITATION: type('UserInvitations.Select')
};

export class ListUserInvitationsAction implements Action {
    type = ActionTypes.SET_USER_INVITATION_LIST;

    constructor(public payload: UserInvitation[]) { }
}

export class SelectUserInvitationAction implements Action {
    type = ActionTypes.SELECT_USER_INVITATION;

    constructor (public payload: UserInvitation) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UserInvitationActions
  = ListUserInvitationsAction
  | SelectUserInvitationAction;

