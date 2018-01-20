import { LabeledBase, LabeledBaseModel } from './base/labeledBase.model';
import { ReferenceBase } from './base/referenceBase.model';
import { RegistrationRule } from './registrationRule.model';
import { CourseObject } from './courseObject.model';

export interface Course extends LabeledBase {
    imageUrl: string;
    registration: RegistrationRule;
    courseObjects: Array<CourseObject>;
    provider: ReferenceBase;
    forCredit: boolean;
    qualificationNotice: string;
    accreditationNum: string;
    isLocked: boolean;
}

export class CourseModel extends LabeledBaseModel implements Course {

    public imageUrl = '';
    public registration = null;
    public courseObjects = [];
    public provider = null;
    public forCredit = false;
    public qualificationNotice = '';
    public accreditationNum = '';
    public isLocked = false;

    constructor(data: any) {
        super(data);
    }

    serialize(): Course {
        return <Course>super.serialize();
    }

}
