import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGame from '../../reducers';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor(private store: Store<fromGame.GameState>) {
  }

  ngOnInit() {
    // TODO: game board folytatása
  }

}
