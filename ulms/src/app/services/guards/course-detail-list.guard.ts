import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import { CourseDetailService } from '../course-detail.service';

@Injectable()

export class CourseDetailListGuard implements Resolve<Observable<any>> {
    constructor(private courseDetailService: CourseDetailService) {}

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return Observable.of(false)
    }
}

