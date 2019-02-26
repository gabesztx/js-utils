import { Action } from '@ngrx/store';

export enum BookActionTypes {
  Book = '[Book] Book',
  AddBook = '[Book] Add Books',
}

export class Book implements Action {
  readonly type = BookActionTypes.Book;
}

export class AddBook implements Action {
  readonly type = BookActionTypes.AddBook;
  constructor(public payload?: any) {
  }
}


export type BookActions =
  Book |
  AddBook;
