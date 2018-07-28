// Nexius Core imports
import { UserBaseModel } from '@nexius/core';

export enum UserLevel {
    None,
    User,
    AccountAdmin,
    InternalApp,
    DocAdmin,
    Administrator,
    SysSupport,
    SysAdmin
}

export class UserModel extends UserBaseModel {
    userLevel: number;
}
