import * as BookAction from '../actions/book.actions';


export interface BookState {
  book: any[];
}

export const initialState: BookState = {
  book: ['1', '2', '3']
};

export function reducer(state = initialState, action: BookAction.BookActions): BookState {
  switch (action.type) {
    case BookAction.BookActionTypes.Books:
      return {
        ...state,
        book: state.book
      };
    default:
      return state;
  }
}
