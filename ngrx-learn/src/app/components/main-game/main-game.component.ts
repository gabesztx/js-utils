import { Input, ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MainState } from '../../reducers/index.reducer';
import { ICard } from '../../models/card.model';
import { Observable } from 'rxjs';

// import * as fromRoot from '../../reducers/index.reducer';
// import { AddCounter, RemoveCounter } from '../../actions/controller.action';
// import * as controllerReducer from '../../reducers/controller.reducer';

import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainGameComponent implements OnInit, OnChanges {
  // @Input() config: any;
  // controller$: Observable<controllerReducer.IState>;
  constructor(
    private store: Store<MainState>,
    private cardService: CardService) {
    // this.controller$ = this.store.pipe(select(fromRoot.getControlller));
  }

  ngOnChanges() {
  }

  ngOnInit() {
  }


  /* addValue() {
     this.store.dispatch(new AddCounter());
   }

   removeValue() {
     this.store.dispatch(new RemoveCounter());
   }*/
}

// private cdr: ChangeDetectorRef
// this.cdr.detectChanges();
// this.cdr.markForCheck();


// this.controller$ .subscribe((res) => { this.value += 1000; });
// setTimeout(() => {});

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
