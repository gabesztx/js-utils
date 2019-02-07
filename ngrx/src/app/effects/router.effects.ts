import { ActivationEnd, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromRoot from '../reducers';
import {
  RouterActionTypes,
  RouteChange,
  RouterGo
} from '../actions/router.actions';
import { filter, map, tap } from 'rxjs/operators';


@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private store: Store<fromRoot.State>) {
    // this.listenToRouter();
  }

  /*/!* Router Go *!/
  @Effect({dispatch: false})
  navigate$ = this.actions$.pipe(
    ofType(RouterActionTypes.RouterGo),
    map((action: RouterGo) => action.payload),
    tap(({path, queryParams, extras}) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  );

  /!* Router Back *!/
  @Effect({dispatch: false})
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActionTypes.RouterBack),
    tap(() => this.location.back())
  );

  /!* Router Forward *!/
  @Effect({dispatch: false})
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActionTypes.RouterForward),
    tap(() => this.location.forward())
  );

  private listenToRouter() {
    this.router.events.pipe(
      // tap(event => console.log('router event', event)),
      filter(event => event instanceof ActivationEnd)
    ).subscribe((event: ActivationEnd) => {
        console.log('ActivationEnd: ', event);
        this.store.dispatch(new RouteChange({
          params: {...event.snapshot.params},
          path: event.snapshot.routeConfig.path
        }));
      }
    );
  }*/
}
