import { PrerequisiteBase, PrerequisiteBaseModel } from './base/prerequisiteBase.model';

export interface PrerequisiteUser extends PrerequisiteBase {
    qualified: boolean;
}

export abstract class PrerequisiteUserModel extends PrerequisiteBaseModel implements PrerequisiteUser {

    public qualified = false;

    constructor(data: any) {
        super(data);
    }

    serialize(): PrerequisiteUser {
        return <PrerequisiteUser>super.serialize();
    }

}
