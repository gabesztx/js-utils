
import { DynamicComponentActions, DynamicComponentActionTypes } from '../actions/dynamic-component.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: DynamicComponentActions): State {
  switch (action.type) {

    case DynamicComponentActionTypes.LoadDynamicComponents:
      return state;

    default:
      return state;
  }
}
