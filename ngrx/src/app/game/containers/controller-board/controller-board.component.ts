import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers/index';
import { HighScroreUpdate } from '../../actions/status.actions';
import { FinishGame } from '../../actions/controller.actions';
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


  constructor(private store: Store<fromGame.GameState>,
              private gameDataService: GameDataService
  ) {
    this.isStarted$ = this.store.pipe(select(fromGame.getIsStarted));
    this.match$ = this.store.pipe(select(fromGame.getMatch));
    // this.matchLength = this.gameDataService.deckNumber;
  }

  ngOnInit() {
    this.isStarted$.subscribe(
      started => {
        // console.log('started', started);
        started ? this.startGame() : this.finishGame();
      });
  }

  startGame() {
    console.log('Start Game');
    /*this.matchSubscription = this.match$.subscribe(
      machValue => {
        if (this.matchLength === machValue) {
          this.store.dispatch(new FinishGame());
        }
      });*/
  }

  finishGame() {
    if (this.matchSubscription) {
      console.log('Finish Game');
      // this.matchSubscription.unsubscribe();
      // this.store.dispatch(new HighScroreUpdate());
    }
  }
}
