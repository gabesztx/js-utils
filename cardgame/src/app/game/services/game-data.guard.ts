import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromGame from '../reducers';
import { GameDataService } from './game-data.service';
import { LoadCards } from '../actions/card.actions';
import { Observable } from 'rxjs';
import { map, tap, filter, take } from 'rxjs/operators';
import { ICard } from '../models/card.model';

@Injectable()
export class GameDataGuard implements CanActivate {
  constructor(
    private store: Store<fromGame.GameState>,
    private gameDataService: GameDataService) {
  }

  getCards(): Observable<boolean> {
    return this.store.pipe(select(fromGame.getCards),
      tap((cards: ICard[]) => {
        if (!cards.length) {
          this.store.dispatch(new LoadCards());
        }
      }),
      filter((cards: ICard[]) => !!cards.length),
      map((cards: ICard[]) => !!cards.length),
      // take(1)
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.getCards();
  }
}
