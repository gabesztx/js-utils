// External imports
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers/index.reducer'
import { Observable } from 'rxjs';

// Internal imports

/**
 * @export
 * @class PreloadGuard
 * @description
 * Root-level guard that defers access to all routes until the specified resources have all been loaded.
 * @implements {CanActivate}
 */
@Injectable()
export class PreloadGuard implements CanActivate {
    public isReady$:Observable<boolean>;
    constructor( private store: Store<fromRoot.AppState>) {
        this.isReady$ = this.store.select(fromRoot.getSystemReadyState);
        this.isReady$.subscribe();
    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.isReady$;
    }

}
