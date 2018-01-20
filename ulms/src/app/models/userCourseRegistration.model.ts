import { Base, BaseModel } from './base/base.model';
import { ReferenceBase } from './base/referenceBase.model';
import { ContractStatus } from './courseRegistrationShallow.model';

export interface UserCourseRegistration extends Base {
    registrationDate: string;
    externalUserId: string;
    externalContextId: string;
    externalContextLabel: string;
    externalContextTitle: string;
    returnUrl: string;
    returnLabel: string;
    forCredit: boolean;
    registrarOrganization: ReferenceBase;
    contractStatus: ContractStatus;
    qualificationNoticeAppeared: boolean;
}

export class UserCourseRegistrationModel extends BaseModel implements UserCourseRegistration {

    public registrationDate = '';
    public externalUserId = '';
    public externalContextId = '';
    public externalContextLabel = '';
    public externalContextTitle = '';
    public returnUrl = '';
    public returnLabel = '';
    public forCredit = false;
    public registrarOrganization = null;
    public contractStatus = ContractStatus.Unknown;
    public qualificationNoticeAppeared = false;

    constructor(data: any) {
        super(data);
    }

    serialize(): UserCourseRegistration {
        return <UserCourseRegistration>super.serialize();
    }

}
