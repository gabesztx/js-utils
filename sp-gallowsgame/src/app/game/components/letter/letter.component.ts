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
  public letterShow = false;

  get letterValue() {
    return this.letter.value;
  }


  get letterId() {
    return this.letter.id;
  }
  get letterActive() {
    return this.letter.active;
  }

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.selectedId.firstChange && this.letterId === this.selectedId) {
      this.letterShow = true;
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

/*
  set active(isActive: boolean) {
    // console.log('SET', isActive);
    // this.letter.active = isActive;
  }*/
