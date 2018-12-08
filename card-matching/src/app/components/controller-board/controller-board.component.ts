import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index.reducer';
import { HighScroreUpdate } from '../../actions/status.action';
import { FinishGame } from '../../actions/controller.action';
import { Observable, Subscription } from 'rxjs';
import { GameDataService } from '../../services/game-data.service';

@Component({
  selector: 'app-controller-board',
  templateUrl: './controller-board.component.html',
  styleUrls: ['./controller-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControllerBoardComponent implements OnInit {
  private matchSubscription: Subscription;
  private matchLength: number;

  isStarted$: Observable<boolean>;
  match$: Observable<number>;

  constructor(private store: Store<fromRoot.MainState>, private gameDataService: GameDataService) {
    this.isStarted$ = this.store.pipe(select(fromRoot.getIsStarted));
    this.match$ = this.store.pipe(select(fromRoot.getMatch));
    this.matchLength = this.gameDataService.cardData.length;
  }

  ngOnInit() {
    this.isStarted$.subscribe(
      started => {
        started ? this.startGame() : this.finishGame();
      });
  }

  startGame() {
    console.log('startGame');
    this.matchSubscription = this.match$.subscribe(
      machValue => {
        if (this.matchLength === machValue) {
          this.store.dispatch(new FinishGame());
        }
      });
  }

  finishGame() {
    if (this.matchSubscription) {
      console.log('finishGame');
      this.matchSubscription.unsubscribe();
      this.store.dispatch(new HighScroreUpdate());
    }
  }
}
