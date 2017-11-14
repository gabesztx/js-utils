import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import { RestApiResponse } from '../base/http.class';
import { CourseDetailService_ } from '../course-detail.service_';
import { CourseDetail } from '../../models/courseDetail.model';

@Injectable()

export class CourseDetailGuard_ implements Resolve<Observable<any>> {
    constructor(private courseDetailService: CourseDetailService_) {}
    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const courseId = next.paramMap.get('courseId');
        return this.courseDetailService.list(courseId)
    }
}

