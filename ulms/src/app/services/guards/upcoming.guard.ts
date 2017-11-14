import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestApiResponse } from '../base/http.class';
import { UpcomingService } from '../upcoming.service';
import { CourseObject } from '../../models/courseObject.model';

@Injectable()

export class UpcomingGuard implements Resolve<Observable<RestApiResponse<CourseObject[]>>> {
    constructor(private courseService: UpcomingService) {
    }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.courseService.getList(parseInt(next.paramMap.get('page'), 10));
    }
}
