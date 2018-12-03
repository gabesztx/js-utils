import { Injectable } from '@angular/core';
import { ICard } from '../models/card.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MainState } from '../reducers/index.reducer';
import { InitCards } from '../actions/card.action';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  cardData: string[] = ['8-ball', 'baked-potato', 'dinosaur', 'kronos', 'rocket', 'skinny-unicorn'];
  cardList: ICard[];
  constructor(private store: Store<MainState>) {}

  initCards() {
    const cards: ICard[] = this.cardData.map((label, id) => {
      return {
        id: id,
        imgUrl: label,
        label: label,
        rotate: false,
      };
    });
    this.cardList = JSON.parse(JSON.stringify(cards.concat(cards.slice(0))));
    console.log(this.cardList);
    this.store.dispatch(new InitCards(this.cardList));
  }

  /*getCards(): Observable<ICard[]> {
    return of(this.cardList).pipe(
      map(value => {
        return value;
      })
    );
  }*/

  /*private duplicatedCards(): ICard[] {
    return this.CARD_DATA.concat(Array.from(this.CARD_DATA));
  }*/
}




