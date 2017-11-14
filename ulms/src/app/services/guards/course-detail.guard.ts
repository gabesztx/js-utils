import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CourseDetailService } from '../course-detail.service';

@Injectable()

export class CourseDetailGuard implements Resolve<Observable<any>> {
    constructor(
        private courseDetialService: CourseDetailService,
    ) { }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const pageId = next.paramMap.get('courseId');
        return this.courseDetialService.list(pageId);
    }
}
