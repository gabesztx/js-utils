import * as BookAction from '../actions/book.actions';


export interface BookState {
  book: any[];
  itemNum: number;
}

export const initialState: BookState = {
  book: ['Könyv 1', 'Könyv 2', 'Könyv 3'],
  itemNum: 3
};

export function reducer(state = initialState, action: BookAction.BookActions): BookState {
  switch (action.type) {
    case BookAction.BookActionTypes.Book:
      return {
        ...state,
        book: state.book
      };
    case BookAction.BookActionTypes.AddBook:
      // console.log('AddBook');
      const book = state.book;
      const itemNum = state.itemNum + 1;
      book.push(`Könyv ${itemNum}`);
      const newBook = JSON.stringify(book);
      return {
        ...state,
        book: JSON.parse(newBook),
        itemNum: itemNum
      };
    default:
      return state;
  }
}
