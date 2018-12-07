import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index.reducer';
import { TimeUpdate, ResetStatus } from '../../actions/status.action';
import { FinishGame, UpdateGame } from '../../actions/controller.action';
import { ResetCards } from '../../actions/card.action';
import { Observable, Subscription, timer } from 'rxjs';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-controller-board',
  templateUrl: './controller-board.component.html',
  styleUrls: ['./controller-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControllerBoardComponent implements OnInit {
  private timeSubscription: Subscription;
  private matchSubscription: Subscription;
  private timeInterval$: Observable<number>;
  private matchLength: number;

  isStarted$: Observable<boolean>;
  isFinished$: Observable<boolean>;
  match$: Observable<number>;


  constructor(private store: Store<fromRoot.MainState>, private cardService: CardService) {
    this.timeInterval$ = timer(0, 1000);
    this.isStarted$ = this.store.pipe(select(fromRoot.getIsStarted));
    this.isFinished$ = this.store.pipe(select(fromRoot.getIsFinished));
    this.match$ = this.store.pipe(select(fromRoot.getMatch));
    this.matchLength = this.cardService.cardData.length;
  }

  ngOnInit() {
    this.isStarted$.subscribe(
      started => {
        started ? this.startGame() : this.finishGame();
      });
  }
  startGame() {
    this.timeSubscription = this.timeInterval$.subscribe(
      timeValue => {
        this.store.dispatch(new TimeUpdate(timeValue));
      });
    this.matchSubscription = this.match$.subscribe(
      machValue => {
        if (this.matchLength === machValue) {
          this.store.dispatch(new FinishGame());
        }
      });
  }

  finishGame() {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
      this.matchSubscription.unsubscribe();
    }
  }

  restartGame() {
    this.store.dispatch(new ResetStatus());
    this.store.dispatch(new ResetCards());
    this.cardService.initCards();
    this.store.dispatch(new UpdateGame());
  }
}
