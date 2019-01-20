import { Injectable } from '@angular/core';
import { ICard } from '../models/card.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class GameDataService {
  cardList: ICard[];
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

  loadCards(): Observable<ICard[]> {
    const randomCards = this.getRandomCards(this.cardData);
    const desckCards = JSON.parse(JSON.stringify(randomCards.slice(0, 3)));
    const duplicatedCards = JSON.parse(JSON.stringify(desckCards.concat(desckCards.slice(0))));
    const randomDuplicatedCards = this.getRandomCards(duplicatedCards);
    const cards = randomDuplicatedCards.map((label, id) => {
      return {
        id: id,
        imgUrl: `assets/${label}.png`,
        label: label,
        rotate: false,
        inactive: false,
        isOpen: false,
      };
    });

    return of(cards);
    // console.log('cards', cards);

  }

  initCards() {
    /*const localStorgeCards = this.getLocalStorage('cards').cards;
    const randomCards = this.getRandomCards(this.cardData);
    const desckCards = JSON.parse(JSON.stringify(randomCards.slice(0, this.deckNumber)));
    const duplicatedCards = JSON.parse(JSON.stringify(desckCards.concat(desckCards.slice(0))));
    const randomDuplicatedCards = this.getRandomCards(duplicatedCards);
    // console.log('Local Storage', localStorgeCards);
    this.cardList = localStorgeCards.length ?
      localStorgeCards :
      randomDuplicatedCards.map((label, id) => {
        return {
          id: id,
          imgUrl: `assets/${label}.png`,
          label: label,
          rotate: false,
          inactive: false,
          isOpen: false,
        };
      });*/
  }

  // resetCards() {}

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


// this.store.dispatch(new InitCards(this.cardList));
// this.store.dispatch(new ResetStatus());
// this.store.dispatch(new ResetCards());
