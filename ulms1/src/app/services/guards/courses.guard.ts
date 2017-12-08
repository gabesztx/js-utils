import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {RestApiResponse} from '../base/http.class';
import {CourseService} from '../course.service';
import {CourseStatusMapperService} from '../../services/course-status-mapper.service';
import {SearchModel, FilterModel} from '../../models/search.model';
import {CourseTabIndex} from '../course-status-mapper.service';

@Injectable()

// export class CoursesGuard implements Resolve<Observable<RestApiResponse<CourseDetail[]>>> {
export class CoursesGuard implements Resolve<Observable<any>> {
    constructor(private courseService: CourseService,
                private courseStatusMapperService: CourseStatusMapperService) {
    }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const pageNumParam = parseInt(next.paramMap.get('page'), 10);

        const pageSize = 10;
        const courseState = this.courseStatusMapperService.mapCourseTabIndexToCourseState(CourseTabIndex.ACTIVE);
        const filter = new FilterModel('state', courseState);
        const search = new SearchModel(pageNumParam, 0, pageSize, [filter]);
        console.log('pageNumParam - -- - - - - -', pageNumParam)
        return this.courseService.getListData(courseState, search);
    }
}
