import { ReferenceBase, ReferenceBaseModel } from './base/referenceBase.model';

export interface Domain extends ReferenceBase {
    confirmed: boolean;
}

export class DomainModel extends ReferenceBaseModel implements Domain {

    public confirmed = false;

    constructor(data: any) {
        super(data);
    }

    serialize(): Domain {
        return <Domain>super.serialize();
    }

}
