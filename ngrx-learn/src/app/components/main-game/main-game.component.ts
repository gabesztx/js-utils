import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index.reducer';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainGameComponent implements OnInit, OnChanges {
  // @Input() name: string;
  // @Input() config: any;
  count = 0;
  // controller$: Observable<controllerReducer.State>;

  constructor(private store: Store<fromRoot.MainState>,
              private cdr: ChangeDetectorRef) {
    setInterval(() => {
      this.count++;
      // this.cdr.detectChanges();
    }, 1000);
  }

  ngOnChanges() {
    // console.log('Changes');
  }

  ngOnInit() {
  }

  get runChangeDetection1() {
    console.log('Checking the view - 1');
    return 'string 1';
  }

  get runChangeDetection2() {
    console.log('Checking the view - 2');
    return 'string 2';
  }

  add() {
    // console.log('ADDD');
    // this.count++;
  }
}

