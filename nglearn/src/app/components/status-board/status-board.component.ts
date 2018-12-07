import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBoardComponent implements OnInit {
  time$: Observable<number>;
  match$: Observable<number>;

  constructor(private store: Store<fromRoot.MainState>) {
    this.time$ = this.store.pipe(select(fromRoot.getTime));
    this.match$ = this.store.pipe(select(fromRoot.getMatch));
  }

  ngOnInit() {
  }
}
