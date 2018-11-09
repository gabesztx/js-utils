// External imports
import { createSelector } from '@ngrx/store';
// Internal imports
import * as userInvitationActions from './user-invitation.actions';
import { UserInvitation } from '../../../models/user-invitation.model';
// State interface of the reducer.
export interface State {
    ids: string[];
    entities: { [id: string]: UserInvitation };
    selectedEntity: UserInvitation;
}
// The initial state for the reducer.
const initial_state: State = {
    ids: [],
    entities: {},
    selectedEntity: null
};
// Reducer function
export function reducer(state = initial_state, action: userInvitationActions.UserInvitationActions) {

    switch (action.type) {
        case userInvitationActions.ActionTypes.SET_USER_INVITATION_LIST:
            const userInvitations: UserInvitation[] = <UserInvitation[]>action.payload;
            const ids: string[] = userInvitations.map(c => c.id);
            const entities = userInvitations.reduce((uis: { [id: string]: UserInvitation }, ui: UserInvitation) => {
                return Object.assign(uis, {
                    [ui.id]: ui
                });
            }, {});

            return Object.assign({}, state, {
                ids: ids,
                entities: entities
            });
        case userInvitationActions.ActionTypes.SELECT_USER_INVITATION:
            const userInvitation = <UserInvitation>action.payload;
            return Object.assign({}, state, {
                selectedEntity: userInvitation
            });
        default:
            return state;
    }
}

export const getUserInvitationEntities = (state: State) => state.entities;

export const getUserInvitationIds = (state: State) => state.ids;

export const getSelecteUserInvitation = (state: State) => state.selectedEntity;

export const getAllUserInvitations = createSelector(getUserInvitationEntities, getUserInvitationIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});

