
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CourseDetailFeedServices } from '../course-detail-feed.services';

@Injectable()

export class CourseDetailFeedGuard implements Resolve<Observable<any>> {
    constructor(
        private courseDetailFeedServices: CourseDetailFeedServices,
    ) { }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const pageId = next.paramMap.get('courseId');
        return this.courseDetailFeedServices.list(pageId);
    }
}
