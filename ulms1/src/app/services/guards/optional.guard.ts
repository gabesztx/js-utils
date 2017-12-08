import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {RestApiResponse} from '../base/http.class';
import {OptionalService} from '../optional.service';
import {CourseStatusMapperService} from '../../services/course-status-mapper.service';
import {SearchModel, FilterModel} from '../../models/search.model';

import {CourseObject} from '../../models/courseObject.model';
import {CourseTabIndex} from '../course-status-mapper.service';

@Injectable()

export class OptionalGuard implements Resolve<Observable<RestApiResponse<any>>> {
    constructor(private optionalService: OptionalService,
                private courseStatusMapperService: CourseStatusMapperService) {
    }

    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const pageNumParam = parseInt(next.paramMap.get('page'), 10);
        const pageSize = 15;
        const courseState = this.courseStatusMapperService.mapCourseTabIndexToCourseState(CourseTabIndex.OPTIONAL);
        const filter = new FilterModel('state', courseState);
        const search = new SearchModel(pageNumParam, 0, pageSize, [filter]);
        return this.optionalService.getListData(courseState, search);
    }
}
