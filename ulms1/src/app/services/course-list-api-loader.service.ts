import { Injectable } from '@angular/core';
import { CourseState } from '../models/courseActivity.model';

@Injectable()
export class CourseListApiLoaderService {
    public courseListDataProvoider = {
        [CourseState.Listed]: {},
        [CourseState.Open]: {},
        [CourseState.Inactive]: {},
        [CourseState.Active]: {},
        [CourseState.Closed]: {},
    };
}
