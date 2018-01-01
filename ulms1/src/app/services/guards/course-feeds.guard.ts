import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {CourseFeedsService} from '../course-feeds.service';

@Injectable()

export class CourseFeedsGuard implements Resolve<Observable<any>> {
    constructor(private courseFeedsService: CourseFeedsService) {}
    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.courseFeedsService.list();
    }
}
