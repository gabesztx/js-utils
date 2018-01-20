// External imports
import { Injectable } from '@angular/core';
// Internal imports
import { CourseState } from '../models/courseActivity.model';

export enum CourseTabIndex {
    ACTIVE = 'active',
    RECOMMENDED = 'recommended',
    OPTIONAL = 'optional',
    UPCOMING = 'upcoming',
    CLOSED= 'closed'
}

let __instance__: CourseStatusMapperService;

@Injectable()
export class CourseStatusMapperService {

    constructor() {
        if (__instance__ !== this) {
            __instance__ = this;
        }

        return __instance__;
    }

    mapCourseTabIndexToCourseState(tabIndex) {
        switch (tabIndex) {
            case CourseTabIndex.ACTIVE:
                return CourseState.Active;
            case CourseTabIndex.RECOMMENDED:
                return CourseState.Open;
            case CourseTabIndex.OPTIONAL:
                return CourseState.Listed;
            case CourseTabIndex.UPCOMING:
                return CourseState.Inactive;
            default:
                return CourseState.Closed;
        }
    }

}
