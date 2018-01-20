import { Base, BaseModel } from './base/base.model';
import { ReferenceBase } from './base/referenceBase.model';
import { Course } from './course.model';
import { User } from './user.model';

export enum ContractStatus {
    Unknown,
    None,
    Rejected,
    Required,
    Pending,
    Accepted,
    Failed
}

export interface CourseRegistrationShallow extends Base {
    course: Course;
    user: User;
    registrationDate: string;
    application: ReferenceBase;
    externalUserId: string;
    externalContextId: string;
    externalContextTitle: string;
    externalContextLabel: string;
    returnUrl: string;
    returnLabel: string;
    forCredit: boolean;
    registrarOrganization: ReferenceBase;
    lisOutcomeServiceUrl: string;
    lisResultSourcedid: string;
    lisOutcomeDetailedResult: boolean;
    ltiConsumerKey: string;
    contractStatus: ContractStatus;
    contractDate: string;
    contractAcceptedDate: string;
    contract: Base;
    certificate: Base;
    qualificationNoticeAppeared: boolean;
}

export class CourseRegistrationShallowModel extends BaseModel implements CourseRegistrationShallow {

    public course = null;
    public user = null;
    public registrationDate = '';
    public application = null;
    public externalUserId = '';
    public externalContextId = '';
    public externalContextTitle = '';
    public externalContextLabel = '';
    public returnUrl = '';
    public returnLabel = '';
    public forCredit = false;
    public registrarOrganization = null;
    public lisOutcomeServiceUrl = '';
    public lisResultSourcedid = '';
    public lisOutcomeDetailedResult = false;
    public ltiConsumerKey = '';
    public contractStatus = ContractStatus.Unknown;
    public contractDate = '';
    public contractAcceptedDate = '';
    public contract = null;
    public certificate = null;
    public qualificationNoticeAppeared = false;

    constructor(data: any) {
        super(data);
    }

    serialize(): CourseRegistrationShallow {
        return <CourseRegistrationShallow>super.serialize();
    }

}
