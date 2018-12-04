import { Input, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MainState } from '../../reducers/index.reducer';
import { ICard } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { RotateCard } from '../../actions/card.action';
import * as fromRoot from '../../reducers/index.reducer';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainGameComponent implements OnInit {
  cardList$: Observable<ICard[]>;
  cardsOpened: ICard[] = [];

  constructor(private store: Store<MainState>,
              private cdr: ChangeDetectorRef) {
    this.cardList$ = this.store.pipe(select(fromRoot.getCard));
  }

  ngOnInit() {}

  cardHandler(card: ICard) {
    this.cardRotate(card);
    this.cardsIsMatched(card);
  }

  cardRotate(card: ICard) {
    this.store.dispatch(new RotateCard(card));
  }

  cardsIsMatched(card: ICard) {
    this.cardsOpened.push(card);
    if (this.cardsOpened.length === 2) {
      const isEqualCards = this.cardsOpened
        .reduce((prevCard, currCard) => prevCard.label === currCard.label);
      if (isEqualCards) {
        // console.log('MATCHED!!!!!');
      } else {
        const cardsOpened = [this.cardsOpened[0], this.cardsOpened[1]];
        setTimeout(() => {
          cardsOpened.forEach((item: ICard) => {
            this.cardRotate(item);
          });
          this.cdr.detectChanges();
        }, 1000);
      }
      this.cardsOpened = [];
    }
  }
}

// setTimeout(() => {})
// private cdr: ChangeDetectorRef
// this.cdr.detectChanges();
// this.cdr.markForCheck();
