import { ReferenceBase, ReferenceBaseModel } from './base/referenceBase.model';
import { SystemRole } from './userShallow.model';

export interface ApplicationShallow extends ReferenceBase {
    name: string;
    secret: string;
    uri: string;
    claimType: string;
    isApiClient: boolean;
    isApiServer: boolean;
    applicationContexts: Array<ReferenceBase>;
    role: SystemRole;
    owner: ReferenceBase;
    matchExistingAccount: boolean;
    administrator: ReferenceBase;
    lastUpdateTime: string;
}

export class ApplicationShallowModel extends ReferenceBaseModel implements ApplicationShallow {

    public name = '';
    public secret = '';
    public uri = '';
    public claimType = '';
    public isApiClient = false;
    public isApiServer = false;
    public applicationContexts = [];
    public role = SystemRole.None;
    public owner = null;
    public matchExistingAccount = false;
    public administrator = null;
    public lastUpdateTime = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): ApplicationShallow {
        return <ApplicationShallow>super.serialize();
    }

}
