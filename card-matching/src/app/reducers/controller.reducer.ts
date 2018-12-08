import * as ControllerAction from '../actions/controller.action';

export interface IState {
  isStarted: boolean;
  isFinished: boolean;
}

const initial_state: IState = {
  isStarted: false,
  isFinished: true,
};

export function reducer(state = initial_state, action: ControllerAction.Actions) {
  switch (action.type) {
    case ControllerAction.START_GAME:
      return {
        ...state,
        isStarted: true,
        isFinished: false,
      };
    case ControllerAction.FINISH_GAME:
      return {
        ...state,
        isStarted: false,
        isFinished: true,
      };
    case ControllerAction.UPDATE_GAME:
      return {
        ...state,
        isStarted: true,
        isFinished: false,
      };
    default:
      return state;
  }
}


export const getControllerIsStarted = (state: IState) => state.isStarted;
