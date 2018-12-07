import * as StatusAction from '../actions/status.action';

export interface IState {
  time: number;
  score: number;
  match: number;
}

const initial_state: IState = {
  time: 0,
  score: 0,
  match: 0,
};

export function reducer(state = initial_state, action: StatusAction.Actions) {
  switch (action.type) {
    case StatusAction.TIME_UPDATE:
      return {
        ...state,
        time: action.payload
      };
    case StatusAction.MATCH_UPDATE:
      return {
        ...state,
        match: ++state.match,
      };
    case StatusAction.RESET_STATUS:
      return initial_state;
    default:
      return state;
  }
}

export const getStatusTime = (state: IState) => state.time;
export const getStatusMatch = (state: IState) => state.match;
