import {Injectable} from '@angular/core';
import {CourseState} from '../models/courseActivity.model';

@Injectable()
export class CourseListApiLoaderService {

    public courseListDataProvoider = {
        [CourseState.Listed]: null,
        [CourseState.Open]: null,
        [CourseState.Inactive]: null,
        [CourseState.Active]: null,
        [CourseState.Closed]: null,
    };

    constructor() {}

    getCourseListDataProvoider(filterValue: any): any {
        return this.courseListDataProvoider;
        // console.log('CoursePageStatus', CoursePageStatus[filterValue]);
    }
}
