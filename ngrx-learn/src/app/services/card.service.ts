import { Injectable } from '@angular/core';
import { ICard } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  cardData: string[] = ['8-ball', 'baked-potato', 'baked-potato', 'dinosaur','kronos', 'rocket'];
  cardList: ICard[];

  constructor() {}

  initCards() {
    this.cardList = this.cardData.map(key => (
        {
          id: key,
          rotate: false,
          imgUrl: key
        }
      )
    );
  }

  getCards(): ICard[] {
    return this.cardList.concat(Array.from(this.cardList));
  }
}




