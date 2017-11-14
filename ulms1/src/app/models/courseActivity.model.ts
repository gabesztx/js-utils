import { Base, BaseModel } from './base/base.model';
import { CourseRegistrationShallow } from './courseRegistrationShallow.model';
import { CourseObject } from './courseObject.model';
import { ObjectResult } from './objectResult.model';
import { Link } from './link.model';

export enum CourseActivityStatus {
    Unknown,
    Disabled,
    NotAttempted,
    Attempted,
    Completed,
    Satisfied,
    Qualified,
    Failed
}

export enum CourseState {
    Unknown,
    Listed,
    Open,
    Inactive,
    Active,
    Closed
}

export interface CourseActivity extends Base {
    status: CourseActivityStatus;
    state: CourseState;
    registration?: CourseRegistrationShallow;
    target: CourseObject;
    result: ObjectResult;
    links: Array<Link>;
}

export class CourseActivityModel extends BaseModel implements CourseActivity {

    public status = null;
    public state = null;
    public registration = null;
    public target = null;
    public result = null;
    public links = [];

    constructor(data: any) {
        super(data);
    }

    serialize(): CourseActivity {
        return <CourseActivity>super.serialize();
    }

}
