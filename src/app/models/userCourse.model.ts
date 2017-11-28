import {Course, CourseModel} from './course.model';
import {ReferenceBase} from './base/referenceBase.model';
import {RegistrationRule} from './registrationRule.model';
import {CourseObject} from './courseObject.model';
import {CourseActivity, CourseState} from './courseActivity.model';
import {UserCourseRegistration} from './userCourseRegistration.model';


export interface UserCourse extends Course {
    courseActivities: Array<CourseActivity>;
    courseRegistration: UserCourseRegistration;
    courseState: CourseState;
}

export class UserCourseModel extends CourseModel implements UserCourse {

    public courseActivities = [];
    public courseRegistration = null;
    public courseState = CourseState.Unknown;

    constructor(data: any) {
        super(data);
    }

    serialize(): UserCourse {
        return <UserCourse>super.serialize();
    }

}
