import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index.reducer';
import { TimeUpdate } from '../../actions/status.action';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBoardComponent implements OnInit {

  private timeSubscription: Subscription;
  private timeInterval$: Observable<number>;
  private isStarted$: Observable<boolean>;

  time$: Observable<number>;
  match$: Observable<number>;

  constructor(private store: Store<fromRoot.MainState>) {
    this.timeInterval$ = timer(0, 1000);
    this.isStarted$ = this.store.pipe(select(fromRoot.getStatusIsStarted));
    this.time$ = this.store.pipe(select(fromRoot.getStatusTime));
    this.match$ = this.store.pipe(select(fromRoot.getStatusMatch));
  }
  ngOnInit() {
    this.isStarted$.subscribe(started => {
      started ? this.startGame() : this.endGame();
    });
  }
  startGame() {
    this.timeSubscription = this.timeInterval$.subscribe(timeValue => {
      this.store.dispatch(new TimeUpdate(timeValue));
    });
  }
  endGame() {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }

  }
}
