// External imports
import { Action } from '@ngrx/store';
// Internal imports
import { type } from '../../utils';
import { Course } from '../../../models/course.model';

export const ActionTypes = {
    SET_COURSE_LIST: type('Courses.SetCourseList'),
    SELECT_COURSE: type('Courses.Select')
};

export class ListCoursesAction implements Action {
    type = ActionTypes.SET_COURSE_LIST;

    constructor(public payload: Course[]) { }
}

export class CourseSelect implements Action {
    type = ActionTypes.SELECT_COURSE;

    constructor (public payload: Course) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type CourseActions
  = ListCoursesAction
  | CourseSelect;

