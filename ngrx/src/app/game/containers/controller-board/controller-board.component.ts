import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers/index';
import { HighScroreUpdate } from '../../actions/status.actions';
import { FinishGame, GameOver } from '../../actions/controller.actions';
import { Observable, Subscription } from 'rxjs';
import { GameDataService } from '../../services/game-data.service';

@Component({
  selector: 'app-controller-board',
  templateUrl: './controller-board.component.html',
  styleUrls: ['./controller-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControllerBoardComponent implements OnInit, OnDestroy {
  private matchSubscription: Subscription;
  private isStartSubscription: Subscription;
  private matchLength: number;

  isStarted$: Observable<boolean>;
  match$: Observable<number>;

  constructor(private store: Store<fromGame.GameState>,
              private gameDataService: GameDataService) {
    this.isStarted$ = this.store.pipe(select(fromGame.getIsStarted));
    this.match$ = this.store.pipe(select(fromGame.getMatch));
    this.matchLength = this.gameDataService.deckSize;
  }

  ngOnInit() {
    this.isStartSubscription = this.isStarted$.subscribe(
      started => {
        started ? this.startGame() : this.finishGame();
      });
  }

  startGame() {
    // console.log('Start Game');
    this.matchSubscription = this.match$.subscribe(
      machValue => {
        if (this.matchLength === machValue) {
          this.store.dispatch(new FinishGame());
        }
      });
  }

  finishGame() {
    if (this.matchSubscription) {
      // console.log('Finish Game');
      this.matchSubscription.unsubscribe();
      this.store.dispatch(new HighScroreUpdate());
    }
  }

  ngOnDestroy() {
    if (this.isStartSubscription) {
      this.isStartSubscription.unsubscribe();
    }
    if (this.matchSubscription) {
      this.matchSubscription.unsubscribe();
    }
    this.store.dispatch(new GameOver());
  }
}
