import { UserShallow, UserShallowModel } from './userShallow.model';
import { Contact } from './contact.model';
import { Login } from './login.model';
import { UserOrganization } from './userOrganization.model';
import { UserApplication } from './userApplication.model';

export enum UserStatus {
    Unknown,
    User,
    Valami,
    Administrator,
    SysSupport,
    AccountAdmin,
    SysAdmin,
    InternalApp,
    DocAdmin,
}

export enum TwoFactorAuthenticationStatus {
    Unknown,
    NotNeeded,
    Required,
    Set
}

export interface User extends UserShallow {
    passowrd: string;
    redirectOnNextLogon: string;
    needPasswordChange: boolean;
    twoFactorAuthenticationStatus: TwoFactorAuthenticationStatus;
    contacts: Array<Contact>;
    logins: Array<Login>;
    userOrganizations: Array<UserOrganization>;
    userApplications: Array<UserApplication>;
}

export class UserModel extends UserShallowModel implements User {

    public passowrd = '';
    public redirectOnNextLogon = '';
    public needPasswordChange = false;
    public twoFactorAuthenticationStatus = TwoFactorAuthenticationStatus.Unknown;
    public contacts = [];
    public logins = [];
    public userOrganizations = [];
    public userApplications = [];

    constructor(data: any) {
        super(data);
    }

    serialize(): User {
        return <User>super.serialize();
    }

}
