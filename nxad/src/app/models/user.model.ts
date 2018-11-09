// Nexius Core imports
import { UserBaseModel } from '@nexius/core';

export enum UserLevel {
    None = 0,
    User = 1,
    Administrator = 3,
    SysSupport = 4,
    AccountAdmin = 5,
    SysAdmin = 6,
    InternalApp = 7,
    DocAdmin = 8,
    ExternalApp = 101
}

export class UserModel extends UserBaseModel {
    role: number;
    organizationsAdmin?: string[];
}
