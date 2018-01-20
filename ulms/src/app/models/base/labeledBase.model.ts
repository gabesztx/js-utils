import { Base, BaseModel } from './base.model';

export interface LabeledBase extends Base {
    label: string;
    title: string;
    description: string;
}

export abstract class LabeledBaseModel extends BaseModel implements LabeledBase {

    public label = '';
    public title = '';
    public description = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): LabeledBase {
        return <LabeledBase>super.serialize();
    }

}
