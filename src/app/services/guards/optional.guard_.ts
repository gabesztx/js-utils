
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestApiResponse } from '../base/http.class';
import { OptionalService_ } from '../optional.service_';
import { CourseObject } from '../../models/courseObject.model';

@Injectable()

export class OptionalGuard_ implements Resolve<Observable<RestApiResponse<CourseObject[]>>> {
    constructor(private courseService: OptionalService_) {
    }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.courseService.getList(parseInt(next.paramMap.get('page'), 10));
    }
}
