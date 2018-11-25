import { Input, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, AfterContentInit } from '@angular/core';
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
  value = 0;
  otherValue = 0;
  conf: string;

  constructor(private store: Store<fromRoot.MainState>, private cdr: ChangeDetectorRef) {
  }

  ngOnChanges() {
    console.log('ngOnChanges', this.config);
    // this.conf = this.config.position;
  }

  ngOnInit() {
    console.log('ngOnInit');
    /*setTimeout(() => {
      console.log('Trigger 10 value');
      this.value = 10;
      this.cdr.detectChanges();
    }, 1000);*/
    // this.controller$ = this.store.pipe(select(fromRoot.getControlller));

  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    this.controller$ = this.store.pipe(select(fromRoot.getControlller));
    // this.controller$.subscribe((res) => { this.value += 1000; });
    setTimeout(() => {
      this.addValue();
    }, 2000);
  }


  addValue() {
    console.log('addValue');
    // this.store.dispatch(new controllerAction.AddCounter());
    this.otherValue = 5000;
  }

  removeValue() {
    console.log('removeValue');
    // this.store.dispatch(new controllerAction.RemoveCounter());
    // this.cdr.detectChanges();

  }

  get triggerVal1() {
    console.log('triggerVal  -   1');
    return 'triggerVal1';
  }

  get triggerVal2() {
    console.log('triggerVal  -   2');
    return 'triggerVal2';
  }


}


// this.controller$.subscribe();
/*
ngAfterContentInit() {
  let num = 0;
  setInterval(() => {
    if (num < 5) {
      this.addValue();
    } else {
      this.removeValue();
    }
    num++;
  }, 500);
}*/
