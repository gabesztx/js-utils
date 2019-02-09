
import { AdActions, AdActionTypes } from '../actions/ad.actions';

export interface AdState {

}

export const initialState: AdState = {

};

export function reducer(state = initialState, action: AdActions): AdState {
  switch (action.type) {

    case AdActionTypes.LoadAds:
      return state;

    default:
      return state;
  }
}
