import * as UserAction from '../actions/user.actions';

export interface UserState {
  readonly name: string;
  readonly id: number;
}

export const initialState: UserState = {
  name: 'Gabesz',
  id: 4234243
};

export function reducer(state = initialState, action: UserAction.Actions): UserState {
  switch (action.type) {
    case UserAction.UserActionTypes.UserName:
      return {
        ...state,
        name: state.name
      };
    case UserAction.UserActionTypes.UserId:
      return {
        ...state,
        id: state.id,
      };
    default:
      return state;
  }
}

export const getUserName = (state: UserState) => state.name;
export const getUserId = (state: UserState) => state.id;
