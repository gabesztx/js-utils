import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Letter } from '../../models/game.model';

@Component({
  selector: 'app-letter-wrong',
  templateUrl: './letter-wrong.component.html',
  styleUrls: ['./letter-wrong.component.scss']
})
export class LetterWrongComponent implements OnChanges {
  @Input() letter: Letter;
  @Input() item: [];

  private letterShow = false;

  get letterValue() {
    return this.letter.value;
  }
  get letterActive() {
    return this.letter.active;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (!this.letter.active && !this.letterShow) {
      this.letterShow = true;
    }
  }
}
