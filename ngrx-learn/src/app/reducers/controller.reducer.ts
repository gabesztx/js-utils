import * as Controller from '../actions/controller.action';

export interface State {
  counterValue: number;
}

const initial_state: State = {
  counterValue: 0
};

export function reducer(state = initial_state, action: Controller.Actions) {
  switch (action.type) {
    case Controller.ADD_COUNTER:
      return Object.assign({}, state, {
        counterValue: state.counterValue + 1
      });
    case Controller.REMOVE_COUNTER:
      return Object.assign({}, state, {
        counterValue: state.counterValue - 1
      });
    default:
      return state;
  }
}

export const getControllerState = (state: State) => state;
