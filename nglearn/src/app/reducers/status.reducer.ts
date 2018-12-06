import * as StatusAction from '../actions/status.action';

export interface IState {
  isStarted: boolean;
  time: number;
  score: number;
  match: number;
}

const initial_state: IState = {
  isStarted: null,
  time: 0,
  score: 0,
  match: 0,
};

export function reducer(state = initial_state, action: StatusAction.Actions) {
  switch (action.type) {
    case StatusAction.START_GAME:
      return {
        ...state,
        isStarted: true
      };
    case StatusAction.END_GAME:
      return {
        ...state,
        isStarted: false
      };
    case StatusAction.UPDATE_GAME:
      return {
        ...state,
        isStarted: !state.isStarted ? true : state.isStarted
      };
    case StatusAction.TIME_UPDATE:
      return {
        ...state,
        time: action.payload
      };
    case StatusAction.MATCH_UPDATE:
      const matchNum = ++state.match;
      return {
        ...state,
        match: matchNum,
        isStarted: matchNum === action.payload ? false : state.isStarted
      };
    default:
      return state;
  }
}

export const getStatusTime = (state: IState) => state.time;
export const getStatusMatch = (state: IState) => state.match;
export const getStatusIsStarted = (state: IState) => state.isStarted;
