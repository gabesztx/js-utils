import { Injectable } from '@angular/core';
import { ICard } from '../models/card.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  cardData: string[] = ['8-ball', 'baked-potato', 'dinosaur', 'kronos', 'rocket', 'skinny-unicorn'];
  cardList: ICard[];
  constructor() {}

  initCards() {
    const cards: ICard[] = this.cardData.map(key => (
        {
          id: key,
          rotate: false,
          imgUrl: key
        }
      )
    );
    this.cardList = cards.concat(Array.from(cards));
  }

  getCards(): Observable<ICard[]> {
    return of(this.cardList).pipe(
      map(value => {
   /*     const cards: ICard[] = value;
        console.log('cards', cards);*/
        return value;
      })
    );
  }

  /*private duplicatedCards(): ICard[] {
    return this.CARD_DATA.concat(Array.from(this.CARD_DATA));
  }*/
}




