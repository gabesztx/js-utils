import { Injectable } from '@angular/core';
import { ICard } from '../models/card.model';
import { Store } from '@ngrx/store';
import { MainState } from '../reducers/index.reducer';
import { InitCards } from '../actions/card.action';

@Injectable()

export class CardService {
  cardData: string[] = ['8-ball', 'baked-potato', 'dinosaur', 'kronos', 'rocket', 'skinny-unicorn'];
  cardList: ICard[];

  constructor(private store: Store<MainState>) {
  }

  initCards() {
    const duplicatedCards = JSON.parse(JSON.stringify(this.cardData.concat(this.cardData.slice(0))));
    const randomCards = this.randomCards(duplicatedCards);
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

  resetCards() {
    // this.store.dispatch(new ResetCard());
  }

  randomCards(cardData): string[] {
    return cardData
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

}




