import { BaseModel, BaseSchema } from '@nexius/core';
import { UserInvitationStatus } from './enums/user-ivitation-status.enum';

export interface UserInvitation {
    id: string;
    userId: string;
    userName: string;
    email: string;
    status: UserInvitationStatus;
    statusChangedDate: string;
    invitationTitle: string;
}

export const UserInvitationSchema = Object.assign({}, BaseSchema);

export class UserInvitationModel extends BaseModel implements UserInvitation {

    id: string;
    userId: string;
    userName: string;
    email: string;
    status: UserInvitationStatus;
    statusChangedDate: string;
    invitationTitle: string;

    constructor(data?: any) {
        super(data);
    }

}

