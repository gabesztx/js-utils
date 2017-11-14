import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestApiResponse } from '../base/http.class';
import { ClosedService } from '../closed.service';
import { CourseDetail } from '../../models/courseDetail.model';

@Injectable()

export class ClosedGuard implements Resolve<Observable<RestApiResponse<CourseDetail[]>>> {
    constructor(private closedService: ClosedService) {}

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.closedService.getList(parseInt(next.paramMap.get('page'), 10));
    }
}
