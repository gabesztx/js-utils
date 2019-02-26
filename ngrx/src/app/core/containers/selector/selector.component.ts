import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../../reducers';
import * as TimeAction from '../../../game/actions/time.actions';
import * as BookAction from '../../../actions/book.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  userName$: Observable<string>;
  userId$: Observable<number>;
  book$: Observable<any[]>;
  counter$: Observable<number>;
  bookItem$: Observable<any>;

  constructor(private store: Store<fromStore.State>) {
    this.book$ = this.store.pipe(select(fromStore.selectBook));
    this.userName$ = this.store.pipe(select(fromStore.selectUserName));
    this.userId$ = this.store.pipe(select(fromStore.selectUserId));
    this.counter$ = this.store.pipe(select(fromStore.selectTimerCounter));
    this.bookItem$ = this.store.pipe(select(fromStore.selectGetBookItem));
  }

  ngOnInit() {
    /*  this.userName$.subscribe(
        value => {
          console.log('User - Name: ', value);
        }
      );
  
      this.userId$.subscribe(
        value => {
          console.log('User - Id: ', value);
        }
      );*/
    this.book$.subscribe(
      value => {
        console.log('Book - books: ', value);
      }
    );

    this.counter$.subscribe(
      value => {
        console.log('Time - counter: ', value);
      }
    );
    this.bookItem$.subscribe(
      value => {
        console.log('Book Item: ', value);
      }
    );
  }

  triggerValue() {
    // console.log('trigger');
    this.store.dispatch(new TimeAction.AddCounter());
    setTimeout(() => {
      this.store.dispatch(new BookAction.AddBook());
    }, 4000);
  }

}
