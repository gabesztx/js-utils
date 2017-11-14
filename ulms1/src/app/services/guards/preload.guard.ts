// External imports
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/map';
// Internal imports
import { L10nService } from '../l10n.service';
import { UserService } from '../user.service';

@Injectable()
export class PreloadGuard implements CanActivate {

    constructor (private l10n: L10nService, private user: UserService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.loadResources();
    }

    public loadResources(): Observable<boolean> | boolean {
        return Observable.of(
            // Register observable preload tasks here.
            this.l10n.init(),
            this.user.init()
        ).combineAll().map((results: Array<boolean>) => {
            return results.filter(result => result === false).length === 0;
        });
    }
}
