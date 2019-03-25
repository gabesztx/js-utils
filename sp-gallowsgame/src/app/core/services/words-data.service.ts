import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsDataService {
  wordItems: string[] = ['SUPERCHARGE'];
  letterItems: any[];

  constructor() {
    console.log('WordsDataService');
  }

  transformWordItem(): Array<any> {
    return this.wordItems[0].split('')
      .map(item => {
        return {
          value: item,
          active: false,
        };
      });
  }

  getLetterItem(): Array<any> {
    return this.letterItems;
  }


  // transformWord(){
  // }
}
