import { ActivationEnd, Router } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
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
  }

  /* NavigationStart */
  @Effect({dispatch: false})
  navigatonStart$ = this.actions$.pipe(
    ofType(fromRouter.ROUTER_REQUEST),
    tap(x => console.log('Route event: NavigationStart: ', x))
  );

  /* ActivationEnd */
  @Effect({dispatch: false})
  activationEnd$ = this.actions$.pipe(
    ofType(fromRouter.ROUTER_NAVIGATION),
    tap(x => console.log('Route event: ActivationEnd: ', x))
  );

  /* NavigationEnd */
  @Effect({dispatch: false})
  navigationEnd = this.actions$.pipe(
    ofType(fromRouter.ROUTER_NAVIGATED),
    tap(x => console.log('Route event: NavigationEnd: ', x))
  );


// this.listenToRouter();

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
