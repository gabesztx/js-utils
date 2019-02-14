import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  userName$: Observable<string>;
  userId$: Observable<number>;

  constructor(private store: Store<fromStore.State>) {
    this.userName$ = this.store.pipe(select(fromStore.selectUserName));
    this.userId$ = this.store.pipe(select(fromStore.selectUserId));
  }

  ngOnInit() {
    this.userName$.subscribe(
      value => {
        console.log('User Name: ', value);
      }
    );

    this.userId$.subscribe(
      value => {
        console.log('User Id: ', value);
      }
    );
  }

}
