import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestApiResponse } from '../base/http.class';
import { CourseService_ } from '../course.service_';
import { CourseDetail } from '../../models/courseDetail.model';

@Injectable()

export class CoursesGuard_ implements Resolve<Observable<RestApiResponse<CourseDetail[]>>> {
    constructor(private courseService: CourseService_) {
    }
    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.courseService.getList(parseInt(next.paramMap.get('page'), 10));
    }
}
