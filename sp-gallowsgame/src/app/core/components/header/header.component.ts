import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
// import * as fromGame from '../../../game/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  gamePage$: Observable<boolean>;

  // constructor(private store: Store<fromGame.GameState>, private router: Router) {
  constructor() {
  }

  ngOnInit() {
    // this.gamePage$ = this.store.pipe(select(fromGame.getGamePage));
  }

  newGame() {
    // this.router.navigate(['start']);
  }

}
