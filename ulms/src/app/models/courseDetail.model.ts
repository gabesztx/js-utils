import { UserCourse, UserCourseModel } from './userCourse.model';
import { UserInvitationForCourseDetail } from './userInvitationForCourseDetail.model';

export interface CourseDetail extends UserCourse {
    userInvitations: Array<UserInvitationForCourseDetail>;
    certfifcateEnabled: boolean;
    profileDetail: number;
}

export class CourseDetailModel extends UserCourseModel implements CourseDetail {

    public userInvitations = [];
    public certfifcateEnabled = false;
    public profileDetail = 0;

    constructor(data: any) {
        super(data);
    }
    serialize(): CourseDetail {
        return <CourseDetail>super.serialize();
    }
}




