import { Base, BaseModel } from './base/base.model'
import { InvitationForCourseDetail } from './invitationForCourseDetail.model';
import { Link } from './link.model';

export interface UserInvitationForCourseDetail extends Base {
    creationDate: string;
    invitation: InvitationForCourseDetail;
    links: Array<Link>;
}

export class UserInvitationForCourseDetailModel extends BaseModel implements UserInvitationForCourseDetail {

    public creationDate = '';
    public invitation = null;
    public links = [];

    constructor(data: any) {
        super(data);
    }

    serialize(): UserInvitationForCourseDetail {
        return <UserInvitationForCourseDetail>super.serialize();
    }
}
