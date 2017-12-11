import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {RestApiResponse} from '../base/http.class';
import {CourseFeedsService} from '../course-feeds.service';

@Injectable()

// export class CoursesGuard implements Resolve<Observable<RestApiResponse<CourseDetail[]>>> {
export class CourseFeedsGuard implements Resolve<Observable<any>> {
    constructor(private courseFeedsService: CourseFeedsService) {}
    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.courseFeedsService.getFeeds();
    }
}
