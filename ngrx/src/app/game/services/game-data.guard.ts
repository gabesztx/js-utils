import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromGame from '../reducers';
import { GameDataService } from './game-data.service';
import { LoadCards } from '../actions/other.actions';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class GameDataGuard implements CanActivate {
  constructor(
    private store: Store<fromGame.GameState>,
    private gameDataService: GameDataService) {

  }

  getCards(): Observable<any> {
    return this.store.pipe(
      select(fromGame.getLoadCards),
      tap(cards => {
        console.log('Cards', cards);
        // this.store.dispatch(new LoadCards());
      }),
      map(value => {
        return value;
      }),
      // take(1)
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    return true;
    /* if (this.gameDataService.getCards().length) {
       console.log('bevan már töltve');
       return true;
     } else {
       return this.store.pipe(
         select(fromGame.getIsLoading),
         tap(x => console.log('VAL', x)),
         map(value => {
           // console.log('MAP VALUE', value);
           if (!value) {
             this.store.dispatch(new LoadCards());
           }
           return value;
         }),
         // take(1)
       );
     }*/

  }
}
