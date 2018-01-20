import { Base, BaseModel } from './base/base.model';

export enum LinkRel {
    ACCEPT = 'Accept',
    REJECT = 'Reject',
    CERTIFICATEALL = 'CertificateAll',
    CERTIFICATE = 'Certificate',
    CONTRACTAll = 'ContractAll',
    CONTRACT = 'Contract',
    CONTRACTREJECT = 'ContractReject',
    PROFILEUPGRADE = 'ProfileUpgrade',
    LICENSEDOCUMENTALL = 'LicenseDocumentAll',
    LICENSEDOCUMENT = 'LicenseDocument',
    EXTERNAL = 'External',
}

export enum DocumentumTypeValu {
    unknown,
    statement,
    contract,
    certificate,
    training_certificate,
    tender_form,
}

export interface Link extends Base {
    rel: string;
    href: string;
    target: string;
    label: string;
    tooltip: string;
}

export class LinkModel extends BaseModel implements Link {

    public rel = '';
    public href = '';
    public target = '';
    public label = '';
    public tooltip = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): Link {
        return <Link>super.serialize();
    }

}
