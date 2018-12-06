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
  private timeInterval$: Observable<number>;
  private timeIntervalSub: Subscription;
  gameIsStarted$: Observable<boolean>;
  time$: Observable<number>;
  match$: Observable<number>;
  // time$: Observable<number>;

  constructor(private store: Store<fromRoot.MainState>) {
    this.timeInterval$ = timer(0, 1000);
    this.gameIsStarted$ = this.store.pipe(select(fromRoot.getStatusIsStarted));
    this.time$ = this.store.pipe(select(fromRoot.getStatusTime));
  }

  ngOnInit() {
    this.gameIsStarted$.subscribe(isStart => {
      isStart ? this.addTimer() : this.removeTimer();
    });
  }

  addTimer() {
    console.log('Add Timer');
    this.timeIntervalSub = this.timeInterval$.subscribe(timeValue => {
      this.store.dispatch(new TimeUpdate(timeValue));
    });
  }

  removeTimer() {
    if (this.timeIntervalSub) {
      console.log('Remove Timer', this.timeIntervalSub);
      this.timeIntervalSub.unsubscribe();
    }
  }
}
