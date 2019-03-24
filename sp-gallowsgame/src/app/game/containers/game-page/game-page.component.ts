import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})

export class GamePageComponent implements OnInit {
  // public items: Observable<string[]>;
  // public inputVal: string;

  constructor(private store: Store<fromStore.State>) {
    console.log('GamePageComponent');
  }
  ngOnInit() {
  }
}
