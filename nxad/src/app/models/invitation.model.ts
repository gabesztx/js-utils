import { BaseModel, BaseSchema } from '@nexius/core';

export interface Invitation {
    creator: string;
    description: string;
    expiration: string;
    organization: any;
    sentUserInvitationsCounter: number;
    title: string;
}

export const InvitationModelSchema = Object.assign({}, BaseSchema);

export class InvitationModel extends BaseModel implements Invitation {

    creator: string;
    description: string;
    expiration: string;
    organization: any;
    sentUserInvitationsCounter: number;
    title: string;

    constructor(data?: any) {
        super(data);
    }

}

