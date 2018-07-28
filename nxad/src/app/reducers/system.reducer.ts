// Internal imports
import * as systemAction from '../actions/system.actions';

// State interface of the reducer.
export interface State {
    readyState: boolean;
}

// The initial state for the reducer.
const initial_state: State = {
    readyState: false
};

// Reducer function
export function reducer(state = initial_state, action: systemAction.SystemActions) {
    switch (action.type) {
        case systemAction.ActionTypes.SET_SYSTEM_READYSTATE:
            return Object.assign({}, state, {
                readyState: action.payload
            });
        default:
            return state;
    }
}

export const getSystemReadyState = (state: State) => state.readyState;
