import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CourseDetailService } from '../course-detail.service';

@Injectable()

// export class CourseDetailGuard implements Resolve<Observable<any>> {
export class CourseDetailGuard implements Resolve<any> {
    constructor(
        private courseDetialService: CourseDetailService,
    ) { }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // return Observable.of([]);
        const pageId = next.paramMap.get('courseId');

        // return this.courseDetialService.list(pageId).subscribe(
        //     res => {
        //         console.log('RES OK', res);
        //         return Observable.of(res);
        //     } ,
        //     error => {
        //         console.log('ERRROOR', error);
        //         return error;
        //     }
        // );
        return this.courseDetialService.list(pageId);
    }
}
