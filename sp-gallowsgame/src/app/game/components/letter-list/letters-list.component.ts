import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LetterItem } from '../../models/game.model';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss']
})
export class LettersListComponent implements OnChanges, OnInit {
  @Input() letterItem: LetterItem[];
  @Input() item: any;

  ngOnChanges(changes: SimpleChanges) {
  }
  ngOnInit() {}
}

