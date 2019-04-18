export interface State {

}

export const initialState: State = {};

export function reducer(state = initialState, action: any): State {
  switch (action.type) {

    // case GameActionTypes.LoadData:
    //   return state;

    default:
      return state;
  }
}
