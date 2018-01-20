import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestApiResponse } from '../base/http.class';
import { RecommendedService } from '../recommended.service';
import { CourseStatusMapperService } from '../../services/course-status-mapper.service';
import { SearchModel, FilterModel } from '../../models/search.model';

import { CourseObject } from '../../models/courseObject.model';
import {CourseTabIndex} from '../course-status-mapper.service';

@Injectable()

// export class RecommendedGuard  {
export class RecommendedGuard implements Resolve<Observable<RestApiResponse<any>>> {
    constructor(
        private recommendedService: RecommendedService,
        private courseStatusMapperService: CourseStatusMapperService
    ) {}
    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const courseState = this.courseStatusMapperService.mapCourseTabIndexToCourseState(CourseTabIndex.RECOMMENDED);
        const pageNumParam = parseInt(next.paramMap.get('page'), 10);
        const pageIndex = pageNumParam ? pageNumParam : 1;
        const pageSize = 15;
        const filter = new FilterModel('state', courseState);
        const search = new SearchModel(pageIndex, 0, pageSize, [filter]);
        return this.recommendedService.list(courseState, search);
    }
}
