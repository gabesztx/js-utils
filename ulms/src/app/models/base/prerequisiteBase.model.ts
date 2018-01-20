import { Base, BaseModel } from './base.model';

export interface PrerequisiteBase extends Base {
    targetId: string;
    targetName: string;
}

export abstract class PrerequisiteBaseModel extends BaseModel implements PrerequisiteBase {

    public targetId = '';
    public targetName = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): PrerequisiteBase {
        return <PrerequisiteBase>super.serialize();
    }

}
