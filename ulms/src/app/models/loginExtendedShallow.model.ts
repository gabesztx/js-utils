import { ReferenceBase, ReferenceBaseModel } from './base/referenceBase.model';

export interface LoginExtendedShallow extends ReferenceBase {
    orderNr: number;
}

export class LoginExtendedShallowModel extends ReferenceBaseModel implements LoginExtendedShallow {

    public orderNr = 0;

    constructor(data: any) {
        super(data);
    }

    serialize(): LoginExtendedShallow {
        return <LoginExtendedShallow>super.serialize();
    }

}
