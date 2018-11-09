import * as selectdropDownActions from './selectdropDown.actions';

export interface State {
    add: boolean;
    remove: boolean;
}

const initial_state: State = {
    add: null,
    remove: null
};

export function reducer(state = initial_state, action: selectdropDownActions.SelectdropDownActions) {
    switch (action.type) {
        case selectdropDownActions.ActionTypes.ADD:
            return Object.assign({}, state, {
                add: action.payload
            });
        case selectdropDownActions.ActionTypes.REMOVE:
            return Object.assign({}, state, {
                remove: action.payload
            });
        default:
            return state;
    }
}

export const getDropDownAdd = (state: State) => state.add;
export const getDropDownRemove = (state: State) => state.remove;
export const getDropDownState = (state: State) => state;
