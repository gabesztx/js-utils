import { Input, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MainState } from '../../reducers/index.reducer';
import { ICard } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { RotateCard } from '../../actions/card.action';
import * as fromRoot from '../../reducers/index.reducer';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-borad.component.html',
  styleUrls: ['./game-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GameBoradComponent implements OnInit {
  cardList$: Observable<ICard[]>;
  cardsOpened: ICard[] = [];

  constructor(private store: Store<MainState>,
              private cardService: CardService) {
    this.cardList$ = this.store.pipe(select(fromRoot.getCards));
  }

  ngOnInit() {}

  cardRotate(card: ICard) {
    this.cardsOpened.push(card);
    this.store.dispatch(new RotateCard(card));
    if (this.cardsOpened.length === 2) {
      const prevCardLabel = this.cardsOpened[0].label;
      const currCardLabel = this.cardsOpened[1].label;
      if (prevCardLabel === currCardLabel) {
        this.cardsMatched();
      } else {
        this.cardsUnMatched();
      }
      this.cardsOpened = [];
    }
  }

  cardsMatched() {
    console.log('Card is Matched');
  }

  cardsUnMatched() {
    const cardsOpened = [this.cardsOpened[0], this.cardsOpened[1]];
    setTimeout(() => {
      cardsOpened.forEach((item: ICard) => {
        this.store.dispatch(new RotateCard(item));
      });
    }, 750);
  }

  /*cardReset() {
    this.cardService.resetCards();
    this.cardService.initCards();
  }*/
}

// setTimeout(() => {})
// private cdr: ChangeDetectorRef
// this.cdr.detectChanges();
// this.cdr.markForCheck();
/*  const isEqualCards = this.cardsOpened.reduce((previousValue, currentValue) => {
 return previousValue.label === currentValue.label;
 });
 */

/*this.cardList$.subscribe(
  value => {
	console.log('VALUE', value);
  }
);*/
