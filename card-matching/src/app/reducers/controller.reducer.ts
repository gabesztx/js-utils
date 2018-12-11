import * as ControllerAction from '../actions/controller.action';

export interface IState {
  startPage: boolean;
  gamePage: boolean;
  isStarted: boolean;
  isFinished: boolean;
}

const initial_state: IState = {
  startPage: false,
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
    case ControllerAction.START_PAGE:
      return {
        ...state,
        startPage: true,
        gamePage: false,
      };
    case ControllerAction.GAME_PAGE:
      return {
        ...state,
        startPage: false,
        gamePage: true,
      };
    default:
      return state;
  }
}


export const getControllerIsStarted = (state: IState) => state.isStarted;
export const getControllerStartPage = (state: IState) => state.startPage;
export const getControllerGamePage = (state: IState) => state.gamePage;
