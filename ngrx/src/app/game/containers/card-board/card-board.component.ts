import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGame from '../../reducers';

@Component({
  selector: 'app-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.scss']
})
export class CardBoardComponent implements OnInit {

  constructor(private store: Store<fromGame.GameState>) { }

  ngOnInit() {
  }

}
