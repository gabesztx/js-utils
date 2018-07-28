import * as inviteEmailActions from './invite-email.actions';
export interface State {
    isActive: any;
    fileData: any;
    emailData: any;
}

const initial_state: State = {
    isActive: null,
    fileData: null,
    emailData: null,
};

export function reducer(state = initial_state, action: inviteEmailActions.Actions) {
    switch (action.type) {
        case inviteEmailActions.ActionTypes.UI_TOGGLE_INVITE:
            return Object.assign({}, state, {
                isActive: action.payload
            });
        case inviteEmailActions.ActionTypes.DATA_SET_FILE_DATA:
            return Object.assign({}, state, {
                fileData: action.payload
            });
        case inviteEmailActions.ActionTypes.DATA_SET_EMAIL_DATA:
            return Object.assign({}, state, {
                emailData: action.payload
            });
        default:
            return state;
    }
}

export const getInviteIsActive = (state: State) => state.isActive;
export const getInviteState = (state: State) => state;
