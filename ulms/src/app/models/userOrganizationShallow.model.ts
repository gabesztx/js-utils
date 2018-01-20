import { ReferenceBase, ReferenceBaseModel } from './base/referenceBase.model';

export enum OrganizationType {
    Unknown,
    Administrator,
    Member
}

export interface UserOrganizationShallow extends ReferenceBase {
    organizationRoleType: OrganizationType;
    organization: ReferenceBase;
}

export class UserOrganizationShallowModel extends ReferenceBaseModel implements UserOrganizationShallow {

    public organizationRoleType = null;
    public organization = null;

    constructor(data: any) {
        super(data);
    }

    serialize(): UserOrganizationShallow {
        return <UserOrganizationShallow>super.serialize();
    }

}
