import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ICard } from '../view/game/models/card.model';
import { MainState } from '../reducers/index.reducer';
import { InitCards } from '../actions/card.action';
import * as fromRoot from '../reducers/index.reducer';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  deckNumber: number;
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
  cardList: ICard[];

  constructor(private store: Store<MainState>) {
    this.store.pipe(select(fromRoot.getDeckSize)).subscribe(deckSize => {
      this.deckNumber = deckSize;
    })
  }

  initCards() {
    const randomCards = this.getRandomCards(this.cardData);
    const desckCards = JSON.parse(JSON.stringify(randomCards.slice(0, this.deckNumber)));
    const duplicatedCards = JSON.parse(JSON.stringify(desckCards.concat(desckCards.slice(0))));
    this.cardList = duplicatedCards.map((label, id) => {
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
