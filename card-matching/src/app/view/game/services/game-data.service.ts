import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICard } from '../models/card.model';
import { MainState } from '../../../reducers/index.reducer';
import { InitCards } from '../../../actions/card.action';

@Injectable()
export class GameDataService {
  cardData: string[] = [
    'angular',
    'd3',
    // 'jenkins',
    // 'postcss',
    // 'react',
    // 'redux',
    // 'sass',
    // 'supercharge',
    // 'ts',
    // 'webpack',
  ];
  cardList: ICard[];

  constructor(private store: Store<MainState>) {

  }

  initCards() {
    const duplicatedCards = JSON.parse(JSON.stringify(this.cardData.concat(this.cardData.slice(0))));
    const randomCards = this.getRandomCards(duplicatedCards);
    this.cardList = randomCards.map((label, id) => {
      return {
        id: id,
        imgUrl: `assets/${label}.png`,
        label: label,
        rotate: false,
        inactive: false,
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
