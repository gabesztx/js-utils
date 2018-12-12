import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../../reducers/index.reducer';
import { ResetStatus } from '../../../../actions/status.action';
import { ResetCards } from '../../../../actions/card.action';
import { GameDataService } from '../../../../services/game-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBoardComponent implements OnInit, OnDestroy {
  highScore$: Observable<number>;
  score$: Observable<number>;
  constructor(private store: Store<fromRoot.MainState>, private gameDataService: GameDataService) {
    this.highScore$ = this.store.pipe(select(fromRoot.getHighScore));
    this.score$ = this.store.pipe(select(fromRoot.getScore));
  }

  ngOnInit() {}

  restartGame() {
    this.store.dispatch(new ResetStatus());
    this.store.dispatch(new ResetCards());
    this.gameDataService.initCards();
  }
  ngOnDestroy() {
    this.store.dispatch(new ResetStatus());
    this.store.dispatch(new ResetCards());
  }
}
