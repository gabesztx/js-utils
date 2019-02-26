import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import { ICard } from '../../models/card.model';
import {
  InactiveCards,
  IsOpenCard,
  OpenedCardAdd,
  OpenedCardReset, ResetCards,
  RotateCard
} from '../../actions/card.actions';
import { UpdateGame } from '../../actions/controller.actions';
import { MatchUpdate, ScoreUpdate } from '../../actions/status.actions';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.scss']
})
export class CardBoardComponent implements OnInit, OnDestroy {
  private cardsOpenedSub: Subscription;
  private rotateTimeOut: any;

  cards$: Observable<ICard[]>;
  cardsOpen$: Observable<ICard[]>;
  cardsOpen: ICard[];
  constructor(private store: Store<fromGame.GameState>) {
    this.cards$ = this.store.pipe(select(fromGame.getCards));
    this.cardsOpen$ = this.store.pipe(select(fromGame.getOpened));
  }

  ngOnInit() {
    this.cardsOpenedSub = this.cardsOpen$.subscribe(
      cards => {
        // console.log('cardsOpen$', cards);
        cards.map((card, index, array) => {
          const key = index + 1;
          if (key % 2 === 0) {
            const cardsSource = [array[index - 1], array[index]];
            this.timerRotate();
            this.cardsIsMatched(cardsSource) ?
              this.cardsMatched(cardsSource) :
              this.cardsUnMatched(cardsSource);
          }
          return card;
        });
      }
    );
  }


  cardFlippedIn(card: ICard) {
    this.store.dispatch(new UpdateGame());
    this.store.dispatch(new RotateCard(card));
    this.store.dispatch(new IsOpenCard({card: card, isOpen: true}));
    this.store.dispatch(new OpenedCardAdd(card));

  }

  cardFlippedOut(card: ICard) {
    // console.log('cardFlippedOut');
    this.store.dispatch(new RotateCard(card));
    this.store.dispatch(new IsOpenCard({card: card, isOpen: false}));
  }


  cardsUnMatched(cards: ICard[]) {
    this.rotateTimeOut = setTimeout(() => {
      // console.log('cardsUnMatched');
      this.store.dispatch(new ScoreUpdate());
      this.store.dispatch(new OpenedCardReset([cards[0], cards[1]]));
      cards.forEach((card: ICard) => {
        this.store.dispatch(new IsOpenCard({card: card, isOpen: false}));
      });
    }, 300);
  }

  cardsMatched(cards: ICard[]) {
    // console.log('cardsMatched');
    this.store.dispatch(new MatchUpdate());
    this.cardsOpen = cards;
    cards.forEach((card: ICard) => {
      this.store.dispatch(new InactiveCards(card));
    });
    this.store.dispatch(new OpenedCardReset([cards[0], cards[1]]));
  }

  cardsIsMatched(cards: ICard[]): boolean {
    return cards[0].label === cards[1].label;
  }

  timerRotate() {
    clearTimeout(this.rotateTimeOut);
  }

  ngOnDestroy() {
    this.timerRotate();
    this.cardsOpenedSub.unsubscribe();
  }

}
