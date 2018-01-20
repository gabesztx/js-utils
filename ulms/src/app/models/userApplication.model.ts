import { ReferenceBase, ReferenceBaseModel } from './base/referenceBase.model';
import { ApplicationShallow } from './applicationShallow.model';

export interface UserApplication extends ReferenceBase {
    application: ApplicationShallow;
    externalId: string;
}

export class UserApplicationModel extends ReferenceBaseModel implements UserApplication {

    public application = null;
    public externalId = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): UserApplication {
        return <UserApplication>super.serialize();
    }

}
