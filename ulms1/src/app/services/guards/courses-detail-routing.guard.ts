import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CourseDetailService } from '../course-detail.service';
import { Observable } from 'rxjs/Observable';

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
