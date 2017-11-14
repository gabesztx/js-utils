import { Base, BaseModel } from './base/base.model';

export interface ObjectResult extends Base {
    completed: boolean;
    satisfied: boolean;
    hasCompletionExemption: boolean;
    hasSatisfactionExemption: boolean;
    progress: number;
    measure: number;
    completionTime?: string;
    satisfactionTime?: string;
    firstAttemptTime?: string;
    lastAttemptTime?: string;
    qualificationTime?: string;
    finalResultDate?: string;
    resultEndTime?: string;
    totalTime: number;
    resultTime: number;
    netTimeLimitOverride: number;
    grossTimeLimitOverride: number;
    qualified: boolean;
    isHiddenOverride: boolean;
    remainingTime: number;
}

export class ObjectResultModel extends BaseModel implements ObjectResult {

    public completed = false;
    public satisfied = false;
    public hasCompletionExemption = false;
    public hasSatisfactionExemption = false;
    public progress = 0;
    public measure = 0;
    public completionTime = '';
    public satisfactionTime = '';
    public firstAttemptTime = '';
    public lastAttemptTime = '';
    public qualificationTime = '';
    public finalResultDate = '';
    public resultEndTime = '';
    public totalTime = 0;
    public resultTime = 0;
    public netTimeLimitOverride = 0;
    public grossTimeLimitOverride = 0;
    public qualified = false;
    public isHiddenOverride = false;
    public remainingTime = 0;

    constructor(data: any) {
        super(data);
    }

    serialize(): ObjectResult {
        return <ObjectResult>super.serialize();
    }

}

