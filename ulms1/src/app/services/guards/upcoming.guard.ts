import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {RestApiResponse} from '../base/http.class';
import {CourseService} from '../course.service';
import {CourseStatusMapperService} from '../../services/course-status-mapper.service';
import {CourseDetail} from '../../models/courseDetail.model';
import {SearchModel, FilterModel} from '../../models/search.model';
import {CourseTabIndex} from '../course-status-mapper.service';

@Injectable()

export class UpcomingGuard implements Resolve<Observable<RestApiResponse<CourseDetail[]>>> {
    constructor(private courseService: CourseService,
                private courseStatusMapperService: CourseStatusMapperService) {
    }
    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const courseState = this.courseStatusMapperService.mapCourseTabIndexToCourseState(CourseTabIndex.UPCOMING);
        const pageNumParam = parseInt(next.paramMap.get('page'), 10);
        const pageIndex = pageNumParam ? pageNumParam : 1;
        const pageSize = 15;
        const filter = new FilterModel('state', courseState);
        const search = new SearchModel(pageIndex, 0, pageSize, [filter]);
        return this.courseService.list(courseState, search);
    }
}
