import { UserOrganizationShallow, UserOrganizationShallowModel } from './userOrganizationShallow.model';
import { OrganizationView } from './organizationView.model';

export interface UserOrganization extends UserOrganizationShallow {
    organization: OrganizationView;
}

export class UserOrganizationModel extends UserOrganizationShallowModel implements UserOrganization {

    constructor(data: any) {
        super(data);
    }

    serialize(): UserOrganization {
        return <UserOrganization>super.serialize();
    }

}
