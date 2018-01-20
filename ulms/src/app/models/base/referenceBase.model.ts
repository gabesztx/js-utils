import { Base, BaseModel } from './base.model';

export interface ReferenceBase extends Base {
    name: string;
}

export abstract class ReferenceBaseModel extends BaseModel implements ReferenceBase {

    public name = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): ReferenceBase {
        return <ReferenceBase>super.serialize();
    }

}
