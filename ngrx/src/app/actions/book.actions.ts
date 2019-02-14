import { Action } from '@ngrx/store';

export enum BookActionTypes {
  Books = '[Book] Books',
}

export class Books implements Action {
  readonly type = BookActionTypes.Books;
}


export type BookActions = Books;
