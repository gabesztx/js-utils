import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers/index.reducer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<fromRoot.MainState>, private router: Router) {}
  gamePage$: Observable<boolean>;
  ngOnInit() {
    this.gamePage$ = this.store.pipe(select(fromRoot.getGamePage));
  }
  newGame(){
    this.router.navigate(['start']);
  }
}
