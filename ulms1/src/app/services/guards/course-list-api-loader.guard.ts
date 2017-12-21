import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {CourseService} from '../course.service';
import {SearchModel, FilterModel} from '../../models/search.model';
import {CourseTabIndex} from '../course-status-mapper.service';

@Injectable()
export class CourseListApiLoaderGuard implements CanActivate {
    constructor(
        private courseService: CourseService,
    ) {}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return false;
    }


    /*canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.loadResources();
    }

    public loadResources(): Observable<boolean> | boolean {
        return Observable.of(
            this.l10n.init(),
            this.user.getUser(),
            this.preferences.getPreferences(),
        ).combineAll().map((results: Array<boolean>) => {
            this.__headerInstance__.setUserData(results[1]);
            this.__footerInstance__.setUserData(results[1]);
            return results.filter(result => result === false).length === 0;
        });
    }*/
}
