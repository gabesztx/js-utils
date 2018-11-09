import * as inviteEmailActions from './invite-email.actions';

export interface State {
    isActive: any;
    fileData: any;
    emailData: any;
    invitationData: any;
}

const initial_state: State = {
    isActive: null,
    fileData: null,
    emailData: '',
    invitationData: null,
};

export function reducer(state = initial_state, action: inviteEmailActions.Actions) {
    switch (action.type) {
        case inviteEmailActions.ActionTypes.UI_TOGGLE_INVITE:
            // console.log('reducer isActive: ', state);
            return Object.assign({}, state, {
                isActive: action.payload
            });
        case inviteEmailActions.ActionTypes.DATA_SET_FILE_DATA:
            // console.log('reducer fileData: ', state);
            return Object.assign({}, state, {
                fileData: action.payload
            });
        case inviteEmailActions.ActionTypes.DATA_SET_EMAIL_DATA:
            return Object.assign({}, state, {
                emailData: action.payload
            });

        case inviteEmailActions.ActionTypes.DATA_SET_INVITATION_DATA:
            return Object.assign({}, state, {
                invitationData: action.payload
            });
        default:
            return state;
    }
}

export const getInviteIsActive = (state: State) => state.isActive;
export const getInviteEmail = (state: State) => state.emailData;
export const getInviteFile = (state: State) => state.fileData;
export const getInviteInvitation = (state: State) => state.invitationData;
export const getInviteState = (state: State) => state;
