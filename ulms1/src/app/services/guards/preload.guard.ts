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
import { PreferencesService } from '../preferences.service';

@Injectable()
export class PreloadGuard implements CanActivate {
    public __headerInstance__: any;
    public __footerInstance__: any;
    constructor (private l10n: L10nService,
                 private preferences: PreferencesService,
                 private user: UserService) {

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.loadResources();
    }
    public loadResources(): Observable<boolean> | boolean {
        return Observable.of(
            this.l10n.init(),
            this.user.getUser(),
            // this.preferences.getPreferences(),
        ).combineAll().map((results: Array<boolean>) => {
            this.__headerInstance__.setUserData(results[1]);
            this.__footerInstance__.setUserData(results[1]);
            return results.filter(result => result === false).length === 0;
        });
    }
}
