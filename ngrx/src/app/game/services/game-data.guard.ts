import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromGame from '../reducers';
import { GameDataService } from './game-data.service';
import { LoadCards } from '../actions/other.actions';
import { Observable, of } from 'rxjs';
import { map, take, tap, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class GameDataGuard implements CanActivate {
  constructor(
    private store: Store<fromGame.GameState>,
    private gameDataService: GameDataService) {
  }

  getCards(): Observable<boolean> {
    return this.store.pipe(
      select(fromGame.getLoadCards),
      tap(cards => {
        if (!cards.length) {
          this.store.dispatch(new LoadCards());
        }
      }),
      filter((cards: any) => !!cards.length),
      map((cards: any) => !!cards.length)
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.gameDataService.getCards().length) {
      return true;
    }
    // console.log('Load cards!');
    return this.getCards();
  }
}
