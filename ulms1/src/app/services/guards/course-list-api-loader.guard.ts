import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {CourseListApiLoaderService} from '../course-list-api-loader.service';

@Injectable()
export class CourseListApiLoaderGuard implements CanActivate {
    constructor(private courseListApiLoaderService: CourseListApiLoaderService) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // console.log('CourseListApiLoaderGuard');
        // this.courseListApiLoaderService
        return Observable.of(true).delay(100);
        // return false;
    }
}
