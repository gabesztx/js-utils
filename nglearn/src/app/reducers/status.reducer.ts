import * as StatusAction from '../actions/status.action';

export interface IState {
  isStarted: boolean;
  time: number;
  score: number;
  matched: number;
}

const initial_state: IState = {
  isStarted: false,
  time: 0,
  score: 0,
  matched: 0,
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
    default:
      return state;
  }
}

export const getStatusState = (state: IState) => state;
export const getStatusTime = (state: IState) => state.time;
export const getStatusIsStarted = (state: IState) => state.isStarted;
