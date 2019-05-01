import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Letter } from '../../models/game.model';

@Component({
  selector: 'app-letter-wrong-list',
  templateUrl: './letter-wrong-list.component.html',
  styleUrls: ['./letter-wrong-list.component.scss']
})
export class LetterWrongListComponent implements OnInit, OnChanges {
  @Input() letterItem: Letter[];
  @Input() item: any;
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.item.firstChange) {
      // console.log('PUSH');
      this.letterItem.push(this.item);
    }
  }
  ngOnInit() {}
}
