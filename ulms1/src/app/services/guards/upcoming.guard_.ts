import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestApiResponse } from '../base/http.class';
import { UpcomingService_ } from '../upcoming.service_';
import { CourseObject } from '../../models/courseObject.model';

@Injectable()

export class UpcomingGuard_ implements Resolve<Observable<RestApiResponse<CourseObject[]>>> {
    constructor(private upcomingService: UpcomingService_) {
    }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.upcomingService.getList(parseInt(next.paramMap.get('page'), 10));
    }
}
