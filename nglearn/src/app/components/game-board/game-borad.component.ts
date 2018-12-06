import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ICard } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { RotateCard } from '../../actions/card.action';
import { StartGame, EndGame } from '../../actions/status.action';
import * as fromRoot from '../../reducers/index.reducer';
// import { getStatusIsStarted } from '../../reducers/status.reducer';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-borad.component.html',
  styleUrls: ['./game-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GameBoradComponent implements OnInit {
  private cardsOpened: ICard[] = [];
  private matchNum: number;
  private firstClick: boolean;
  cardList$: Observable<ICard[]>;

  constructor(private store: Store<fromRoot.MainState>,
              private cardService: CardService) {
    this.cardList$ = this.store.pipe(select(fromRoot.getCards));
    this.firstClick = true;
    this.matchNum = 0;
  }

  ngOnInit() {
  }

  cardRotate(card: ICard) {
    this.cardsOpened.push(card);
    this.store.dispatch(new RotateCard(card));

    if (this.firstClick) {
      this.firstClick = false;
      this.store.dispatch(new StartGame());
    }
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
    const matchNumber = this.cardService.cardData.length;
    this.matchNum++;
    if(this.matchNum === matchNumber){
      console.log('GAME OVER');
      this.store.dispatch(new StartGame());
    }
    // console.log('Card is Matched', this.matchNum, ' - ', matchNumber);
  }

  cardsUnMatched() {
    const cardsOpened = [this.cardsOpened[0], this.cardsOpened[1]];
    setTimeout(() => {
      cardsOpened.forEach((card: ICard) => {
        this.store.dispatch(new RotateCard(card));
      });
    }, 850);
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
