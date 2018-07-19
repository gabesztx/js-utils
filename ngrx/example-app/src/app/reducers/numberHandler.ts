import * as layout from '../actions/numberHandler';


export interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.REMOVE_NUMBER:
      return {
        value: state.value - 1
      };

    case layout.ADD_NUMBER:
      return {
        value: state.value + 1
      };

    default:
      return state;
  }
}

export const getHandlerNumber = (state: State) => state.value;
