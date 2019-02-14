import { Action } from '@ngrx/store';


export interface BookState {
  book: [];
}

export const initialState: BookState = {
  book: []
};

export function reducer(state = initialState, action: Action): BookState {
  switch (action.type) {

    default:
      return state;
  }
}
