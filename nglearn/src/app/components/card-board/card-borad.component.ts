import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ICard } from '../../models/card.model';
import { RotateCard } from '../../actions/card.action';
import { MatchUpdate, UpdateGame, EndGame } from '../../actions/status.action';
import * as fromRoot from '../../reducers/index.reducer';
import { CardService } from '../../services/card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-board',
  templateUrl: './card-borad.component.html',
  styleUrls: ['./card-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardBoradComponent implements OnInit {
  private cardsOpened: ICard[] = [];
  cardList$: Observable<ICard[]>;

  constructor(private store: Store<fromRoot.MainState>, private cardService: CardService) {
    this.cardList$ = this.store.pipe(select(fromRoot.getCards));
  }

  ngOnInit() {}

  cardHandler(card: ICard) {
    this.store.dispatch(new UpdateGame());
    this.cardRotate(card);
    this.cardsOpened.push(card);
    if (this.cardsOpened.length === 2) {
      const isEqualCards = this.cardsOpened[0].label === this.cardsOpened[1].label;
      isEqualCards ? this.cardsMatched() : this.cardsUnMatched();
      this.cardsOpened = [];
    }
  }

  cardRotate(card: ICard) {
    this.store.dispatch(new RotateCard(card.id));
  }

  cardsMatched() {
    const matchLenght = this.cardService.cardData.length;
    this.store.dispatch(new MatchUpdate(matchLenght));
  }

  cardsUnMatched() {
    const cardsOpened = [this.cardsOpened[0], this.cardsOpened[1]];
    setTimeout(() => {
      cardsOpened.forEach((card: ICard) => {
        this.cardRotate(card);
      });
    }, 1000);
  }
}

// private cdr: ChangeDetectorRef
// this.cdr.detectChanges();
// this.cdr.markForCheck();
