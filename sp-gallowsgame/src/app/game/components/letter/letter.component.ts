import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Letter } from '../../models/game.model';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit, OnChanges {
  @Input() selectedId: number;
  @Input() letter: Letter;

  get value() {
    return this.letter.value;
  }

  get id() {
    return this.letter.id;
  }

  set active(isActive: boolean) {
    console.log('SET', isActive);
    this.letter.active = isActive;
  }

  get active() {
    return this.letter.active;
  }

  constructor() {
    // console.log('LetterComponent');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('selectedId')) {
      const selectedId = changes.selectedId;
      if (!selectedId.firstChange) {
        this.active = !this.active;
        if (this.selectedId === this.id) {
          // setTimeout(() => {}, 1000);
        }
        // console.log('selectedId: ', this.selectedId, ' - ', id);
        // const value = selectedId.currentValue;
      }

    }
  }

  ngOnInit() {
    // console.log('SELECTED ID: ', this.isSelectedId);
    // console.log('INIT: ', this.active);
    // this.isActive = this.active;
    // setTimeout(() => {
    // }, 1000);
  }
}
