import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsDataService {
  wordItems: string[] = ['SUPERCHARGE'];
  letterItems: any[] = [];

  constructor() {
  }

  loadLetters(): Array<any> {
    this.letterItems = this.wordItems[0].split('')
      .map((item, key) => {
        return {
          id: key,
          value: item,
          active: false,
        };
      });
    return this.letterItems;
  }

  getLetters(): Array<any> {
    if (this.letterItems.length) {
      return this.letterItems;
    }
    return this.loadLetters();
  }

  isLetterMatches(letter: any, letterItem: any): Observable<any> {
    /*
    const letterValue = action.payload;
    const letterItemMatches = state.letterItem.filter((value) => {
      return value.value === letterValue;
    });
    if (letterItemMatches.length) {
      return {
        ...state,
        inputValue: letterValue,
        letter: letterItemMatches,
        letterItem: state.letterItem.map(item => {
          if (letterValue === item.value) {
            return {
              ...item,
              active: true
            };
          }
          return item;
        })
      };
    } else if (letterValue.length) {
      const letter = {
        id: state.letterItemWrong.length,
        value: letterValue,
        active: false
      };
      return {
        ...state,
        inputValue: letterValue,
        letterWrong: letter,
        letterItemWrong: [...state.letterItemWrong, {
          ...letter,
          active: true
        }]
      };
    }
    */
    return of('Hello');
  }
}
