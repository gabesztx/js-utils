import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {RestApiResponse} from '../base/http.class';
import {CourseService} from '../course.service';
import {CourseStatusMapperService} from '../../services/course-status-mapper.service';
import {SearchModel, FilterModel} from '../../models/search.model';
import {CourseTabIndex} from '../course-status-mapper.service';

@Injectable()

export class ClosedGuard implements Resolve<Observable<RestApiResponse<any>>> {
    constructor(private courseService: CourseService,
                private courseStatusMapperService: CourseStatusMapperService) {
    }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const pageNumParam = parseInt(next.paramMap.get('page'), 10);
        const pageSize = 15;
        const courseState = this.courseStatusMapperService.mapCourseTabIndexToCourseState(CourseTabIndex.CLOSED);
        const filter = new FilterModel('state', courseState);
        const search = new SearchModel(pageNumParam, 0, pageSize, [filter]);
        return this.courseService.list(courseState, search);
        // return this.courseService.getListData(courseState, search);
    }
}
