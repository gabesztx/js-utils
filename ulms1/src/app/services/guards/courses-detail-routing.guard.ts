import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';


import { CourseDetailService } from '../course-detail.service';
import { CourseDetailService_ } from '../course-detail.service_';

@Injectable()
export class CoursesDetailRoutingGuard implements CanActivate {
    public courseDetail: any;

    constructor(private router: Router,
                private courseDetailService: CourseDetailService) {
    }

    redicertPage(url: string) {
        this.router.navigate([url]);
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const pageId = next.paramMap.get('courseId');
        this.courseDetailService.list(pageId).subscribe(
            res => {
                console.log('RES OK', res);
                return true;
            } ,
            error => {
                console.log('ERRROOR', error);
                return error;
            }
        );
        return false;
    }
}
