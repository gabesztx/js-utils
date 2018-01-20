import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestApiResponse } from '../base/http.class';
import { ClosedService_ } from '../closed.service_';

@Injectable()

export class ClosedGuard_ implements Resolve<Observable<RestApiResponse<any>>> {
    constructor(private closedService: ClosedService_) {}

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.closedService.getList(parseInt(next.paramMap.get('page'), 10));
    }
}
