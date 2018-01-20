import { Base } from './base/base.model';
import { LabeledBase, LabeledBaseModel } from './base/labeledBase.model';
import { ObjectRequirement } from './objectRequirement.model';
import { PrerequisiteUser } from './prerequisiteUser.model';

export enum TechnicalProfile {
    Unknown,
    XgaDesktop,
    XgaDesktopMobile,
    XgsDesktopMobileHtmlOnly
}

export interface CourseObject extends LabeledBase {
    index?: number;
    parent?: Base;
    requirement: ObjectRequirement;
    prerequisite: Array<PrerequisiteUser>;
    serviceTechnicalProfile: TechnicalProfile;
    disturbingContent: boolean;
}

export class CourseObjectModel extends LabeledBaseModel implements CourseObject {

    public index = 0;
    public parent = null;
    public requirement = null;
    public prerequisite = [];
    public serviceTechnicalProfile = TechnicalProfile.Unknown;
    public disturbingContent = false;

    constructor(data: any) {
        super(data);
    }

    serialize(): CourseObject {
        return <CourseObject>super.serialize();
    }

}
