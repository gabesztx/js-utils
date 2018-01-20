import { ReferenceBase, ReferenceBaseModel } from './base/referenceBase.model';

export interface UserApplicationShallow extends ReferenceBase {
    application: ReferenceBase;
    externalId: string;
}

export class UserApplicationShallowModel extends ReferenceBaseModel implements UserApplicationShallow {

    public application = null;
    public externalId = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): UserApplicationShallow {
        return <UserApplicationShallow>super.serialize();
    }

}
