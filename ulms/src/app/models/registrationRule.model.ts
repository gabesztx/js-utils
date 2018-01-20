import { Base, BaseModel } from './base/base.model';

export interface RegistrationRule extends Base {
    startDate: string;
    endDate: string;
    userLimit: number;
    code: string;
    public: boolean;
    invitation: boolean;
    enroll: boolean;
    learningToolsEnabled: boolean;
    registrarOrganizationOverride: boolean;
}

export class RegistrationRuleModel extends BaseModel implements RegistrationRule {

    public startDate = '';
    public endDate = '';
    public userLimit = 0;
    public code = '';
    public public = false;
    public invitation = false;
    public enroll = false;
    public learningToolsEnabled = false;
    public registrarOrganizationOverride = false;

    constructor(data: any) {
        super(data);
    }

    serialize(): RegistrationRule {
        return <RegistrationRule>super.serialize();
    }

}
