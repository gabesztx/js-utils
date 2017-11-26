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
                private courseDetailService: CourseDetailService,
                private courseDetailService_: CourseDetailService_) {
    }

    redicertPage(url: string) {
        this.router.navigate([url]);
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // console.log('CoursesDetailRoutingGuard false');
        // const courseService = (<any>window).env === 'serv' ? this.courseDetailService : this.courseDetailService_
        console.log('CoursesDetailRoutingGuard', this.courseDetailService.getListData());

        // this.courseDetailService.getListData()
        /*courseDetailObservable.subscribe(params => {
            console.log('SUBBBBBBB', params);
        });*/
        return true;
    }
}
