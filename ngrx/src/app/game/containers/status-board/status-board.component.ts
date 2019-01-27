import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import { Observable } from 'rxjs';
import { GameDataService } from '../../services/game-data.service';
import { ResetCards } from '../../actions/card.actions';

@Component({
  selector: 'app-status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBoardComponent implements OnInit, OnDestroy {
  highScore$: Observable<number>;
  score$: Observable<number>;
  constructor(private store: Store<fromGame.GameState>,
              private gameDataService: GameDataService) {
    this.highScore$ = this.store.pipe(select(fromGame.getHighScore));
    this.score$ = this.store.pipe(select(fromGame.getScore));
  }

  ngOnInit() {}

  restartGame() {
    this.store.dispatch(new ResetCards());
    // console.log(this.gameDataService.getCards());
    // this.gameDataService.initCards();
  }
  ngOnDestroy() {
    // this.gameDataService.resetCards();
  }
}
