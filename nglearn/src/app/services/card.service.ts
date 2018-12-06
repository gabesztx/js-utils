import { Injectable } from '@angular/core';
import { ICard } from '../models/card.model';
import { Store } from '@ngrx/store';
import { MainState } from '../reducers/index.reducer';
import { InitCards } from '../actions/card.action';

@Injectable()
export class CardService {
  // cardData: string[] = ['8-ball', 'baked-potato', 'dinosaur', 'kronos', 'rocket', 'skinny-unicorn'];
  cardData: string[] = ['8-ball', 'baked-potato'];
  cardList: ICard[];

  constructor(private store: Store<MainState>) {}

  initCards() {
    const duplicatedCards = JSON.parse(JSON.stringify(this.cardData.concat(this.cardData.slice(0))));
    const randomCards = this.getRandomCards(duplicatedCards);
    this.cardList = randomCards.map((label, id) => {
      return {
        id: id,
        imgUrl: label,
        label: label,
        rotate: false,
      };
    });
    this.store.dispatch(new InitCards(this.cardList));
  }

  private getRandomCards(cardData): string[] {
    return cardData
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

}

// this.store.dispatch(new ResetCard());
