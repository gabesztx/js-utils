import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CourseDetailService } from '../course-detail.service';

@Injectable()

export class CourseDetailGuard implements Resolve<any> {
    constructor(private courseDetailService: CourseDetailService) {}
    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const pageId = next.paramMap.get('courseId');
        // console.log('RESOLVE CourseDetailGuard ---- 1');
        return this.courseDetailService.getListData(pageId);
    }
}
