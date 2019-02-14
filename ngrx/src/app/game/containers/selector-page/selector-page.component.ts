import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {
  // cards$: Observable<ICard[]>;
  conter$: Observable<number>;

  constructor(private store: Store<fromGame.GameState>) {
    this.conter$ = this.store.pipe(select(fromGame.selectTimeCounter));
  }

  ngOnInit() {
    this.conter$.subscribe(
      count => {
        console.log('count: ', count);
      }
    );
  }
}
