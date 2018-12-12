import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ICard } from '../../models/card.model';
import { RotateCard, InactiveCards } from '../../../../actions/card.action';
import { ScoreUpdate, MatchUpdate } from '../../../../actions/status.action';
import { UpdateGame } from '../../../../actions/controller.action';
import * as fromRoot from '../../../../reducers/index.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card-board',
  templateUrl: './card-borad.component.html',
  styleUrls: ['./card-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardBoradComponent implements OnInit, OnDestroy {
  private cardsOpened: ICard[] = [];
  private rotateTimeOut: any;

  cardList$: Observable<ICard[]>;

  constructor(private store: Store<fromRoot.MainState>) {
    this.cardList$ = this.store.pipe(select(fromRoot.getCards)).pipe(
      map(cards => {
        if (!cards.length) {
          this.cardsReset();
        }
        return cards;
      })
    );
  }

  ngOnInit() {}
 

  cardUpdate(card: ICard) {
    this.store.dispatch(new UpdateGame());
    this.cardRotate(card);
    this.cardsOpened.push(card);
    if (this.cardsOpened.length === 2) {
      this.cardsIsMatched() ? this.cardsMatched() : this.cardsUnMatched();
      this.cardsOpened = [];
    }
  }
  cardRotate(card: ICard) {
    this.store.dispatch(new RotateCard(card.id));
  }
  cardsMatched() {
    const cardsOpened = [this.cardsOpened[0], this.cardsOpened[1]];
    setTimeout(() => {
      cardsOpened.forEach((card: ICard) => {
        this.store.dispatch(new InactiveCards(card.id));
      });
    }, 450);
    this.store.dispatch(new MatchUpdate());
  }
  cardsUnMatched() {
    const cardsOpened = [this.cardsOpened[0], this.cardsOpened[1]];
    this.store.dispatch(new ScoreUpdate());
    this.rotateTimeOut = setTimeout(() => {
      cardsOpened.forEach((card: ICard) => {
        this.cardRotate(card);
      });
    }, 850);
  }
  cardsIsMatched(): boolean {
    return this.cardsOpened[0].label === this.cardsOpened[1].label;
  }
  cardsReset() {
    this.cardsOpened = [];
    clearTimeout(this.rotateTimeOut);
  }
  ngOnDestroy() {
    this.cardsReset();
  }
}
