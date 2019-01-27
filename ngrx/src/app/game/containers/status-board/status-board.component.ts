import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import { Observable } from 'rxjs';
import { ResetCards } from '../../actions/card.actions';

@Component({
  selector: 'app-status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBoardComponent implements OnInit {
  highScore$: Observable<number>;
  score$: Observable<number>;
  constructor(private store: Store<fromGame.GameState>) {
    this.highScore$ = this.store.pipe(select(fromGame.getHighScore));
    this.score$ = this.store.pipe(select(fromGame.getScore));
  }

  ngOnInit() {}

  restartGame() {
    this.store.dispatch(new ResetCards());
  }

}
