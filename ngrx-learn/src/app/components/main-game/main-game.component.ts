import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers/index.reducer';
import * as controller from '../../reducers/controller.reducer';
import * as controllerAction from '../../actions/controller.action';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit {
  controller$: Observable<controller.State>;

  constructor(private store: Store<fromRoot.MainState>) {
  }

  ngOnInit() {
    this.controller$ = this.store.select(fromRoot.getControlllerState);
    /*    this.controller$.subscribe(
          value => {
            console.log('RES: ', value.counterValue);
          }
        );*/
  }

  addValue() {
    this.store.dispatch(new controllerAction.AddCounter());
  }

  removeValue() {
    this.store.dispatch(new controllerAction.RemoveCounter());
  }
}
