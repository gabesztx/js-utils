import * as ControllerAction from '../actions/controller.actions';

export interface IState {
  gamePage: boolean;
  isStarted: boolean;
  isFinished: boolean;
}

const initial_state: IState = {
  gamePage: false,
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
    case ControllerAction.GAME_PAGE:
      return {
        ...state,
        gamePage: action.payload,
      };
    case ControllerAction.GAME_OVER:
      return {
        ...initial_state,
      };
    default:
      return state;
  }
}

export const getControllerIsStarted = (state: IState) => state.isStarted;
export const getControllerGamePage = (state: IState) => state.gamePage;
