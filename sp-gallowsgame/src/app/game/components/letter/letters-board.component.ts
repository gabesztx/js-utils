import { Component, Input, OnInit } from '@angular/core';
import { ILetter } from '../../models/game.model';

@Component({
  selector: 'app-letter-board',
  templateUrl: './letter-board.component.html',
  styleUrls: ['./letter-board.component.scss']
})
export class LettersBoardComponent implements OnInit {
  @Input() letters: ILetter[];
  constructor() { }

  ngOnInit() {
  }

}
