import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGame from '../../reducers';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private store: Store<fromGame.State>) { }
  ngOnInit() {}
  startGame() {
    // this.gameDataService.resetCards();
    // this.router.navigate(['game']);
  }

  changeDeckSize(value) {
    // this.store.dispatch(new DeckSize(value));
  }
}
