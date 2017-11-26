import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

import { CourseService } from '../course.service';
import { RecommendedService } from '../recommended.service';
import { OptionalService } from '../optional.service';
import { CourseTabIndex } from '../course-status-mapper.service';

@Injectable()
export class CoursesRoutingGuard implements CanActivate {

    pageIndexServices: {};

    constructor(
        private router: Router,
        private courseService: CourseService,
        private recommendedService: RecommendedService,
        private optionalService: OptionalService,
        // private upcomingService: UpcomingService,
        // private closedService: ClosedService
    ) {

        this.pageIndexServices = {
            [CourseTabIndex.ACTIVE]: this.courseService,
            [CourseTabIndex.RECOMMENDED]: this.recommendedService,
            [CourseTabIndex.OPTIONAL]: this.optionalService,
            // [CourseTabIndex.UPCOMING]: this.upcomingService,
            // [CourseTabIndex.CLOSED]: this.closedService,
        };
    }

    redicertPage(url: string) {
        this.router.navigate([url]);
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        const pageUrl = 'app/courses/list/';
        const pageUrlId = next.paramMap.get('page');
        const pageUrlIdNum = parseInt(pageUrlId, 10);
        const pageIndex = next.data['itemIndex'];
        const totalPageNum = this.pageIndexServices[pageIndex].getTotalPages();
        const isValidNumeric = /^\d+$/.test(pageUrlId);
        const isValidTotalId = pageUrlIdNum <= totalPageNum ? pageUrlId : false;

        if (!isValidNumeric || pageUrlIdNum === 0) {
            this.redicertPage(pageUrl + pageIndex + ' /1');
            return false;
        }

        if (!isValidTotalId) {
            this.redicertPage(pageUrl + pageIndex + '/' + totalPageNum);
            return false;
        }

        return true;
    }
}
