import { Injectable } from '@angular/core';
import { LetterItem } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  private WORD = 'supercharge';
  private wordData: LetterItem[];

  loadWordData() {
    this.wordData = this.WORD.split('').map(
      (item, key) => {
        return {
          id: key,
          value: item,
          active: false,
        };
      });
    console.log('load wordData: ', this.wordData);
  }
  getWordData() {}
}
