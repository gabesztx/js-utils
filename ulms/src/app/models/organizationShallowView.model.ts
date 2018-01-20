import { ReferenceBase, ReferenceBaseModel } from './base/referenceBase.model';
import { OrganizationContactExtendedReference } from './organizationContactExtendedReference.model'

export enum OrganizationExternalIdType {
    Unknown,
    ONyA,
    TNyA,
    OMA,
    CJSz
}

export interface OrganizationShallowView extends ReferenceBase {
    contacts: Array<OrganizationContactExtendedReference>;
    isConfirmed: boolean;
    isActive: boolean;
    externalIdType: OrganizationExternalIdType;
    lastUpdateTime: string;
    registrationDate: string;
    domains: Array<ReferenceBase>;
    leaderName: string;
    category: string;
    vatExt: string;
    vatBase: string;
    shortName: string;
    name: string;
    parent: ReferenceBase;
    typeOf: string;
    properties: Array<ReferenceBase>;
}

export class OrganizationShallowViewModel extends ReferenceBaseModel implements OrganizationShallowView {

    public contacts = [];
    public isConfirmed = false;
    public isActive = false;
    public externalIdType = OrganizationExternalIdType.Unknown;
    public lastUpdateTime = '';
    public registrationDate = '';
    public domains = [];
    public leaderName = '';
    public category = '';
    public vatExt = '';
    public vatBase = '';
    public shortName = '';
    public name = '';
    public parent = null;
    public typeOf = '';
    public properties = [];

    constructor(data: any) {
        super(data);
    }

    serialize(): OrganizationShallowView {
        return <OrganizationShallowView>super.serialize();
    }

}
