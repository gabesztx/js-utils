
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestApiResponse } from '../base/http.class';
import { OptionalService } from '../optional.service';
import { CourseObject } from '../../models/courseObject.model';

@Injectable()

export class OptionalGuard implements Resolve<Observable<RestApiResponse<CourseObject[]>>> {
    constructor(private courseService: OptionalService) {
    }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.courseService.getList(parseInt(next.paramMap.get('page'), 10));
    }
}
