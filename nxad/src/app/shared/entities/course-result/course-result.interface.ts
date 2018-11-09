import { ReferenceBase } from '../../../models/reference-base.model';

export interface CourseResult {
    id: string;
    externalUserId?: string;
    user?: ReferenceBase;
    registrarOrganization?: ReferenceBase;
    provider?: ReferenceBase;
    registrationDate?: string;
    resultEndDate?: string;
    measure?: number;
    progress?: number;
    result?: number;
    netTimeLimitOverride?: number;
    firstAttemptionTime?: string;
    lastAttemptionTime?: string;
    qualificationTime?: string;
    // status: todo ;
    // state: enum; //
}
