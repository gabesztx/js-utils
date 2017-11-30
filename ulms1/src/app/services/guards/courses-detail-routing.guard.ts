import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';


import { CourseDetailService } from '../course-detail.service';
import { CourseDetailService_ } from '../course-detail.service_';

@Injectable()
export class CoursesDetailRoutingGuard implements CanActivate {

    constructor(private router: Router, private courseDetailService: CourseDetailService) {}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const pageId = next.paramMap.get('courseId');
        console.log('CoursesDetailRoutingGuard--URL PATH ROUTING');
        this.courseDetailService.courseDetailRouting(pageId);
        return false;
    }
}
