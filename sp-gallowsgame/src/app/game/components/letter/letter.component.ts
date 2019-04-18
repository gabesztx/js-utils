import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Letter } from '../../models/game.model';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit, OnChanges {
  private isActive = false;
  @Input() letter: Letter;

  get value() {
    return this.letter.value;
  }
  get active() {
    return this.letter.active;
  }

  constructor() {
    // console.log('LetterComponent');
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.isActive = this.active;
  }

  ngOnInit() {
    // console.log(this.active);
    setTimeout(() => {
      // this.isActive = this.active;
    });
  }
}
