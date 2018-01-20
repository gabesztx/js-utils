import { ReferenceBase, ReferenceBaseModel } from './base/referenceBase.model';
import { UserApplicationShallow } from './userApplicationShallow.model';
import { LoginExtendedShallow } from './loginExtendedShallow.model';
import { UserOrganizationShallow } from './userOrganizationShallow.model';

export enum QulificationLevel {
    Unknown,
    PrePrimarySchool,
    PrimarySchool,
    Finished10ThGrade,
    TechnicalSchool,
    SpecialSchool,
    VocationalSchool,
    CompletedSecondarySchool12ThGrade,
    Highschool,
    VocationalCollegeDiploma,
    HighschoolDiploma,
    TechnicianDegree,
    HigherEducationalDiploma,
    SpecializedHigherEducation
}

export enum LabourForceStatus {
    Unknown,
    Employed,
    Entrepreneur,
    Unemployed,
    Student,
    Pensioner,
    Disabled,
    ParentalLeave,
    Homemaker,
    OtherInacive
}

export enum Gender {
    Unknown,
    Male,
    Female
}

export enum SystemRole {
    None,
    User,
    Administrator,
    SysSupport,
    AccountAdmin,
    SysAdmin,
    InternalApp,
    ExternalApp = 101
}

export interface UserShallow extends ReferenceBase {
    userApplications: Array<UserApplicationShallow>;
    qualificationLevel: QulificationLevel;
    failedLoginCount: number;
    lastUpdateTime: string;
    labourForceStatus: LabourForceStatus;
    gender: Gender;
    vocationalDegreeCnt: number;
    detail: number;
    birthPlace: string;
    birthName: string;
    birthday: string;
    mothersName: string;
    role: SystemRole;
    locale: string;
    registrationDate: string;
    lastLoginTime: string;
    incapable: boolean;
    logins: Array<LoginExtendedShallow>;
    userOrganizations: Array<UserOrganizationShallow>;
}

export class UserShallowModel extends ReferenceBaseModel implements UserShallow {

    public userApplications = [];
    public qualificationLevel = null;
    public failedLoginCount = 0;
    public lastUpdateTime = '';
    public labourForceStatus = LabourForceStatus.Unknown;
    public gender = Gender.Unknown;
    public vocationalDegreeCnt = 0;
    public detail = 0;
    public birthPlace = '';
    public birthName = '';
    public birthday = '';
    public mothersName = '';
    public role = SystemRole.None;
    public locale = '';
    public registrationDate = '';
    public lastLoginTime = '';
    public incapable = false;
    public logins = [];
    public userOrganizations = [];

    constructor(data: any) {
        super(data);
    }

    serialize(): UserShallow {
        return <UserShallow>super.serialize();
    }

}
