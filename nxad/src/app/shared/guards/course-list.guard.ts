import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CourseService} from '../entities/course/course.service';
import {CommonRuntimeConfig} from '@nexius/core';

@Injectable({
    providedIn: 'root'
})
export class CourseListGuard implements Resolve<Observable<any>> {
    constructor(private courseService: CourseService,
                private commonRuntimeConfig: CommonRuntimeConfig) {
    }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const courseId = next.params['id'];
        const apiUrl = this.commonRuntimeConfig.baseApiUrl + 'lmsadmin/courses';
        return this.courseService.detail(apiUrl, courseId);
    }
}
