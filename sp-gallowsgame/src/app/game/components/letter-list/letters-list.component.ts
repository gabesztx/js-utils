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

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {
  }
}

