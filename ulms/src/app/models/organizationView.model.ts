import { OrganizationShallowView, OrganizationShallowViewModel } from './organizationShallowView.model';
import { Contact } from './contact.model';
import { Domain } from './domain.model';
import { Property } from './property.model';

export interface OrganizationView extends OrganizationShallowView {
    contancts: Array<Contact>;
    domains: Array<Domain>;
    properties: Array<Property>;
}

export class OrganizationViewModel extends OrganizationShallowViewModel implements OrganizationView {

    public contancts = [];
    public domains = [];
    public properties = [];

    constructor(data: any) {
        super(data);
    }

    serialize(): OrganizationView {
        return <OrganizationView>super.serialize();
    }

}
