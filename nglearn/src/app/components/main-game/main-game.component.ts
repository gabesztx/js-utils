import { Input, ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MainState } from '../../reducers/index.reducer';
import { ICard } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { Observable } from 'rxjs';

import * as fromRoot from '../../reducers/index.reducer';
import { RotateCard } from '../../actions/card.action';
// import { AddCounter, RemoveCounter } from '../../actions/controller.action';
// import * as controllerReducer from '../../reducers/controller.reducer';


@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainGameComponent implements OnInit {
  // @Input() config: any;
  controller$: Observable<any>;
  cardList$: Observable<ICard[]>;

  constructor(private store: Store<MainState>, private cardService: CardService) {
    this.cardList$ = this.store.pipe(select(fromRoot.getCard));
    // this.controller$ = this.store.pipe(select(fromRoot.getCard));
    // this.cardList$ = this.cardService.getCards();
  }

  ngOnInit() {
    /*this.cardService.getCards().subscribe(
      value => {
        console.log('VALUE', value);
      }
    );*/
    // this.cardList = this.cardService.getCards();
  }

  cardRotate(card: ICard) {
    this.store.dispatch(new RotateCard(card));
  }

  /* addValue() {
     this.store.dispatch(new AddCounter());
   }

   removeValue() {
     this.store.dispatch(new RemoveCounter());
   }*/
}

// setTimeout(() => {})
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
