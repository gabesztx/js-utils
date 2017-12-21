// External imports
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/map';
// Internal imports
import {L10nService} from '../l10n.service';
import {UserService} from '../user.service';
import {PreferencesService} from '../preferences.service';
import {FilterModel, SearchModel} from '../../models/search.model';
import {CourseTabIndex} from '../course-status-mapper.service';
import {CourseStatusMapperService} from '../../services/course-status-mapper.service';
import {CourseService} from '../course.service';
import {SpinnerService} from '../spinner.service';

@Injectable()
export class PreloadGuard implements CanActivate {
    public __headerInstance__: any;
    public __footerInstance__: any;

    constructor(private l10n: L10nService,
                private preferences: PreferencesService,
                private user: UserService,
                private courseStatusMapperService: CourseStatusMapperService,
                private courseService: CourseService,
                private spinnerService: SpinnerService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.loadResources();
    }

    public loadResources(): Observable<boolean> | boolean {
        const pageSize = 15;
        const courseActiveState = this.courseStatusMapperService.mapCourseTabIndexToCourseState(CourseTabIndex.ACTIVE);
        const courseFilterActive = new FilterModel('state', courseActiveState);
        const courseSearchActive = new SearchModel(1, 0, pageSize, [courseFilterActive]);

        return Observable.of(
            this.l10n.init(),
            this.user.getUser(),
            this.preferences.getPreferences(),
            this.courseService.list(courseActiveState, courseSearchActive) // Activate
        ).combineAll().map((results: Array<boolean>) => {
            // console.log('READY');
            //console.log(results.filter(result => result === false).length === 0)
            this.__headerInstance__.setUserData(results[1]);
            this.__footerInstance__.setUserData(results[1]);
             return results.filter(result => result === false).length === 0;
            // return false;
        });
    }
}
