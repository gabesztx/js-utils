import { ReferenceBase, ReferenceBaseModel } from './base/referenceBase.model';

export interface Property extends ReferenceBase {
    value: string;
}

export class PropertyModel extends ReferenceBaseModel implements Property {

    public value = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): Property {
        return <Property>super.serialize();
    }

}
