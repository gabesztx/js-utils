import { LabeledBase, LabeledBaseModel } from './base/labeledBase.model';
import { ReferenceBase } from './base/referenceBase.model';

export enum InvitationSeverity {
    Unknown,
    Request,
    Mandatory,
    Promotion
}

export interface InvitationForCourseDetail extends LabeledBase {
    organization: ReferenceBase;
    severity: InvitationSeverity;
    expiration: string;
}

export class InvitationForCourseDetailModel extends LabeledBaseModel implements InvitationForCourseDetail {

    public organization = null;
    public severity = InvitationSeverity.Unknown;
    public expiration = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): InvitationForCourseDetail {
        return <InvitationForCourseDetail>super.serialize();
    }

}
