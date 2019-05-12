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
    // return this.letterItems;
  }


  // transformWord(){
  // }
}
