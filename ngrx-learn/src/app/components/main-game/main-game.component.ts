import { Input, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers/index.reducer';
import * as controllerReducer from '../../reducers/controller.reducer';
import * as controllerAction from '../../actions/controller.action';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainGameComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() config: any;
  controller$: Observable<controllerReducer.State>;

  constructor(private store: Store<fromRoot.MainState>, private cdr: ChangeDetectorRef) {
    this.controller$ = this.store.pipe(select(fromRoot.getControlller));
  }

  ngOnChanges() {}
  ngOnInit() {}
  ngAfterContentInit() {}

  addValue() {
    this.store.dispatch(new controllerAction.AddCounter());
  }
  removeValue() {
    this.store.dispatch(new controllerAction.RemoveCounter());
  }
}



// this.controller$ .subscribe((res) => { this.value += 1000; });
// setTimeout(() => {});
// this.cdr.detectChanges();
// this.cdr.markForCheck();
/*
  let num = 0;
  setInterval(() => {
    if (num < 5) {
      this.addValue();
    } else {
      this.removeValue();
    }
    num++;
  }, 500);
*/
