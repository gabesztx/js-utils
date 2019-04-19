import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Letter } from '../../models/game.model';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss']
})
export class LettersListComponent implements OnChanges, OnInit {
  @Input() letters: Letter[];
  @Input() selectedId: number;

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.selectedId.firstChange) {
      // console.log('Change', this.selectedId);
    } else {
      // console.log('ELSŐ');
    }
  }

  ngOnInit() {
    setTimeout(() => {
      // this.selectedId = 0;
      // console.log('trigger');
      // this.letters[0].active = true;
      // console.log('letter item', this.letters[0]);
      // this.isActive = this.active;
    }, 2000);
  }
}

