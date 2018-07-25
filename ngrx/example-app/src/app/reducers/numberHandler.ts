import * as layout from '../actions/numberHandler';
import { createSelector } from "reselect";
import { getEntities, getIds } from "./books";


export interface State {
  id: string;
  value: number;
}

const initialState: State = {
  id: '',
  value: 0,
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.REMOVE_NUMBER:
      return {
        id: state.id,
        value: state.value - 1
      };

    case layout.ADD_NUMBER:
      return {
        id: state.id,
        value: state.value + 1
      };
    case layout.ADD_ID:
      return {
        id: '1000',
        value: state.value
      };
    case layout.REMOVE_ID:
      return {
        id: '',
        value: state.value
      };
    default:
      return state;
  }
}

export const getNumberValue = (state: State) => state.value;
export const getNumberId = (state: State) => state.id;

export const getAll = createSelector(getNumberValue, getNumberId, (entities, ids) => {
  console.log('GET ALL ');
});
