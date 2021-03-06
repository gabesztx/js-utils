import { Injectable } from '@angular/core';
import { ICard } from '../models/card.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class GameDataService {
  deckSize: number;
  cards: ICard[] = [];
  cardData: string[] = [
    'angular',
    'd3',
    'jenkins',
    'postcss',
    'react',
    'redux',
    'sass',
    'supercharge',
    'ts',
    'webpack',
  ];

  constructor() {
  }

  loadCards(deckSize?: number): Observable<ICard[]> {
    this.deckSize = deckSize || this.deckSize || 3;
    const randomCards = this.getRandomCards(this.cardData);
    const deckCards = JSON.parse(JSON.stringify(randomCards.slice(0, this.deckSize)));
    const duplicatedCards = JSON.parse(JSON.stringify(deckCards.concat(deckCards.slice(0))));
    const randomDuplicatedCards = this.getRandomCards(duplicatedCards);
    this.cards = randomDuplicatedCards.map((label, id) => {
      return {
        id: id,
        imgUrl: `assets/${label}.png`,
        label: label,
        rotate: false,
        inactive: false,
        isOpen: false,
      };
    });
    return of(this.cards);

  }
  /*getCards(): ICard[] {
    return this.cards;
  }
*/
  resetCards(): void {
    this.cards = [];
  }

  getLocalStorage(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  private getRandomCards(cardData): string[] {
    return cardData
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }
}
