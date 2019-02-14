import * as TimeAction from '../actions/time.actions';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0
};

export function reducer(state = initialState, action: TimeAction.Actions): State {
  switch (action.type) {
    case TimeAction.TimeActionTypes.Counter:
      return {
        ...state,
        counter: state.counter
      };

    case TimeAction.TimeActionTypes.AddCounter:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
}
