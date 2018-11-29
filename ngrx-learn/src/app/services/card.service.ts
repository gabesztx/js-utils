import { Injectable } from '@angular/core';
import { ICard } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  CARD_DATA: string[] = ['8-ball', 'baked-potato'];
  cardList: ICard[] = [];

  constructor() {
  }

  initCards() {
    console.log('Init Cards');
    this.cardList = this.CARD_DATA.map(key => (
        {
          id: key,
          imgUrl: key,
          rotate: false
        }
      )
    )
    console.log(this.cardList);
  }

  // private

  duplicatedCards(): string[] {
    return this.CARD_DATA.concat(Array.from(this.CARD_DATA));
  }
}




