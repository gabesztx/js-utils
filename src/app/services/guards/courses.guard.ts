import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestApiResponse } from '../base/http.class';
import { CourseService } from '../course.service';
import { CourseStatusMapperService } from '../../services/course-status-mapper.service';
import { CourseDetail } from '../../models/courseDetail.model';
import { SearchModel, FilterModel } from '../../models/search.model';

@Injectable()

export class CoursesGuard implements Resolve<Observable<RestApiResponse<CourseDetail[]>>> {
    constructor(
        private courseService: CourseService,
        private courseStatusMapperService: CourseStatusMapperService
    ) { }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const pageNumParam = parseInt(next.paramMap.get('page'), 10);
        const pageSize = 10;
        const courseState = this.courseStatusMapperService.mapCourseTabIndexToCourseState(next.data.itemIndex);
        const filter = new FilterModel('state', courseState);
        const search = new SearchModel(pageNumParam, 0, pageSize, [filter]);
        return this.courseService.list(search);
    }
}
