import { ReferenceBase, ReferenceBaseModel } from './base/referenceBase.model';

export interface Contact extends ReferenceBase {
    typeOf: string;
    email: string;
    addressName: string;
    addressLocality: string;
    addressPostalCode: string;
    addressCountry: string;
    phoneName: string;
}

export class ContactModel extends ReferenceBaseModel implements Contact {

    public typeOf = '';
    public email = '';
    public addressName = '';
    public addressLocality = '';
    public addressPostalCode = '';
    public addressCountry = '';
    public phoneName = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): Contact {
        return <Contact>super.serialize();
    }

}
