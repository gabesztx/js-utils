import * as StatusAction from '../actions/status.action';

export interface IState {
  score: number;
  match: number;
  highScore: number;
}

const initial_state: IState = {
  score: 0,
  match: 0,
  highScore: 0,
};

export function reducer(state = initial_state, action: StatusAction.Actions) {
  switch (action.type) {
    case StatusAction.MATCH_UPDATE:
      return {
        ...state,
        match: state.match + 1
      };
    case StatusAction.SCORE_UPDATE:
      return {
        ...state,
        score: state.score + 1
      };
    case StatusAction.HIGHSCORE_UPDATE:
      const score = state.score;
      const highScore = state.highScore;
      return {
        ...state,
        highScore: highScore < score && highScore !== 0 ? state.highScore : state.score
      };
    case StatusAction.RESET_STATUS:
      return {
        ...initial_state,
        highScore: state.highScore
      };
    default:
      return state;
  }
}

export const getStatusHighScore = (state: IState) => state.highScore;
export const getStatusMatch = (state: IState) => state.match;
export const getStatusScore = (state: IState) => state.score;
