import { Action } from '@ngrx/store';
import { type } from '../../../../shared/utils';

export const ActionTypes = {
    UI_TOGGLE_INVITE: type('UI.ToggleInvite'),
    DATA_SET_FILE_DATA: type('Data.SetFileData'),
    DATA_SET_EMAIL_DATA: type('Data.SetEmailData'),
    DATA_SET_INVITATION_DATA: type('Data.SetInvitation'),
};

export class ToggleInviteActive implements Action {
    type = ActionTypes.UI_TOGGLE_INVITE;
    constructor(public payload: any) {}
}

export class SetFileData implements Action {
    type = ActionTypes.DATA_SET_FILE_DATA;
    constructor(public payload: any) {}
}

export class SetEmailData implements Action {
    type = ActionTypes.DATA_SET_EMAIL_DATA;
    constructor(public payload: any) {}
}

export class SetInvitationData implements Action {
    type = ActionTypes.DATA_SET_INVITATION_DATA;
    constructor(public payload: any) {}
}

export type Actions = ToggleInviteActive | SetFileData | SetEmailData | SetInvitationData;
