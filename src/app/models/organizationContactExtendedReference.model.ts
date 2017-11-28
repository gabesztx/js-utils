import { ReferenceBase, ReferenceBaseModel } from './base/referenceBase.model';

export interface OrganizationContactExtendedReference extends ReferenceBase {
    email: string;
}

export class OrganizationContactExtendedReferenceModel extends ReferenceBaseModel implements OrganizationContactExtendedReference {

    public email = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): OrganizationContactExtendedReference {
        return <OrganizationContactExtendedReference>super.serialize();
    }

}
