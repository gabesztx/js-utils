import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import { Observable } from 'rxjs';
import { ICard } from '../../models/card.model';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {
  cards$: Observable<ICard[]>;

  constructor(private store: Store<fromGame.GameState>) {
    // this.cards$ = this.store.pipe(select(fromGame.selectCardCards));
  }

  ngOnInit() {
   /* this.cards$.subscribe(
      cards => {
        console.log('cards: ', cards);
      }
    );*/
  }
}
