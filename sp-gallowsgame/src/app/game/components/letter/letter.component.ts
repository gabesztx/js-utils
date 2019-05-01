import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Letter } from '../../models/game.model';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnChanges {
  @Input() letter: Letter;
  @Input() item: [];

  private letterShow = false;

  get letterValue() {
    return this.letter.value;
  }

  get letterId() {
    return this.letter.id;
  }

  get letterActive() {
    return this.letter.active;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.item.firstChange) {
      this.item.forEach((item: any) => {
        if (this.letterId === item.id && !item.active) {
          this.letterShow = true;
        }
      });
    }
  }
}
// if (!changes.item.firstChange && this.letterId === this.item.id) {
