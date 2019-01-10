import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CollectionPageActions } from '@example-app/books/actions';
import { Book } from '@example-app/books/models/book';
import * as fromBooks from '@example-app/books/reducers';

@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card> <mat-card-title>My Collection</mat-card-title> </mat-card>

    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [
    `
      mat-card-title {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class CollectionPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<fromBooks.State>, private router: Router) {
    this.books$ = store.pipe(select(fromBooks.getBookCollection));
  }

  ngOnInit() {
    this.store.dispatch(new CollectionPageActions.LoadCollection());
    setTimeout(() => {
      console.log('navigate');
      // this.router.navigate(['books/find']);
    }, 3000);
  }
}
