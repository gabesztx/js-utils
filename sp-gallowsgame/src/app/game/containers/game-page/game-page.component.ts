import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  private letterPattern = /^[A-Za-z]*$/;
  public letterArr: Array<string> = [];
  public word = 'SUPERCHARGE';

  @ViewChild('letter') inputLetter: ElementRef;

  constructor(private store: Store<fromStore.State>) {
    this.letterArr = this.word.split('');
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
