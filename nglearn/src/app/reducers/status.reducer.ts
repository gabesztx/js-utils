import * as StatusAction from '../actions/status.action';

export interface IState {
  isStarted: boolean;
  time: number;
  score: number;
  match: number;
}

const initial_state: IState = {
  isStarted: false,
  time: 0,
  score: 0,
  match: 0,
};

export function reducer(state = initial_state, action: StatusAction.Actions) {
  switch (action.type) {
    case StatusAction.START_GAME:
      return Object.assign({}, state, {
        isStarted: true,
      });
    case StatusAction.END_GAME:
      return Object.assign({}, state, {
        isStarted: false,
      });
    case StatusAction.TIME_UPDATE:
      return Object.assign({}, state, {
        time: action.payload,
      });
    case StatusAction.MATCH_UPDATE:
      return Object.assign({}, state, {
        match: state.match++,
      });
    default:
      return state;
  }
}

export const getStatusTime = (state: IState) => state.time;
export const getStatusMatch = (state: IState) => state.match;
export const getStatusIsStarted = (state: IState) => state.isStarted;
