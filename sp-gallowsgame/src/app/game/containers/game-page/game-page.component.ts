import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  @ViewChild('letter') inputLetter: ElementRef;
  private letterPattern = /^[A-Za-z]*$/;
  public letterArr: Array<string> = [];
  constructor(private store: Store<fromStore.State>) {
    const word = 'SUPERCHARGE';
    this.letterArr = word.split('');
  }

  ngOnInit() {
    this.inputLetter.nativeElement.focus();
  }

  onChange(event) {
    if (!this.letterPattern.test(event.key)) {
      event.preventDefault();
    }
    event.target.value = '';
  }
}
