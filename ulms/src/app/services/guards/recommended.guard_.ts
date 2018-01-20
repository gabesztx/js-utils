import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestApiResponse } from '../base/http.class';
import { RecommendedService_ } from '../recommended.service_';
import { CourseObject } from '../../models/courseObject.model';

@Injectable()

export class RecommendedGuard_ implements Resolve<Observable<RestApiResponse<CourseObject[]>>> {
    constructor(private courseService: RecommendedService_) {
    }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.courseService.getList(parseInt(next.paramMap.get('page'), 10));
    }
}
