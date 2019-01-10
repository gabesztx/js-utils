import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthApiActions } from '@example-app/auth/actions';
import * as fromAuth from '@example-app/auth/reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getLoggedIn),
      tap(x => console.log('authet', x)),
      map(authed => {
        if (!authed) {
          console.log('REDIRECT');
          this.store.dispatch(new AuthApiActions.LoginRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}