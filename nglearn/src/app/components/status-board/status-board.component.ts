import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index.reducer';
import { TimeUpdate } from '../../actions/status.action';

@Component({
  selector: 'app-status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBoardComponent implements OnInit {
  private timeSubscription: Subscription;
  private timeInterval$: Observable<number>;

  isStart$: Observable<boolean>;
  time$: Observable<number>;
  match$: Observable<number>;
  score$: Observable<number>;

  constructor(private store: Store<fromRoot.MainState>) {
    this.timeInterval$ = timer(0, 1000);
    this.isStart$ = this.store.pipe(select(fromRoot.getStatusIsStarted));
    this.time$ = this.store.pipe(select(fromRoot.getStatusTime));
    this.match$ = this.store.pipe(select(fromRoot.getStatusMatch));
  }

  ngOnInit() {
    this.isStart$.subscribe(isStart => {
      isStart ? this.addTimer() : this.removeTimer();
    });
  }

  addTimer() {
    this.timeSubscription = this.timeInterval$.subscribe(timeValue => {
      this.store.dispatch(new TimeUpdate(timeValue));
    });
  }

  removeTimer() {
    if (this.timeSubscription) {
      console.log('Remove Timer', this.timeSubscription);
      this.timeSubscription.unsubscribe();
    }
  }
}
